import Layout from "../components/Layout";
import axios from 'axios';
import config from '../config';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: null,
            lastName : null,
            email: null,
            subject: null,
            message: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
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
        const apiUrl = config.development ? config.apiDevelopment : config.api;
        return await axios.post(`${apiUrl}/email`, {
            to: 'ktayah@yahoo.com',
            from: this.state.email,
            replyTo: 'ktayah@yahoo.com',
            subject: this.state.subject,
            text: this.state.message,
            html: this.state.message
        });
    }

    render() {
        return (
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputFirstName">First Name</label>
                        <input type="text" name="firstName" onChange={this.handleChange} className="form-control" id="inputFirstName" placeholder="First Name" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputLastName">Last Name</label>
                        <input type="text" name="lastName" onChange={this.handleChange} className="form-control" id="inputLastName" placeholder="Last Name" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputEmail">Email</label>
                        <input type="email" name="email" onChange={this.handleChange} className="form-control" id="inputEmail" placeholder="Email" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputSubject">Subject</label>
                        <input type="text" name="subject" onChange={this.handleChange} className="form-control" id="inputSubject" placeholder="Subject" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputMessage">Message</label>
                        <textarea name="message" onChange={this.handleChange} className="form-control" id="inputMessage" placeholder="Enter your Message" rows="5" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                    <button className="btn btn-primary" type="Submit" onClick={this.sendEmail()}>Send an Email</button>
                    </div>
                </div>
            </form>
        );
    }
}

const Contact = ({title}) => (<Layout title={title} activePage='contact'>
        <div className="container">
            <br />
            <h1 className='display-5 text-center'>Send us an email</h1>
            <hr className="my-4" />
            <ContactForm />
        </div>
    </Layout>
);

Contact.getInitialProps = () => {
    return {
        title: 'Weekend Warriors',
    }
}

export default Contact;