import config from '../config';

const apiUrl = config.development ? config.apiDevelopment : config.api;

const Carousel = ({upcomingTrips}) => {
    const indicatorRows = [];
    for (let i = 0; i < 3; i++) {
        indicatorRows.push(<li key={i} data-target="#trips" data-slide-to={i} className={i == 0 ? "active" : ""}/>);
    }

    return (
        <div id="trips" className="carousel slide" data-interval="4000" data-ride="carousel">
            <ol className="carousel-indicators">
                {indicatorRows}
            </ol>
            <div className="carousel-inner">
            {
                upcomingTrips.map((trip, i) => {
                    return (
                        <div key={trip.id} className={"carousel-item" + (i == 0 ? " active" : "")}>
                            <img className="d-block img-fluid" className="h-auto w-100" src={`${apiUrl + trip.tripPhoto.url}`} alt={trip.tripName} />
                        </div>
                    );
                })
            }
            </div>
            <a className="carousel-control-prev" href="#trips" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#trips" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
          <style jsx>{`
            #trips {
              width: 100%;
            }
          `}</style>
        </div>
    )
}

const CarouselThumbnails = ({upcomingTrips}) => (
    <div id="carousel_pictures" className="row">
    {
        upcomingTrips.map(trip => {
            return (
                <div key={trip.id} id="column" className="col-sm">
                    <h1 className='h5 text-center'>{trip.tripName}</h1>
                    <img src={`${apiUrl + trip.tripPhoto.url}`} alt={trip.tripName} width="100%"/>
                    <p className="text-center p-3">{trip.tripDescription}</p>
                </div>
            );
        })
    }
    </div>
)

const CarouselWithThumbnails = ({upcomingTrips}) => (
    <div>
        <div className="row mb-4 d-none d-sm-block">
            <Carousel upcomingTrips={upcomingTrips} />
        </div>
        <h1 className='display-5 my-3 text-center rounded mx-5'>Take a look at our upcoming trips</h1> {/* Need to fix this since it causes problems on smaller screens*/}
        <hr className="mx-5" />
        <CarouselThumbnails upcomingTrips={upcomingTrips} />
    </div>   
)

export default CarouselWithThumbnails;
