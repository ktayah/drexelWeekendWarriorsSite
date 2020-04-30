import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import axios from 'axios';
import moment from 'moment';
import config from '../../config';

const apiUrl = config.development ? config.apiDevelopment : config.api;

const getTripData = async (tripId) => {
	const res = await axios.get(`${apiUrl}/trips/${tripId}`);
    return res.data;
}

const getDateTime = dateString => moment(dateString).format('dddd, MMMM Do YYYY, h:mm a');

const Trip = ({tripData}) => {
    const { tripName, tripDescription, tripDate, ticketSales, importantDocuments, tripPhoto } = tripData;
    return(
        <Layout activePage='trips'>
            <br />
            <div className='container'>
                {console.log(tripData)}
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

Trip.getInitialProps = async ({query}) => {
    const tripData = await getTripData(query.trip);
    return {
        tripData
    }
}

export default Trip;