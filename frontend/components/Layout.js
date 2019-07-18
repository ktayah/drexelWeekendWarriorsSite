import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) => (
    <div>
        <Head>
            <title>Weekend Warriors</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"/>
		</Head>
        <Navbar title={props.props.title} />
        <br/>
        <div className="container">
            {props.children}
        </div>
    </div>
);

export default Layout;