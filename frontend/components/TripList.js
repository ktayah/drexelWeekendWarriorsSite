import TripCard from './TripCard';

const NoTripsScreen = () => (
    <div>
        <h1>No Trips available, check at another time.</h1>
    </div>
);

const TripList = ({trips}) => (
    <div className="trip-group">
        {trips.length > 0 ? (
            trips.map(trip => {
                console.log('trip', trip);
                return <TripCard props={trip} />
        })) : (
            <NoTripsScreen />
        )}
    </div>
);

TripList.getInitialProps = (props) => {
    return {
        ...props
    }
    // return { trips: [{
    //     title: 'Test',
    //     desc: 'Sit occaecat incididunt duis duis tempor quis nulla tempor Lorem velit culpa pariatur sint. Adipisicing aliqua sit laboris irure sint aliqua in ad id quis. Occaecat nulla irure duis aute tempor sint adipisicing minim cillum irure ex esse laborum dolor. Elit anim duis proident velit eiusmod sunt Lorem et. Voluptate velit adipisicing sint quis laborum nostrud fugiat Lorem ad incididunt sit incididunt minim voluptate. Commodo nisi sunt dolor cupidatat exercitation irure ad quis elit deserunt non excepteur nostrud consectetur.em'
    // }]};
}

export default TripList;