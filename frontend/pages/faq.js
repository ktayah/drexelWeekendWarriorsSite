import Layout from "../components/Layout";

const FaqCard = (props) => (
    <div className="FaqCard" style={{padding:'1em'}}>
        <h5>{props.question}</h5>
        <p style={{color:'#717a81'}}>
            {props.answer}
        </p>
    </div>
)


const Faq = (props) => {
    return (
        <Layout title={props.title}>
            <h3>Frequently Asked Questions</h3>
            <ul>
            <hr style={{padding:'0.25em'}}/>
            {
                props.questions.map((faq) => {
                    return <li><FaqCard question={faq['question']} answer={faq['answer']} /></li>
                })
            }
            </ul>
        </Layout>
    );
}

Faq.getInitialProps = ({store, isServer, pathname, query}) => {
	return {
        ...store,
		title: 'Weekend Warriors',
        questions: [
                {
                    question: "What is the Weekend Warriors?", 
                    answer:"The Weekend Warriors is a club that goes outside! Hooray!"
                },
                {
                    question: "What kinds of trips do you run?", 
                    answer:"We run all of the trips. Every kind. Yes, even that kind."},
                {
                    question: "I bought six tickets and cancelled them all on the 7th day before a trip. Can I get my money back?", 
                    answer:"We planned and put together six trip plans and included your name on all of them. Can we have our time back?"},
            ],
    }
}
export default Faq;