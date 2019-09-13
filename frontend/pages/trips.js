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
		<div className="container">
			<div className="row">
				<h1>Join us on our Trips!</h1>
				<br /><br /><br />
				<TripList trips={props.trips} />
			</div>
		</div>
	</Layout>
);

Trips.getInitialProps = async ({store, isServer, pathname, query}) => {
	const trips = await getTrips();
	return {
		title: 'Weekend Warriors',
		trips: trips
    }
}

export default Trips;
