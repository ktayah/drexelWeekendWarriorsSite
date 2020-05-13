import Layout from '../components/Layout';
import EventList from '../components/EventsList';
import config from '../config';
import { orderEventsByTripDate } from '../utils/tripUtils';
import axios from 'axios';

const getEvents = async () => {
    const apiUrl = config.development ? config.apiDevelopment : config.api;
	const res = await axios.get(`${apiUrl}/trips`);
	const orderedEvents = orderEventsByTripDate(res.data);
	return orderedEvents;
}

const Events = ({events}) => (
	<Layout activePage='events'>
		<div className='container'>
			<br />
			<h1 className='display-5 text-center shadow-lg bg-white rounded p-3 mx-5'>Join us for our Events!</h1>
			<hr className='my-4' />
			<EventList events={events} />
		</div>
	</Layout>
);

Events.getInitialProps = async ({store, isServer, pathname, query}) => {
	const events = await getEvents();
	return {
		events
    }
}

export default Events;
