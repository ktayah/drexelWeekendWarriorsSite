import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router'
import { connect } from 'react-redux';
import Layout from '../../components/Layout';
import FormPicker from '../../components/FormPicker';
import { Row, Button } from 'reactstrap';
import axios from 'axios';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import config from '../../config';

const apiUrl = config.development ? config.apiDevelopment : config.api;

const getEventData = async (eventId) => {
	const res = await axios.get(`${apiUrl}/trips/${eventId}`);
    return res.data;
}

const getDateTime = dateString => moment(dateString).format('dddd, MMMM Do YYYY, h:mm a');

const Event = ({eventData, userPrivilege, userName, userJwt}) => {
    const { 
        id: tripId, 
        tripName, 
        tripDescription, 
        tripDate, 
        ticketSales, 
        importantDocuments, 
        tripPhoto, 
        isOnlineEvent, 
        ticketLink, 
        participantForms 
    } = eventData;
    const tripLeaders = eventData.tripLeaders.map(leader => leader.username);
    const [modalOpen, setModalOpen] = useState(false);
    const router = useRouter();

    const openForm = useCallback(
        async (isMultiSignUp) => {
            try {
                const formTokenRes = await axios.post(`${apiUrl}/forms/getFormToken`, {
                    isMultiSignUp,
                    tripId
                }, {
                    headers: {
                        Authorization: `Bearer ${userJwt}`
                    }
                });
                const { formToken } = formTokenRes.data;
                router.push('/forms/[form]', `/forms/${formToken}`);
            } catch (err) {
                console.error(err);
                return null;
            }
        },
        [tripId, userJwt],
    );

    const toggleModal = useCallback(() => setModalOpen(!modalOpen), [modalOpen]);

    return (
        <Layout activePage='events'>
            <br />
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <img className='img-fluid' src={`${apiUrl + tripPhoto.url}`} alt='trip image cap' />
                    </div>
                    <div className='col'>
                        <h1>{tripName}</h1>
                        <p>{getDateTime(tripDate)}</p>
                        <p>{ticketSales && 
                            <>
                                <span>Ticket sales: </span> 
                                {getDateTime(ticketSales)}
                            </>
                        }</p>
                        {isOnlineEvent && ticketLink && 
                            <p>Registration link: <a href={ticketLink}>{ticketLink}</a></p>
                        }
                        <ReactMarkdown source={tripDescription} />
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col'>
                        {importantDocuments.length ?
                            <>
                                <h1 className='text-center'>Important Documents for Trip Participants</h1>
                                <div>

                                </div>
                            </>
                            :
                            <div></div>               
                        }
                    </div>
                    <div className='col'>
                        {((userPrivilege === 'leader' && tripLeaders.includes(userName)) || userPrivilege === 'admin') && 
                            <>
                                <Row>
                                    <p className='h3'>Leader Tools</p>
                                </Row>
                                <Row>
                                    <Button color='info' className='my-2' onClick={toggleModal}>View Participant Forms</Button>
                                    <FormPicker toggleModal={toggleModal} modalOpen={modalOpen} formData={participantForms} />
                                </Row>
                                <Row>
                                    <div>
                                        <button className='btn btn-primary' type='button' onClick={() => openForm(false)}>Generate Single Sign Up Form</button>
                                        <button className='btn btn-primary mx-4' type='button' onClick={() => openForm(true)}>Generate Multi-sign Up Form</button>
                                    </div>
                                </Row>
                            </>
                        }
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export async function getServerSideProps({ query }) {
    const eventData = await getEventData(query.event);
    return {
        props: {
            eventData
        }
    }
}

const mapStateToProps = state => ({
    userPrivilege: state.authenticate.user?.role.type,
    userName: state.authenticate.user?.username,
    userJwt: state.authenticate.jwt,
});

export default connect(mapStateToProps)(Event);