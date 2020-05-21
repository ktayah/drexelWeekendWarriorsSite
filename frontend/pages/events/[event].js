import React from 'react';
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

const Event = ({eventData}) => {
    const { tripName, tripDescription, ticketLink, tripDate, ticketSales, importantDocuments, tripPhoto, isOnlineEvent } = eventData;
    return(
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
                        {(userPrivilege === 'leader' || userPrivilege === 'admin') && <div>
                            Leader Stuff
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
    userPrivilege: state.authenticate.user?.role.type
});

export default connect(mapStateToProps)(Event);