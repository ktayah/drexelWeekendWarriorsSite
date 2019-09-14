import config from '../config';

const apiUrl = config.development ? config.apiDevelopment : config.api;

const TripCard = ({props}) => (
    <div className="card w-50 p-3">
        <img className="card-img-top" src={`${apiUrl + props.tripPhoto.url}`} alt="trip image cap" />
        <div className="card-body">
            <h5 className="card-title">{props.tripName}</h5>
            <p className="card-text">{props.tripDescription}</p>
            <p className="card-text"><small className="text-muted">{props.create_at}</small></p>
        </div>
    </div>
);

export default TripCard;