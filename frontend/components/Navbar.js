import { Component } from 'react';
import Link from 'next/link';
import { authenticate, logOut } from '../redux/actions/authenticate';
import { connect } from 'react-redux';

class NavbarNavigationLinks extends Component {
    isActive = (activePage, navLink) => {
        if (activePage === navLink) 
            return true;
        return false;
    }
    render() {
        const { activePage } = this.props;
        return (
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className={`nav-item ${this.isActive(activePage, 'index') ? 'active' : ''}`}>
                    <Link href='/index'><a className="nav-link">Home</a></Link>
                </li>
                <li className={`nav-item ${this.isActive(activePage, 'trips') ? 'active' : ''}`}>
                    <Link href="/trips"><a className="nav-link">Trips</a></Link>
                </li>
                <li className={`nav-item ${this.isActive(activePage, 'contact') ? 'active' : ''}`}>
                    <Link href="/contact"><a className="nav-link">Contact Us</a></Link>
                </li>
                <li className={`nav-item ${this.isActive(activePage, 'faq') ? 'active' : ''}`}>
                    <Link href="/faq"><a className="nav-link">FAQ</a></Link>
                </li>
            </ul>
        )
    }
}

class NavbarSocialIcons extends Component {
    render() {
        return (
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
        )
    }
}

class NavbarSignInDropdownContent extends Component {
    render() {
        const { onLogin } = this.props;
        return (
            <div className="dropdown-menu dropdown-menu-both">
                <div className="px-4 py-3">
                    <div className="form-group">
                        <label htmlFor="dropdownFormEmail">Email address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="dropdownFormEmail" 
                            placeholder="email@example.com" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dropdownFormPassword">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="dropdownFormPassword" 
                            placeholder="Password" />
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
                        onClick={() => onLogin('user@test.com', 'testpass')}>
                        Sign in
                    </button>
                </div>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item">New around here? Sign up</a>
                <a className="dropdown-item">Forgot password?</a>
            </div>
        )
    }
}

class NavbarSignInDropdown extends Component {
    render() {
        const { onLogin, onLogout } = this.props;
        return (
            <form className="form-inline my-1 my-lg-0">
                <div className="dropdown">
                    <button 
                        className="btn dropdown-toggle btn-outline-success my-2 my-sm-0" 
                        data-toggle="dropdown" 
                        type="button">
                        Sign in
                    </button>
                    <NavbarSignInDropdownContent onLogin={onLogin} onLogout={onLogout} />
                </div>
            </form>
        )
    }
}

class Navbar extends Component {
    render() {
        const { title, activePage, onLogin, onLogout } = this.props;
        return (
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
                        <NavbarSignInDropdown onLogin={onLogin} onLogout={onLogout}/>
                    </div>
                </nav>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onLogin: (userName, password) => dispatch(authenticate(userName, password)),
    onLogout: () => dispatch(logOut())
});

const mapStateToProps = state => {
    return {...state};
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);