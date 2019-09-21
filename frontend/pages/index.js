import Layout from '../components/Layout';
import React, {Component} from 'react';
import CarouselWithThumbnails from '../components/Carousel';
import config from '../config';
import axios from 'axios';
import { connect } from 'react-redux';
import authenticate from '../actions/index';

const getAboutUs = async () => {
    // const apiUrl = config.development ? config.apiDevelopment : config.api;
	// const res = await axios.get(`${apiUrl}/abouts`);
	// return res.data[0];
	return { // Temporary fix to allow for something to show on website
		upcomingTrips: [{
			tripName: 'Fall Trips',
			id : 1,
			tripPhoto: {
				url: '/fallquarter.jpg'
			}
		}],
		clubDescription: 'Weekend Warriors is a group dedicated to providing the Drexel community with exciting opportunities to engage with the outdoor world. Everyone needs to take a break sometimes. Be it by relaxing on a leisurely hike or feeling the exhiliration of whitewater rafting, Weekend Warriors provides students with a change from the pressures of schoolwork. Our mission is to make the outdoors as accessible as possible for Drexel students and to train responsible and capable Trip Leaders to keep our trips safe, but fun. It is our mission to bring the outdoors to students that have never before realized the benefits that nature can bring.'
	}
}

const Index = ({title, upcomingTrips, aboutUs}) => (
	<Layout title={title} activePage='index'>
		<CarouselWithThumbnails id="carousel" upcomingTrips={upcomingTrips}/>
		<div className='container'>
			<hr className='my-4' />
			<h1 className='display-5 text-center'>About Us</h1>
			<p className="py-3">{aboutUs}</p>
		</div>
		{/* <style jsx>{` This might be a solution
			@include media-breakpoint-up(sm) {
				html {
					font-size: 2rem;
				}
			}
			@include media-breakpoint-up(md) {
				html {
					font-size: 2.2rem;
				}
			}
		`}</style> */}
	</Layout>
);

Index.getInitialProps = async ({store, isServer, pathname, query}) => {
	const { clubDescription, upcomingTrips} = await getAboutUs();
	return {
		...store.getState(),
		aboutUs: clubDescription,
		title: 'Weekend Warriors',
		upcomingTrips: upcomingTrips
    }
}

export default Index;
// Remaining dead code for redux expansion in next milestone
// const mapDispatchToProps = dispatch => {
//     return {
//         onLogin: (userName, password) => { dispatch(authenticate(userName, password)) },
//         //onLogin: (userName, password) => bindActionCreators(authenticate(userName, password), dispatch),
//         onLogout: () => dispatch(logOut())
//     };
// }

// const mapStateToProps = state => {
//     return { ...state };
//     // const { jwt, user } = state.userData;
//     // return { jwt, user }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Index);
