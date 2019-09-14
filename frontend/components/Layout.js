import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer'
import { connect } from 'react-redux';
// import { Provider } from 'react-redux';
// import store from '../store';

const Layout = ({children, title, activePage}) => (
    <main className="d-flex flex-column h-100">
        <Head>
            <title>{title}</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"/>
            <link rel="stylesheet" href="static/styles/wwstyles.css"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
            <link rel="manifest" href="/static/favicon/site.webmanifest" />
            <link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#00aba9" />
            <meta name="theme-color" content="#ffffff" />
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
            <script type="module" src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons/ionicons.esm.js"></script>
            <script noModule="" src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons/ionicons.js"></script>
        </Head>
        <Navbar title={title} activePage={activePage}/>
        <br/>
        <div className="container">
            {children}
        </div>
        <Footer />
    </main>
);
export default Layout;
// Remaining dead code for redux expansion in next milestone
// export default connect()(Layout);