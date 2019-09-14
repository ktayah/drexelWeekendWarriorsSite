import Layout from '../components/Layout';
import React, {Component} from "react";
import CarouselWithThumbnails from '../components/Carousel';
import config from '../config';
import axios from 'axios';
import { connect } from 'react-redux';
import authenticate from '../actions/index';

const getDescription = async () => {
    const apiUrl = config.development ? config.apiDevelopment : config.api;
	const res = await axios.get(`${apiUrl}/abouts`);
	return res.data[0];
}

const Index = (props) => (
	<Layout title={props.title} activePage='index'>
		<div className="container">
			<CarouselWithThumbnails featuredTrips={props.featuredTrips}/>
			<div className="row" id="aboutUsText">
				<h1 className="h" id="header">About Us</h1>
				<p className="">{props.aboutUs}</p>
			</div>
		</div>
	</Layout>
);

Index.getInitialProps = async ({store, isServer, pathname, query}) => {
	// console.log(store);
	// dispatch(authenticate('ktayah@yahoo.com', 'test123'));
	// return {custom: 'custom'};
	const { clubDescription } = await getDescription();
	return {
		...store.getState(),
		aboutUs: clubDescription,
		title: 'Weekend Warriors',
		featuredTrips: [
            {
                'name': "Surfing",
                'img': "static/images/carousel/surf.jpg"
            },
            {
                'name': "Paddleboarding",
                'img': "static/images/carousel/sup.jpg"
            },
            {
                'name': "Mt. Minsi Hike",
                'img': "static/images/carousel/minsi.jpg"
            },
        ],
    }
}

export default Index;
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