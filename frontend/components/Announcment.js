const Announcment = ({announcmentMessage}) => (
    <div className="alert alert-info mb-0" role="alert">
        <center>
            <h1 className="alert-heading">{announcmentMessage}</h1>
        </center>
    </div>
);

export default Announcment;