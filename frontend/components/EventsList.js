import EventCard from './EventCard';

const EventCards = ({events}) => (
    <center>
        <div className='card-deck'>
            <div className='row row-cols-1 row-cols-md-2'>
                {events.map(event => 
                    <div className='col mb-3' key={event.id}>
                        <EventCard props={event} />
                    </div>
                )}
            </div>
        </div>
    </center>
);

const EventsList = ({events}) => (
    <div className="mb-4">
        {events.length ? (
            <>
                <h1 className='display-5 text-center shadow-lg bg-white rounded p-3 mx-5'>Join us for our Events!</h1>
                <hr className='my-4' />
                <EventCards events={events} />
            </>
        ) : (
            <img className='w-100' src='/images/no-events.jpg' />
        )}
    </div>
);

export default EventsList;