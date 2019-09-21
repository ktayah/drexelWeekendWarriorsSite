import config from '../config';
import Link from 'next/link';
import moment from 'moment';

const apiUrl = config.development ? config.apiDevelopment : config.api;

const getDateTime = dateString => moment(dateString).format("dddd, MMMM Do YYYY, h:mm a");

const TripCard = ({props}) => (
    // <Link href="/"> Dynamically link to trip pages, for another Issue
        <div className="card w-50 m-3" id="tripCard">
            <img className="card-img-top" src={`${apiUrl + props.tripPhoto.url}`} alt="trip image cap" />
            <div className="card-body">
                <h3 className="card-title text-nowrap">{props.tripName}</h3>
                <span className="card-text small">{props.tripLocation} {getDateTime(props.tripDate)}</span>
                <hr className="display-4" /> 
                <p className="card-text pt-2">{props.tripDescription}</p>
            </div>
            <div className="card-footer">
                {props.isOnlineSale ? (
                    <p className="card-text">Tickets will be sold online. Link will be posted here on {getDateTime(props.ticketSales)}</p>
                ): (
                    <p className="card-text">Tickets will be sold in-person at the {props.ticketLocation} on {getDateTime(props.ticketSales)}</p>
                )}
                {props.ticketLink ? (
                    <a href={props.ticketLink}>Click here to buy a ticket</a>
                ): ""}
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