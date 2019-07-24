import Layout from '../components/Layout';

const Trips = (props) => (
	<div>
		<Layout title={props.title}>
			<div className="container">
				<div className="row">
					PLACEHOLDER TEXT -- TRIPS PAGE
				</div>
			</div>
		</Layout>
	</div>
);

Trips.getInitialProps = async function() {
    return {
		title: 'Weekend Warriors'
    };
}

export default Trips;
