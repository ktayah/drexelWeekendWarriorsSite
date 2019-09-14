import config from '../config';

const apiUrl = config.development ? config.apiDevelopment : config.api;

const TripCard = (props) => (
    <div className="tripCard">
        <div className="card">
            <img className="card-img-top" src={`${apiUrl + props.props.tripPhoto.url}`} alt="trip image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.props.tripName}</h5>
                <p className="card-text">{props.props.tripDescription}</p>
                <p className="card-text"><small className="text-muted">{props.props.create_at}</small></p>
            </div>
        </div>

    </div>
);

export default TripCard;