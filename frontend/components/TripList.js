import TripCard from './TripCard';

const NoTripsScreen = () => (
    <div>
        <h1>No Trips available, check at another time.</h1>
    </div>
);

const TripCards = ({trips}) => (
    <div className='card-deck'>
        {trips.map(trip => 
            <TripCard props={trip} key={trip.id} />
        )}
    </div>
);

const TripList = ({trips}) => (
    <div className="trips">
        {trips.length > 0 ? (
            <TripCards trips={trips} />
        ) : (
            <NoTripsScreen />
        )}
    </div>
);

TripList.getInitialProps = (props) => {
    return {
        ...props
    }
}

export default TripList;