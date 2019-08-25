const Carousel = (props) => (
    <div id="trips" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#trips" data-slide-to="0" className="active"></li>
            <li data-target="#trips" data-slide-to="1"></li>
            <li data-target="#trips" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img className="d-block img-fluid" src="https://via.placeholder.com/1000x500" alt="First trip"/>
            </div>
            <div className="carousel-item">
            <img className="d-block img-fluid" src="https://via.placeholder.com/1000x500" alt="Second trip"/>
            </div>
            <div className="carousel-item">
            <img className="d-block img-fluid" src="https://via.placeholder.com/1000x500" alt="Third trip"/>
            </div>
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
);

export default Carousel;