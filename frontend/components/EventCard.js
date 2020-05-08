import config from '../config';
import Link from 'next/link';
import moment from 'moment';

const apiUrl = config.development ? config.apiDevelopment : config.api;

const getDateTime = dateString => moment(dateString).format("dddd, MMMM Do YYYY, h:mm a");

const ticketsReleased = ticketSales => moment(ticketSales) < moment();

const ticketsExpired = ticketSales => moment(ticketSales).add(10, 'd') < moment();

const ticketsAvailable = ticketSales => ticketsReleased(ticketSales) && !ticketsExpired(ticketSales);

const onlineTicketSalesPrompt = ticketSales => ticketsExpired(ticketSales) ? 'Tickets were sold out!' : `Tickets will be sold online. Link will be posted here on ${getDateTime(ticketSales)}`;

const inPersonTicketSalesPrompt = (ticketSales, ticketLocation) => ticketsExpired(ticketSales) ? 'Tickets were sold out!' : `Tickets will be sold in-person at the ${ticketLocation} on ${getDateTime(ticketSales)}`;

const EventCard = ({props}) => (
    <Link href="/events/[event]" as={`/events/${props.id}`}>
        <a className="card w-50 m-3" id="tripCard">
            <img className="card-img-top" src={`${apiUrl + props.tripPhoto.url}`} alt="trip image cap" />
            <div className="card-body">
                <h3 className="card-title text-wrap">{props.tripName}</h3>
                <span className="card-text small">{props.tripLocation} {getDateTime(props.tripDate)}</span>
                <hr className="display-4" /> 
                <p className="card-text pt-2">{props.tripDescription}</p>
            </div>
            <div className="card-footer">
                {props.isOnlineSale ? (
                    <p className="card-text">{onlineTicketSalesPrompt(props.ticketSales)}</p>
                ): (
                    <p className="card-text">{inPersonTicketSalesPrompt(props.ticketSales, props.ticketLocation)}</p>
                )}
                {props.ticketLink && ticketsAvailable(props.ticketSales) ? (
                    <a href={props.ticketLink}>Click here to buy a ticket</a>
                ): ""}
            </div>
        <style jsx>{`
            #tripCard {
                min-width: 18rem;
                text-decoration: none;
            }
        `}</style>
        </a>
    </Link>
);

export default EventCard;