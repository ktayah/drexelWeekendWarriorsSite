
const Footer = props => (
    <footer className="mt-auto py-3 px-3 bg-primary row justify-content-between">
        {/* TODO: add tiny ww logo */}
        <img href="static/tiny_logo.png" alt="tiny_logo" className="col-2"/>
        <a href="http://lists.drexel.edu/cgi-bin/wa?SUBED1=WEEKEND-WARRIORS-ANNOUNCE-L&A=1" className="text-secondary text-center col-7">
            Want to stay updated on all of our trips? <u>Subscribe to our mailing list!</u>
        </a>
        <span className="col-3 text-right">© Weekend Warriors <small>{new Date().getFullYear()}</small></span>
    </footer>
)

export default Footer