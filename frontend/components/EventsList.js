import EventCard from './EventCard';

const NoEventsScreen = () => (
    <div className='container'>
        <h1>No Events available, check at another time.</h1>
    </div>
);

const EventCards = ({events}) => (
    <center>
        <div className='card-deck'>
            <div className='row row-cols-1 row-cols-md-2'>
                {events.map(event => 
                    <div className='col mb-3'>
                        <EventCard props={event} key={event.id} />
                    </div>
                )}
            </div>
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