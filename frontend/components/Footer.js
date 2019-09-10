
const Footer = props => (
    <footer className="mt-auto mx-0 py-3 px-3 bg-primary row justify-content-between">
        {/* TODO: add tiny ww logo */}
        <span className="col-auto pr-0 pl-4 my-auto">
            <img src="static/images/logo-tiny.png" alt="logo-tiny" className="img-fluid" style={{maxHeight: "3em"}}/>
        </span>
        <span className="col-auto" />
        <a href="http://lists.drexel.edu/cgi-bin/wa?SUBED1=WEEKEND-WARRIORS-ANNOUNCE-L&A=1" 
            className="text-secondary text-center font-weight-light col-5 p-0 my-auto">
            Wanna stay updated on all of our trips? <u>Subscribe to our mailing list!</u>
        </a>
        <span className="col-3 text-right px-0 mr-2 my-auto">© Weekend Warriors <small><b>{new Date().getFullYear()}</b></small></span>
    </footer>
)

export default Footer