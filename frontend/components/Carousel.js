import Link from 'next/link';
import config from '../config';
import { Jumbotron } from 'reactstrap';
import { useMediaQuery } from 'react-responsive';
import ReactMarkdown from 'react-markdown';

const apiUrl = config.development ? config.apiDevelopment : config.api;

const CarouselSlider = ({upcomingEvents, manuallySetPhotos }) => {

    const indicatorRows = [...upcomingEvents, ...manuallySetPhotos].map((photo, i) => (
        <li key={i} data-target="#trips" data-slide-to={i} className={i == 0 ? "active" : ""}/>
    ));

    return (
        <div id="trips" className="carousel slide" data-interval="4000" data-ride="carousel">
            <ol className="carousel-indicators">
                {indicatorRows}
            </ol>
            <div className="carousel-inner">
                {manuallySetPhotos.map((photoObj, i) => 
                    <a key={`manuallySetPhotos-${photoObj.id}`} className={`carousel-item ${i == 0 ? " active" : ""}`}>
                        <img id="carousel-img" className="d-block mx-auto" src={`${apiUrl + photoObj.photo.url}`} alt={photoObj.name} />
                    </a>  
                )}
                {upcomingEvents.length ?
                    upcomingEvents.map((event, i) => {
                        const index = i + manuallySetPhotos;
                        return (
                            <Link key={event.id} href='/events/[event]' as={`/events/${event.id}`}>
                                <a className={`carousel-item ${index == 0 ? " active" : ""}`}>
                                    <img id="carousel-img" className="d-block mx-auto" src={`${apiUrl + event.tripPhoto.url}`} alt={event.tripName} />
                                </a>
                            </Link>
                        );
                    })
                    :
                    <a className='carousel-item active'>
                        <img id="carousel-img" className="d-block mx-auto" src='/images/no-events.jpg' alt='No Events' />
                    </a>
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

const CarouselThumbnails = ({ upcomingEvents, manuallySetPhotos }) => {

    return (
        <div id="carousel_pictures" className="row mx-5">
        {/** Adapt below to a card element to provide even displaying */}
        {manuallySetPhotos && manuallySetPhotos.map(photoObj => 
            <div className='eventThumbnail' key={`manuallySetPhoto-${photoObj.id}`}>
                <a className="col-sm mx-auto">
                    <h1 className='h3 text-center'>{photoObj?.name}</h1>
                    <img src={`${apiUrl + photoObj.photo.url}`} alt={photoObj.name} />
                </a>
            </div>
        )}
        {upcomingEvents.map(event =>
            <Jumbotron className='eventThumbnail rounded p-0' key={event.id} fluid>
                <Link href='/events/[event]' as={`/events/${event.id}`}>
                        <a key={event.id} className="col-sm mx-auto">
                            <h1 className='h3 text-center'>{event.tripName}</h1>
                            <img src={`${apiUrl + event.tripPhoto.url}`} alt={event.tripName} />
                        </a>
                </Link>
                <div className="m-4">
                    <ReactMarkdown id="description" classname="text-primary text-center" source={event.tripDescription} />
                </div>
            </Jumbotron>
        )}
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
}

const Carousel = ({ upcomingEvents, manuallySetPhotos }) => {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'});
    const isMobileOrTablet = useMediaQuery({query: '(max-width: 1224px)'});

    return (
        <div className="row mb-4 d-sm-block">
            {isDesktopOrLaptop && 
                <CarouselSlider upcomingEvents={upcomingEvents} manuallySetPhotos={manuallySetPhotos} />
            }
            {isMobileOrTablet &&
                <>
                    <h1 className='alert alert-primary display-5 my-3 text-center shadow-lg rounded mx-5'>Take a look at our upcoming events</h1>
                    <hr className="mx-5" />
                    <CarouselThumbnails upcomingEvents={upcomingEvents} manuallySetPhotos={manuallySetPhotos} />
                </>
            }
        </div>
    )
};

export default Carousel;
