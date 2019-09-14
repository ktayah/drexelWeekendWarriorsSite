import Layout from "../components/Layout";

const Contact = ({title}) => (
    <Layout title={title} activePage='contact'>
        <div className="container">
            THIS IS PLACEHOLDER
        </div>
    </Layout>
);

Contact.getInitialProps = () => {
    return {
        title: 'Weekend Warriors'
    }
}

export default Contact;