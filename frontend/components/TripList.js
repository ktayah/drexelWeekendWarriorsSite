import TripCard from './TripCard';

const TripTable = ({children}) => (
    <div className="row">
        {children}
    </div>
);

const NoTripsScreen = () => (
    <div>
        <h1>No Trips available, check at another time.</h1>
    </div>
);

const TripList = ({trips}) => (
    <div className="trips">
        {trips.length > 0 ? (
            trips.map(trip => {
                console.log('trip', trip);
                return <TripCard key={trip.id} props={trip} />
        })) : (
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