import config from '../config';

const apiUrl = config.development ? config.apiDevelopment : config.api;

const TripCard = (props) => (
    <div className="trip">
        <img className="-img-top" src={`${apiUrl + props.props.tripPhoto.url}`} alt="trip image cap" />
        <div className="trip-body">
            <h5 className="trip-title">{props.props.tripName}</h5>
            <p className="trip-text">{props.props.tripDescription}</p>
            <p className="trip-text"><small className="text-muted">{props.props.create_at}</small></p>
        </div>
    </div>
);

export default TripCard;