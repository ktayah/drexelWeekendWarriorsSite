import Layout from '../components/Layout';
import React from 'react';
import axios from 'axios';
import Carousel from '../components/Carousel';
import Announcment from '../components/Announcment';
import config from '../config';
import { orderEventsByTripDate } from '../utils/tripUtils';

const getAboutUs = async () => {
	const apiUrl = config.development ? config.apiDevelopment : config.api;
	const res = await axios.get(`${apiUrl}/about`);
	return res.data;
}

const Index = ({upcomingEvents, manuallySetCarouselPhotos, aboutUs, announcementMessage, announcementLink}) => (
	<Layout activePage='index'>
		{announcementMessage && 
			<Announcment announcementMessage={announcementMessage} announcementLink={announcementLink} />
		}
		<Carousel id="carousel" upcomingEvents={upcomingEvents} manuallySetPhotos={manuallySetCarouselPhotos} />
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

export async function getServerSideProps() {
	const { clubDescription, upcomingEvents, announcementMessage, announcementLink, manuallySetCarouselPhotos = {}} = await getAboutUs();
	// const orderedEvents = orderEventsByTripDate(upcomingTrips); // If we need ordering again
	return {
		props: {
			aboutUs: clubDescription,
			upcomingEvents,
			manuallySetCarouselPhotos,
			announcementMessage,
			announcementLink
		}
    }
}

export default Index;