import React from 'react';
import Layout from '../../components/Layout';
import axios from 'axios';
import moment from 'moment';
import config from '../../config';

const apiUrl = config.development ? config.apiDevelopment : config.api;

const getEventData = async (eventId) => {
	const res = await axios.get(`${apiUrl}/trips/${eventId}`);
    return res.data;
}

const getDateTime = dateString => moment(dateString).format('dddd, MMMM Do YYYY, h:mm a');

const Event = ({eventData}) => {
    const { tripName, tripDescription, tripDate, ticketSales, importantDocuments, tripPhoto } = eventData;
    return(
        <Layout activePage='events'>
            <br />
            <div className='container'>
                {console.log(eventData)}
                <div className='row'>
                    <div className='col'>
                        <img className='card-img-top' src={`${apiUrl + tripPhoto.url}`} alt='trip image cap' />
                    </div>
                    <div className='col'>
                        <h1>{tripName}</h1>
                        <p>{tripDescription}</p>
                        <p>{getDateTime(tripDate)}</p>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col'>
                        {/* {importantDocuments &&  */}
                            <>
                                <h1 className='text-center'>Important Documents for Trip Participants</h1>
                                <div>

                                </div>
                            </>                    
                        {/* } */}
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

export default Event;