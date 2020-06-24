import config from '../config';
import Link from 'next/link';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';

const apiUrl = config.development ? config.apiDevelopment : config.api;

const getDateTime = dateString => moment(dateString).format('dddd, MMMM Do YYYY, h:mm a');

const ticketsReleased = ticketSales => moment(ticketSales) < moment();

const ticketsExpired = ticketSales => moment(ticketSales).add(10, 'd') < moment();

const ticketsAvailable = ticketSales => ticketsReleased(ticketSales) && !ticketsExpired(ticketSales);

const onlineTicketSalesPrompt = ticketSales => ticketsExpired(ticketSales) ? 'Tickets were sold out!' : `Tickets will be sold online. Link will be posted here on ${getDateTime(ticketSales)}`;

const inPersonTicketSalesPrompt = (ticketSales, ticketLocation) => ticketsExpired(ticketSales) ? 'Tickets were sold out!' : `Tickets will be sold in-person at the ${ticketLocation} on ${getDateTime(ticketSales)}`;

const onlineEventPrompt = (tripDate, ticketLink) => moment() > moment(tripDate).subtract(1, 'd') 
    ? <>Zoom link: <a href={ticketLink}>{ticketLink}</a></>
    : 'Zoom link will be posted 24 hours before event';

const EventCard = ({props}) => (
    <div className='card h-100 w-100 rounded' id='tripCard'>
        <Link href='/events/[event]' as={`/events/${props.id}`}>
            <a><img className='card-img-top' src={`${apiUrl + props.tripPhoto.url}`} alt='trip image cap' /></a>
        </Link>
        <div className='card-body'>
            <h3 className='card-title text-wrap'>{props.tripName}</h3>
            <span className='card-text small'>{props.tripLocation} {getDateTime(props.tripDate)}</span>
            <hr className='display-4' /> 
            <ReactMarkdown className='card-text pt-2' source={props.tripDescription} />
        </div>
        <div className='card-footer'>
            {/* {props.isOnlineSale ? (
                <p className='card-text'>{onlineTicketSalesPrompt(props.ticketSales)}</p>
            ): props.ticketSales && (
                <p className='card-text'>{inPersonTicketSalesPrompt(props.ticketSales, props.ticketLocation)}</p>
            )} */}
            {/* {props.ticketLink && ticketsAvailable(props.ticketSales) && (
                <a href={props.ticketLink}>Click here to buy a ticket</a>
            )} */}
            {props.isOnlineEvent && props.ticketLink && 
                // <p className='card-text'>{onlineEventPrompt(props.tripDate, props.ticketLink)}</p>
                <p className='card-text'>Registration link: <a href={props.ticketLink}>{props.ticketLink}</a></p>
            }
        </div>
    </div>
);

export default EventCard;