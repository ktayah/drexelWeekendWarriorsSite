import Layout from '../components/Layout';

const About = (props) => (
	<Layout title={props.title}>
		<div className="container">
			<div className="row">
				PLACEHOLDER TEXT -- ABOUT PAGE
			</div>
		</div>
	</Layout>
);

About.getInitialProps = async function() {
    return {
		title: 'Weekend Warriors'
    };
}

export default About;