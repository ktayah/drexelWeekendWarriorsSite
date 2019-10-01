import Layout from '../components/Layout';
import React, {Component} from 'react';
import CarouselWithThumbnails from '../components/Carousel';
import config from '../config';
import axios from 'axios';
import { connect } from 'react-redux';
import authenticate from '../actions/index';
import Announcment from '../components/Announcment';

const getAboutUs = async () => {
    const apiUrl = config.development ? config.apiDevelopment : config.api;
	const res = await axios.get(`${apiUrl}/abouts`);
	return res.data[0];
}

const Index = ({title, upcomingTrips, aboutUs, announcmentMessage}) => (
	<Layout title={title} activePage='index'>
		{announcmentMessage && 
			<Announcment announcmentMessage={announcmentMessage} />
		}
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
	const { clubDescription, upcomingTrips, announcmentMessage} = await getAboutUs();
	return {
		...store.getState(),
		aboutUs: clubDescription,
		title: 'Weekend Warriors',
		upcomingTrips: upcomingTrips,
		announcmentMessage: announcmentMessage
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
