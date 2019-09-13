import React from 'react'
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux'
import App from "next/app";
import initializeStore from '../store';

class MyApp extends App {

    static async getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        // console.log('_app.js: ', pageProps);
        return { pageProps }
    }

    render () {
        const { Component, pageProps, store } = this.props;
        // console.log(Component, pageProps, store);
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }
}

export default withRedux(initializeStore)(MyApp);