import Layout from '../components/Layout';
import React, {Component} from "react";
import Carousel from '../components/Carousel';
import { connect } from 'react-redux';
import authenticate from '../actions/index';

const Index = (props) => (
	<Layout title={props.title}>
		{console.log('Index Props', props)}
		{/* {props.dispatch(authenticate('ktayah@yahoo.com', 'test123'))} */}
		{/* <button onClick={() => props.dispatch(authenticate('ktayah@yahoo.com', 'test123'))} >Test Button</button> */}
		{/* <button onClick={() => props.onLogin('ktayah@yahoo.com', 'test123')} >Test Button</button> */}
		<div className="container">
			<div id="carousel" className="row">
				<div className="col"><Carousel /></div>
			</div>
			<div id="threePic" className="row">
				<div id="column" className="col-sm">
					<h1 className='h1'>Trip</h1>
					<img src={props.featuredTrips[0]}></img>
				</div>
				<div id="column" className="col-sm">
					<h1 className='h1'>Trip</h1>
					<img src={props.featuredTrips[1]}></img>					
				</div>
				<div id="column" className="col-sm">
					<h1 className='h1'>Trip</h1>
					<img src={props.featuredTrips[2]}></img>
				</div>
			</div>
			<div className="row" id="aboutUsText">
				<h1 className="h" id="header">About Us</h1>
				<p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel malesuada dui. Nunc efficitur tristique mauris. Aenean luctus nisi est, at ultricies odio hendrerit condimentum. Nullam turpis quam, vehicula quis blandit non, placerat at libero. Quisque condimentum posuere odio. Proin purus nulla, congue vel nulla ut, pretium iaculis sem. Fusce nec scelerisque leo. Aenean tristique eget urna quis finibus.
					Sed ullamcorper enim nec urna facilisis volutpat. Pellentesque rutrum gravida diam, at eleifend ex pharetra ut. Vestibulum odio felis, imperdiet vel semper at, volutpat imperdiet magna. In tortor ipsum, faucibus a finibus non, eleifend non arcu. Pellentesque quam enim, efficitur rutrum hendrerit in, sodales eget urna. Cras odio augue, lacinia vel elit eu, condimentum consectetur diam. Quisque tristique nibh orci, quis malesuada lectus imperdiet non. Donec vehicula lacinia maximus. Aenean sit amet orci sed eros fermentum dignissim eget at leo. Sed blandit rhoncus odio, placerat efficitur enim rutrum eget. Ut faucibus nisl neque, in vehicula tellus faucibus a. Nam eu sapien et turpis pulvi
				</p>
			</div>
		</div>
	</Layout>
);

Index.getInitialProps = ({store, isServer, pathname, query}) => {
	// console.log(store);
	// dispatch(authenticate('ktayah@yahoo.com', 'test123'));
	// return {custom: 'custom'};
	return {
		...store.getState(),
		title: 'Weekend Warriors',
		featuredTrips: ['https://via.placeholder.com/200', 'https://via.placeholder.com/100', 'https://via.placeholder.com/100']
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (userName, password) => { dispatch(authenticate(userName, password)) },
        //onLogin: (userName, password) => bindActionCreators(authenticate(userName, password), dispatch),
        onLogout: () => dispatch(logOut())
    };
}

const mapStateToProps = state => {
    return { ...state };
    // const { jwt, user } = state.userData;
    // return { jwt, user }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);