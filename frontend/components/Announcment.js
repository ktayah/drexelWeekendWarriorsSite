const Announcment = ({announcementMessage, announcementLink}) => (
    <div className="alert alert-info mb-0" role="alert">
        <center>
            <h1 className="alert-heading">{announcementMessage}</h1>
            {announcementLink &&
                <a className="alert-link" href={announcementLink}>Click here!</a>
            }
        </center>
    </div>
);

export default Announcment;