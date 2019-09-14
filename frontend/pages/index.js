import Layout from '../components/Layout';
import React, {Component} from 'react';
import CarouselWithThumbnails from '../components/Carousel';
import config from '../config';
import axios from 'axios';
import { connect } from 'react-redux';
import authenticate from '../actions/index';

const getAboutUs = async () => {
    const apiUrl = config.development ? config.apiDevelopment : config.api;
	const res = await axios.get(`${apiUrl}/abouts`);
	return res.data[0];
}

const Index = ({title, upcomingTrips, aboutUs}) => (
	<Layout title={title} activePage='index'>
		<h1 className='display-4 text-center shadow-lg bg-white rounded p-1 mx-5'>Our Upcoming Trips</h1>
		<CarouselWithThumbnails id="carousel" upcomingTrips={upcomingTrips}/>
		<div className='container'>
			<hr class='my-4' />
			<h1 className='display-5 text-center'>About Us</h1>
			<p className="py-3">{aboutUs}</p>
		</div>
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