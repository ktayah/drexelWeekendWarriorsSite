import React, { useCallback } from 'react';
import { useRouter } from 'next/router'
import { connect } from 'react-redux';
import Layout from '../../components/Layout';
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
    const { id: tripId, tripName, tripDescription, tripDate, ticketSales, importantDocuments, tripPhoto } = eventData;
    const tripLeaders = eventData.tripLeaders.map(leader => leader.username);
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
                const formToken = formTokenRes.data.formToken;
                router.push('/forms/[form]', `/forms/${formToken}`);
            } catch (err) {
                console.error(err);
                return null;
            }
        },
        [tripId, userJwt],
    )

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
                             <div>
                                <button className='btn btn-primary' type='button' onClick={() => openForm(false)}>Generate Single Sign Up Form</button>
                                <button className='btn btn-primary mx-4' type='button' onClick={() => openForm(true)}>Generate Multi-sign Up Form</button>
                            </div>}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

Event.getInitialProps = async ({query}) => {
    const eventData = await getEventData(query.event);
    return {
        eventData
    }
}

const mapStateToProps = state => ({
    userPrivilege: state.authenticate.user?.role.type,
    userName: state.authenticate.user?.username,
    userJwt: state.authenticate.jwt,
});

export default connect(mapStateToProps)(Event);