const Carousel = (props) => {
    // console.log(props)
    let indicatorRows = [];
    for (let i = 0; i < 3; i++) {
        indicatorRows.push(<li data-target="#trips" data-slide-to={i} className={i == 0 ? "active" : ""}/>);
    }

    return (
        <div id="trips" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                {indicatorRows}
            </ol>
            <div className="carousel-inner">
            {
                props.featuredTrips.map((trip, i) => {
                    return (
                        <div className={"carousel-item" + (i == 0 ? " active" : "")}>
                            <img className="d-block img-fluid" src={trip['img']} alt={trip['name']} />
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

const CarouselThumbnails = (props) => (
    <div id="carousel_pictures" className="row">
    {
        props.featuredTrips.map((trip) => {
            return (
                <div id="column" className="col-sm">
                    <h1 className='h5'>{trip['name']}</h1>
                    <img src={trip['img']} alt={trip['name']} width="100%"/>
                </div>
            );
        })
    }
    </div>
)

const CarouselWithThumbnails = (props) => (
    <div className="m-3">
        <div id="carousel" className="row mb-4">
            <div className="col">
                <Carousel featuredTrips={props.featuredTrips} />
            </div>
        </div>
        <CarouselThumbnails featuredTrips={props.featuredTrips} />
    </div>   
)

export default CarouselWithThumbnails;
