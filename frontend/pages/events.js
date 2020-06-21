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
			<EventList events={events} />
		</div>
	</Layout>
);

export async function getStaticProps() {
	const events = await getEvents();
	return {
		props: {
			events
		}
	}
}

export default Events;
