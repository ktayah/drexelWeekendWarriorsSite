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
        questions: [{
            question: "Can you buy tickets in advance?",
            answer: "In order to give every Drexel student a fair chance at coming on the trip, we don’t offer advance ticket sales." 
        },
        {
            question: "Can you buy tickets for someone else and yourself?",
            answer: "We have a one ticket per person policy. You can buy a ticket for someone who is not yourself, but that counts as your one ticket."
        },
        {
            question: "What if I have class/work during ticket sales?",
            answer: "If you cannot make it to ticket sales we recommend you find someone else to buy you a ticket, as long as they are not also buying a ticket for themselves or anyone else."
        },
        {
            question: "Where are ticket sales?",
            answer: "Ticket sales are usually in the lobby of the Rec Center. If they’re being held elsewhere it will be clearly stated on the trip flyer, so be sure to double check!"
        },
        {
            question: "How can I buy a ticket?",
            answer: "Come to ticket sales in person. We’ll promote all of our ticket sale dates at least a few days in advance. If you\’d like to know if any tickets are still available after the sale date email drexelweekendwarriors@gmail.com."
        },
        {
            question: "How do I find out when Trips/Ticket sales are?",
            answer: "You can find out about all our trips and ticket sales by following our Facebook and Instagram pages or joining our DragonLink page."
        },
        {
            question: "Can people who are not Drexel Students come?",
            answer: "No, unfortunately Drexel does not allow us to bring non-Drexel students on our trips."
        },
        {
            question: "Can faculty come on trips?",
            answer: "No, faculty cannot come on trips unless otherwise stated." 
        },
        {
            question: "Do I need to be in Weekend Warriors to go on a trip?",
            answer: "Nope! Our trips are open to all Drexel University undergraduate and graduate students. If you want to become a Weekend Warrior Trip Leader, we run recruitment once per year." 
        },
        {
            question: "Is transportation included in the price?",
            answer: "Yes! Transportation is included in all ticket prices." 
        },
        {
            question: "Can I drive myself to the trip?",
            answer: "Per Drexel’s policy, you are not allowed to drive yourself or other participants to the trip.  You must go to the trip and return to Drexel in one of the cars driven by a Weekend Warriors Trip Leader." 
        },
        {
            question: "The trip is close to my friends/my friends will be there. Can I go home with them instead of back to Drexel?",
            answer: "Per Drexel’s policy, if you come on the trip with us you have to come back to Drexel with us. There are no exceptions."  
        },
        {
            question: "Do I have to go to the pre-trip meeting?",
            answer: "Yes, all participants are required to go to one of the two scheduled pre-trip meetings. This gives the leaders the opportunity to not only give you all the information you’ll need for the trip, but to start to recognize you before the day of the trip." 
        },
        {
            question: "What do I do if I can’t make a pre-trip?",
            answer: "Contact us by email at drexelweekendwarriors@gmail.com as soon as you can so an alternative meeting time can be made. We will always try to be accommodating."
        },
        {
            question: "Is lunch provided?",
            answer: "Lunch is typically not provided unless specified on the flyer or by a Trip Leader."
        },
        {
            question: 'What do I do if I oversleep on the day of the trip?',
            answer: 'If you oversleep on the day of the trip, our Trip Leaders will call you to check if you are still coming. If you don’t respond, we will fill your spot with the next participant on the waitlist. Weekend Warriors does not refund participants for oversleeping through trips.'
        },
        {
            question: 'How do I get involved and become a Weekend Warrior?',
            answer: 'All undergraduate and graduate Drexel students are welcome to come on our trips! You do not have to be a club member to participate. If you wish to become a Trip Leader with the Weekend Warriors, you can fill out the application that we send out once per year, or you can contact us directly at drexelweekendwarriors@gmail.com.'
        },
        {
            question: 'I have a question that wasn’t answered here. What do I do?',
            answer: 'Simple! Just email us at drexelweekendwarriors@gmail.com. Someone should get back to you within a few hours.'
        }]
    }
}
export default Faq;