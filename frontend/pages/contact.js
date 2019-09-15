import Layout from "../components/Layout";

const ContactForm = () => (
    <form>
        <div className="form-row">
            <div className="form-group col-md-6">
                <label for="inputFirstName">First Name</label>
                <input type="text" className="form-control" id="inputFirstName" placeholder="First Name" />
            </div>
            <div className="form-group col-md-6">
                <label for="inputLastName">Last Name</label>
                <input type="text" className="form-control" id="inputLastName" placeholder="Last Name" />
            </div>
        </div>
        <div className="form-row">
            <div className="form-group col-md-12">
                <label for="inputEmail">Email</label>
                <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
            </div>
        </div>
        <div className="form-row">
            <div className="form-group col-md-12">
                <label for="inputSubject">Subject</label>
                <input type="text" className="form-control" id="inputSubject" placeholder="Subject" />
            </div>
        </div>
        <div className="form-row">
            <div className="form-group col-md-12">
                <label for="inputMessage">Message</label>
                <textarea className="form-control" id="inputMessage" placeholder="Enter your Message" rows="5" />
            </div>
        </div>
    </form>
);

const Contact = ({title}) => (
    <Layout title={title} activePage='contact'>
        <div className="container">
            <br />
            <h1 className='display-5 text-center'>Send us an email.</h1>
            <hr className="my-4" />
            <ContactForm />
        </div>
    </Layout>
);

Contact.getInitialProps = () => {
    return {
        title: 'Weekend Warriors'
    }
}

export default Contact;