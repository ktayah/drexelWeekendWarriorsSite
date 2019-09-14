import config from '../config';
import Link from 'next/link';

const apiUrl = config.development ? config.apiDevelopment : config.api;

const getDateTime = (dateString) => {
    const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
}

const TripCard = ({props}) => (
    // <Link href="/"> Dynamically link to trip pages, for another Issue
        <div className="card w-50 m-1" id="tripCard">
            {console.log(props)}
            <img className="card-img-top" src={`${apiUrl + props.tripPhoto.url}`} alt="trip image cap" />
            <div className="card-body">
                <h3 className="card-title">{props.tripName}</h3>
                <span className="card-text small">{props.tripLocation} {getDateTime(props.tripDate)}</span>
                <p className="card-text pt-2">{props.tripDescription}</p>
                <hr className="display-4" />
                {props.isOnlineSale ? (
                    <div>
                        <p className="card-text">Tickets will be sold online. Link will be posted on {getDateTime(props.ticketSales)}</p>
                    </div>
                ): (
                    <div>
                        <p className="card-text">Tickets will be sold in-person at {props.ticketLocation} on {getDateTime(props.ticketSales)}</p>
                    </div>
                )}
            </div>
        <style jsx>{`
            #tripCard {
                min-width: 18rem;
            }
        `}</style>
        </div>
    // </Link>
);

export default TripCard;