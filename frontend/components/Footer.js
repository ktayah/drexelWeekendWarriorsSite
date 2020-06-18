const Footer = () => (
    <footer id="footer" className="p-3 mt-auto text-center bg-primary">
        {/* TODO: add tiny ww logo */}
        <span className="col-auto pr-0 pl-4 my-auto">
            <img src="/images/logo-tiny.png" alt="logo-tiny" className="img-fluid" style={{maxHeight: "3em"}}/>
        </span>
        <span className="col-auto" />
        <a href="http://lists.drexel.edu/cgi-bin/wa?SUBED1=WEEKEND-WARRIORS-ANNOUNCE-L&A=1" 
            className="text-white text-center font-weight-light col-5 p-0 my-auto">
            Wanna stay updated on all of our trips? <u>Subscribe to our mailing list!</u>
        </a>
        <span className="col-3 text-right text-light px-0 mr-2 my-auto"> © Weekend Warriors <small><b>{new Date().getFullYear()}</b></small></span>
    </footer>
)

export default Footer;