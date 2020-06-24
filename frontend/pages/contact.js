import Layout from "../components/Layout";
import axios from 'axios';
import config from '../config';

const initialState = {
    firstName: '',
    lastName : '',
    email: '',
    subject: '',
    message: ''
}

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    sendEmail = async () => {
        try {
            const apiUrl = config.development ? config.apiDevelopment : config.api;
            const { firstName, lastName, email, subject, message } = this.state;
            await axios.post(`${apiUrl}/email`, {
                to: 'help@drexelww.com',
                replyTo: email,
                from: email,
                subject: `${subject} - From Drexelww.com`,
                text: `From ${firstName} ${lastName}\n ${message}`
            });
            this.setState(initialState);
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        return (
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputFirstName">First Name</label>
                        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} className="form-control" id="inputFirstName" placeholder="First Name" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputLastName">Last Name</label>
                        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} className="form-control" id="inputLastName" placeholder="Last Name" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputEmail">Email</label>
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control" id="inputEmail" placeholder="Email" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputSubject">Subject</label>
                        <input type="text" name="subject" value={this.state.subject} onChange={this.handleChange} className="form-control" id="inputSubject" placeholder="Subject" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputMessage">Message</label>
                        <textarea name="message" value={this.state.message} onChange={this.handleChange} className="form-control" id="inputMessage" placeholder="Enter your Message" rows="5" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                    <button className="btn btn-primary w-100 mx-auto" type="button" onClick={this.sendEmail}>Send an Email</button>
                    </div>
                </div>
            </form>
        );
    }
}

const Contact = () => (
    <Layout activePage='contact'>
        <div className="container">
            <br />
            <h1 className='display-5 text-center'>Send us an email</h1>
            <hr className="my-4" />
            <ContactForm />
        </div>
    </Layout>
);

export default Contact;