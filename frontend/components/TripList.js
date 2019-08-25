import axios from "axios";

const getTrips = async () => {
    return await axios.get(`${apiUrl}/trips` /*, "headers"  */);
}

const TripCard = (props) => (
    <div className="trip">
        <img className="-img-top" src={props.imgSrc} alt="trip image cap" />
        <div className="trip-body">
            <h5 className="trip-title">{props.title}</h5>
            <p className="trip-text">{props.desc}</p>
            <p className="trip-text"><small className="text-muted">{props.timeUpdated}</small></p>
        </div>
    </div>
);

const NoTripsScreen = () => (
    <div>
        <h1>No Trips available, check at another time.</h1>
    </div>
);

const TripList = ({trips}) => (
    <div className="trip-group">
        {console.log(trips, !!trips, !trips)}
        {trips ? (
            trips.map((trip) => {
                return <TripCard props={trip}  />
        })) : ( 
            <NoTripsScreen />
        )}
    </div>
);

TripList.getInitialProps = (props) => {
    // const trips = getTrips();
    return { trips: [{
        title: 'Test',
        desc: 'Sit occaecat incididunt duis duis tempor quis nulla tempor Lorem velit culpa pariatur sint. Adipisicing aliqua sit laboris irure sint aliqua in ad id quis. Occaecat nulla irure duis aute tempor sint adipisicing minim cillum irure ex esse laborum dolor. Elit anim duis proident velit eiusmod sunt Lorem et. Voluptate velit adipisicing sint quis laborum nostrud fugiat Lorem ad incididunt sit incididunt minim voluptate. Commodo nisi sunt dolor cupidatat exercitation irure ad quis elit deserunt non excepteur nostrud consectetur.em'
    }]};
}

export default TripList