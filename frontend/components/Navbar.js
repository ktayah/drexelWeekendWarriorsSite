import { useState, useCallback, useEffect } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { authenticate, logOut, setRememberMe } from '../redux/actions/authenticate';
import Link from 'next/link';
import moment from 'moment';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import axios from 'axios';
import config from '../config';

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
    <div className={`form-inline py-1 my-lg-0 ${useMediaQuery({query: '(min-width: 1224px)'}) && 'mr-4'}`}>
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

const NavbarSignInDropdownContent = ({onLogin, isLoading, error, onRememberMe}) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    // const [isLoadingReset, setLoadingReset] = useState(false);
    // const [resetSent, setResetSent] = useState(false);
    const formClassName = `form-control ${error && 'is-invalid'}`;

    // const resetPasswordCall = useCallback(async () => { // Probably will live somewhere else, here meanwhile
    //     try {
    //         setLoadingReset(true);
    //         const apiUrl = config.development ? config.apiDevelopment : config.api;
    //         await axios.post(`${apiUrl}/auth/forgot-password`, {
    //             email: userName
    //         });
    //         setLoadingReset(false);
    //         setResetSent(true);
    //     } catch (err) {
    //         setLoadingReset(false);
    //         console.error(err);
    //     }
    // }, []);
    
    const rememberMe = useCallback(e => {
        if (e.target.checked) {
            onRememberMe(moment().add(14, 'days')); // Set to 2 weeks
        } else {
            onRememberMe(moment());
        }
    }, []);

    const login = useCallback(() => onLogin(userName, password), [userName, password]);

    useEffect(() => {
        onRememberMe(moment()); // Set the remember me value to current time, therefore default expire time is set
    }, []);

    return (
        <DropdownMenu right>
            <div className="px-4 pt-3 pb-1">
                {isLoading || isLoadingReset
                    ?
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                    :
                    <>
                        <div className="form-group mb-2">
                            <label htmlFor="dropdownFormUsername">User Name</label>
                            <input 
                                type="text" 
                                className={formClassName}
                                id="dropdownFormUsername" 
                                placeholder="User Name" 
                                onChange={e => setUserName(e.target.value)}
                            />
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="dropdownFormPassword">Password</label>
                            <input 
                                type="password" 
                                className={formClassName}
                                id="dropdownFormPassword" 
                                placeholder="Password"
                                onChange={e => setPassword(e.target.value)} 
                            />
                        </div>
                        {error && <p className='form-text text-danger my-2'>Invalid username or password</p>}
                        <div className="form-group my-2">
                            <div className="form-check">
                                <input 
                                    type="checkbox" 
                                    className="form-check-input" 
                                    id="dropdownCheck" 
                                    onChange={rememberMe} 
                                />
                                <label className="form-check-label" htmlFor="dropdownCheck">
                                Remember me
                                </label>
                            </div>
                        </div>
                        <DropdownItem divider />
                        <div className='form-group mt-3'>
                            <button 
                                type="button" 
                                className="btn btn-primary" 
                                onClick={login}
                                disabled={isLoading}
                            >
                                Sign in
                            </button>
                        </div>
                    </>
                }
            </div>
            <DropdownItem divider />
            <a className="dropdown-item">New around here? Sign up</a>
        </DropdownMenu>
    );
}

const NavbarSignInDropdown = ({ onLogin, onLogout, onRememberMe, authenticate}) => {
    const { loading, error } = authenticate;
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !loading && !prevState);
    
    return (
        <form className="form-inline my-1 my-lg-0">
            <Dropdown isOpen={dropdownOpen} toggle={toggle} inNavbar={true}>
                {authenticate.jwt 
                    ?
                    <button 
                        className="btn btn-outline-danger my-2 my-sm-0" 
                        type="button"
                        onClick={onLogout}>
                        Sign Out
                    </button>
                    : 
                    <>
                        <DropdownToggle 
                            className="btn dropdown-toggle btn-outline-success my-2 my-sm-0" 
                            disabled={loading}
                            caret>
                            Sign In
                        </DropdownToggle>
                        <NavbarSignInDropdownContent isLoading={loading} error={error} onLogin={onLogin} onLogout={onLogout} onRememberMe={onRememberMe} />
                    </>
                }
            </Dropdown>
        </form>
    );
}

const Navbar = ({authenticate, title, activePage, onLogin, onLogout, onRememberMe}) => { 
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'});
    const isMobileOrTablet = useMediaQuery({query: '(max-width: 1224px)'});

    return (
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

            {isDesktopOrLaptop &&
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <NavbarNavigationLinks activePage={activePage} />
                    <NavbarSocialIcons />
                    <NavbarSignInDropdown authenticate={authenticate} onLogin={onLogin} onLogout={onLogout} onRememberMe={onRememberMe} />
                </div>
            }

            {isMobileOrTablet && 
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <div className='row'>
                        <div className='col'>
                            <NavbarNavigationLinks activePage={activePage} />
                        </div>
                        <div className='col'>
                            <div className='d-flex h-100 flex-column justify-content-end align-items-end'>
                                <NavbarSocialIcons />
                                <NavbarSignInDropdown authenticate={authenticate} onLogin={onLogin} onLogout={onLogout} onRememberMe={onRememberMe} />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </nav>
    );
}

const mapDispatchToProps = dispatch => ({
    onLogin: (userName, password) => dispatch(authenticate(userName, password)),
    onLogout: () => dispatch(logOut()),
    onRememberMe: expireTime => dispatch(setRememberMe(expireTime))
});

const mapStateToProps = state => ({
    authenticate: state.authenticate
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);