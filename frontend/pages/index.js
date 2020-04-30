import Layout from '../components/Layout';
import React from 'react';
import CarouselWithThumbnails from '../components/Carousel';
import config from '../config';
import axios from 'axios';
import Announcment from '../components/Announcment';

const getAboutUs = async () => {
    const apiUrl = config.development ? config.apiDevelopment : config.api;
	const res = await axios.get(`${apiUrl}/abouts`);
	return res.data[0];
}

const Index = ({upcomingTrips, aboutUs, announcementMessage, announcementLink}) => (
	<Layout activePage='index'>
		{announcementMessage && 
			<Announcment announcementMessage={announcementMessage} announcementLink={announcementLink} />
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
	const { clubDescription, upcomingTrips, announcementMessage, announcementLink} = await getAboutUs();
	return {
		...store.getState(),
		aboutUs: clubDescription,
		upcomingTrips,
		announcementMessage,
		announcementLink
    }
}

export default Index;