import Layout from '../components/Layout';

const About = (props) => (
	<div>
		<Layout title={props.title}>
			<div className="container">
				<div className="row">
					PLACEHOLDER TEXT -- ABOUT PAGE
				</div>
			</div>
		</Layout>
	</div>
);

About.getInitialProps = async function() {
    return {
		title: 'Weekend Warriors'
    };
}

export default About;