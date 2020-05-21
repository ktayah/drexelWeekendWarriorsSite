import { useState, useCallback } from 'react';
import Link from 'next/link';
import { authenticate, logOut } from '../redux/actions/authenticate';
import { connect } from 'react-redux';

const NavbarNavigationLinks = ({activePage, navLink}) => {
    const isActive = useCallback((activePage, navLink) => {
        if (activePage === navLink) 
            return true;
        return false;
    }, [activePage, navLink]);
    return (
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className={`nav-item ${isActive(activePage, 'index') ? 'active' : ''}`}>
                <Link href='/index'><a className="nav-link">Home</a></Link>
            </li>
            <li className={`nav-item ${isActive(activePage, 'events') ? 'active' : ''}`}>
                <Link href="/events"><a className="nav-link">Events</a></Link>
            </li>
            <li className={`nav-item ${isActive(activePage, 'contact') ? 'active' : ''}`}>
                <Link href="/contact"><a className="nav-link">Contact Us</a></Link>
            </li>
            <li className={`nav-item ${isActive(activePage, 'faq') ? 'active' : ''}`}>
                <Link href="/faq"><a className="nav-link">FAQ</a></Link>
            </li>
        </ul>
    )
}

const NavbarSocialIcons = () => (
        <div className="form-inline py-1 my-lg-0 mr-4">
        <a href="https://www.facebook.com/DrexelWeekendWarriors">
            <ion-icon name="logo-facebook" size="large" class="img-hover-border rounded" />
        </a>
        <a href="https://www.instagram.com/DrexelWeekendWarriors" className="mx-2">
            <ion-icon name="logo-instagram" size="large" class="img-hover-border rounded" />
        </a>
        <a href="https://dragonlink.drexel.edu/organization/drexelweekendwarriors">
            <img 
                src="https://dragonlink.drexel.edu/favicon.ico" 
                className="img-hover-border rounded p-1 mb-1" 
                style={{maxWidth: 33}} />
        </a>
    </div>
);

const NavbarSignInDropdownContent = ({onLogin, isLoading}) => {
    const [emailAddress, setEmailAddress] = useState(null);
    const [password, setPassword] = useState(null);
    const login = useCallback(() => {
        console.log(emailAddress, password);
        if (emailAddress && password) {
            onLogin(emailAddress, password);
        }
    }, [emailAddress, password]);

    return (
        <div className="dropdown-menu dropdown-menu-both">
            <div className="px-4 py-3">
                {isLoading 
                    ? <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    : <> 
                        <div className="form-group">
                            <label htmlFor="dropdownFormUsername">User Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="dropdownFormUsername" 
                                placeholder="User Name" 
                                onChange={e => setEmailAddress(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="dropdownFormPassword">Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="dropdownFormPassword" 
                                placeholder="Password"
                                onChange={e => setPassword(e.target.value)} 
                            />
                        </div>
                        <br/>
                        <div className="form-group">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                                <label className="form-check-label" htmlFor="dropdownCheck">
                                Remember me
                                </label>
                            </div>
                        </div>
                        <br/>
                        <button 
                            type="button" 
                            className="btn btn-primary" 
                            onClick={login}>
                            Sign in
                        </button>
                    </>
                }
            </div>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item">New around here? Sign up</a>
            <a className="dropdown-item">Forgot password?</a>
        </div>
    );
}

const NavbarSignInDropdown = ({ onLogin, onLogout, authenticate}) => (
    <form className="form-inline my-1 my-lg-0">
        {console.log(authenticate)}
            <div className="dropdown">
                {authenticate.jwt 
                    ? <div>
                        <button 
                            className="btn btn-outline-danger my-2 my-sm-0" 
                            type="button"
                            onClick={onLogout}>
                            Sign Out
                        </button>
                    </div> 
                    : <div>
                        <button 
                            className="btn dropdown-toggle btn-outline-success my-2 my-sm-0" 
                            data-toggle="dropdown" 
                            type="button">
                            Sign in
                        </button>
                        <NavbarSignInDropdownContent isLoading={authenticate.loading} onLogin={onLogin} onLogout={onLogout} />
                    </div> 
                }
            </div>
        </form>
);

const Navbar = ({authenticate, title, activePage, onLogin, onLogout}) => (
    <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <Link href="/index"><a className="navbar-brand">{title}</a></Link>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarToggler" 
                aria-controls="navbarToggler" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarToggler">
                <NavbarNavigationLinks activePage={activePage} />
                <NavbarSocialIcons />
                <NavbarSignInDropdown authenticate={authenticate} onLogin={onLogin} onLogout={onLogout}/>
            </div>
        </nav>
    </div>
);

const mapDispatchToProps = dispatch => ({
    onLogin: (userName, password) => dispatch(authenticate(userName, password)),
    onLogout: () => dispatch(logOut())
});

const mapStateToProps = state => ({
    authenticate: state.authenticate
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);