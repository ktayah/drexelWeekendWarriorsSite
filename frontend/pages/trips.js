import Layout from '../components/Layout';
import TripList from '../components/TripList';
import config from '../config';
import axios from 'axios';

const getTrips = async () => {
    const apiUrl = config.development ? config.apiDevelopment : config.api;
	const res = await axios.get(`${apiUrl}/trips`);
	return res.data;
}

const Trips = (props) => (
	<Layout title={props.title} activePage='trips'>
		<div className='container'>
			<br />
			<h1 className='display-5 text-center shadow-lg bg-white rounded p-3 mx-5'>Join us on our Trips!</h1>
			<hr class='my-4' />
			<TripList trips={props.trips} />
		</div>
	</Layout>
);

Trips.getInitialProps = async ({store, isServer, pathname, query}) => {
	// const trips = await getTrips();
	return {
		title: 'Weekend Warriors',
		trips: false //trips
    }
}

export default Trips;
