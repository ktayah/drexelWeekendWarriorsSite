import Layout from '../components/Layout';
import TripList from '../components/TripList';

const Trips = (props) => (
	<Layout title={props.title} activePage='trips'>
		<div className="container">
			<div className="row">
				<h1>Join us on our Trips!</h1>
				<br /><br /><br />
				<TripList trip={['stuff']} />
			</div>
		</div>
	</Layout>
);

Trips.getInitialProps = ({store, isServer, pathname, query}) => {
	// const trips = axios.get(...);

	return {
		title: 'Weekend Warriors',
		trips: []
    };
}

export default Trips;
