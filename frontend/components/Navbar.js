import Link from 'next/link';

const Navbar = (props) => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link href="/index"><a className="navbar-brand">{props.title}</a></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <Link href='/index'><a className="nav-link">Home</a></Link>
                </li>
                <li className="nav-item">
                    <Link href="/about"><a className="nav-link">About Us</a></Link>                
                </li>
                <li className="nav-item">
                    <Link href="/trips"><a className="nav-link">Trips</a></Link>
                </li>
                </ul>
                <form className="form-inline my-1 my-lg-0">
                    <div className="dropdown">
                    <button className="btn dropdown-toggle btn-outline-success my-2 my-sm-0" data-toggle="dropdown" type="button">Sign in</button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <form className="px-4 py-3">
                                <div className="form-group">
                                    <label for="exampleDropdownFormEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleDropdownFormPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
                                </div>
                                <br/>
                                <div className="form-group">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                                        <label className="form-check-label" for="dropdownCheck">
                                        Remember me
                                        </label>
                                    </div>
                                </div>
                                <br/>
                                <button type="submit" className="btn btn-primary">Sign in</button>
                            </form>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">New around here? Sign up</a>
                            <a className="dropdown-item" href="#">Forgot password?</a>
                        </div>
                    </div>
                </form>
            </div>
        </nav>
    </div>
);

export default Navbar;