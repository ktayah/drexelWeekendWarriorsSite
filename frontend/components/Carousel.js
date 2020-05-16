import Link from 'next/link';
import config from '../config';
import { useMediaQuery } from 'react-responsive';
import ReactMarkdown from 'react-markdown';

const apiUrl = config.development ? config.apiDevelopment : config.api;

const CarouselSlider = ({upcomingTrips}) => {

    const indicatorRows = upcomingTrips.map((trip, i) => (
        <li key={trip.id} data-target="#trips" data-slide-to={i} className={i == 0 ? "active" : ""}/>
    ));

    return (
        <div id="trips" className="carousel slide" data-interval="4000" data-ride="carousel">
            <ol className="carousel-indicators">
                {indicatorRows}
            </ol>
            <div className="carousel-inner">
            {
                upcomingTrips.map((trip, i) => {
                    return (
                        <Link key={trip.id} href='/events/[event]' as={`/events/${trip.id}`}>
                            <a className={"carousel-item" + (i == 0 ? " active" : "")}>
                                <img id="carousel-img" className="d-block mx-auto" src={`${apiUrl + trip.tripPhoto.url}`} alt={trip.tripName} />
                            </a>
                        </Link>
                    );
                })
            }
            </div>
            <a id="carousel-controller" className="carousel-control-prev bg-dark" href="#trips" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a id="carousel-controller" className="carousel-control-next bg-dark" href="#trips" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
          <style jsx>{`
            #trips {
              width: 100%;
            }
            #carousel-img {
                width: 65%;
            }
            #carousel-controller {
                width: 17.5%;
            }
          `}</style>
        </div>
    )
}

const CarouselThumbnails = ({upcomingTrips}) => (
    <div id="carousel_pictures" className="row mx-5">
    {/** Adapt below to a card element to provide even displaying */}
    {
        upcomingTrips.map(trip =>
            <div className="eventThumbnail">
                <Link key={trip.id} href='/events/[event]' as={`/events/${trip.id}`}>
                    <a key={trip.id} className="col-sm mx-auto">
                        <h1 className='h3 text-center'>{trip.tripName}</h1>
                        <img src={`${apiUrl + trip.tripPhoto.url}`} alt={trip.tripName} />
                    </a>
                </Link>
                <div className="m-4">
                    <ReactMarkdown id="description" classname="text-center" source={trip.tripDescription} />
                </div>
            </div>
        )
    }
    <style jsx>{`
            .eventThumbnail {
                text-decoration: none;
                width: inherit;
                right: 4%;
                padding-left: 4%;
                padding-right: 4%;
            }
            img {
                width: inherit;
            }
            #description {
                font-size: medium;
            }
        `}</style>
    </div>
)

const Carousel = ({upcomingTrips}) => {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'});
    const isMobileOrTablet = useMediaQuery({query: '(max-width: 1224px)'});
    return (
        <div className="row mb-4 d-sm-block">
            {isDesktopOrLaptop && 
                <CarouselSlider upcomingTrips={upcomingTrips} />
            }
            {isMobileOrTablet &&
                <>
                    <h1 className='display-5 my-3 text-center rounded mx-5'>Take a look at our upcoming events</h1>
                    <hr className="mx-5" />
                    <CarouselThumbnails upcomingTrips={upcomingTrips} />
                </>
            }
        </div>
    )
};

export default Carousel;
