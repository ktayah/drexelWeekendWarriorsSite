import EventCard from './EventCard';

const NoEventsScreen = () => (
    <div className='container'>
        <h1>No Events available, check at another time.</h1>
    </div>
);

const EventCards = ({events}) => (
    <center>
        <div className='card-deck'>
            {events.map(event => 
                <EventCard props={event} key={event.id} />
            )}
        </div>
    </center>
);

const EventsList = ({events}) => (
    <div className="mb-4">
        {events.length > 0 ? (
            <EventCards events={events} />
        ) : (
            <NoEventsScreen />
        )}
    </div>
);

EventsList.getInitialProps = (props) => {
    return {
        ...props
    }
}

export default EventsList;