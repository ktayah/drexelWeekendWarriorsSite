import Layout from "../components/Layout";

const Faq = (props) => (
    <Layout title={props.title} activePage='faq'>
        <h1>This is a placeholder-FAQ text</h1>
    </Layout>
);

Faq.getInitialProps = ({store, isServer, pathname, query}) => {
	return {
        ...store,
		title: 'Weekend Warriors',
    }
}
export default Faq;