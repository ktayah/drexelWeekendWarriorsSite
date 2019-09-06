import { Component } from 'react';
import Link from 'next/link';
import authenticate from '../actions/index';
import logOut from '../actions/index';
import { connect } from 'react-redux';

import { authenticatePOC } from '../actions'

class Navbar extends Component {

    static async getInitialProps({store, isServer, pathname, query}) {
        console.log('Navbar Store', store);
        store.dispatch(authenticate('ktayah@yahoo.com', 'test123'));
        return { store: store, title: title }
    }
    render() {
        const { onLogin } = this.props
        console.log('Navbar props', this.props);
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link href="/index"><a className="navbar-brand">{this.props.title}</a></Link>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarTogglerDemo02" 
                        aria-controls="navbarTogglerDemo02" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
    
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link href='/index'><a className="nav-link">Home</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/trips"><a className="nav-link">Trips</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/faq"><a className="nav-link">FAQ</a></Link>
                            </li>
                        </ul>
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
                        <form className="form-inline my-1 my-lg-0">
                            <div className="dropdown">
                            <button className="btn dropdown-toggle btn-outline-success my-2 my-sm-0" data-toggle="dropdown" type="button">Sign in</button>
                                <div className="dropdown-menu dropdown-menu-left">
                                    <div className="px-4 py-3">
                                        <div className="form-group">
                                            <label htmlFor="exampleDropdownFormEmail1">Email address</label>
                                            <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleDropdownFormPassword1">Password</label>
                                            <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
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
                                        <button type="submit" className="btn btn-primary" onClick={() => onLogin('ktayah@yahoo.com', 'QWE#rty6EsT')}>Sign in</button>
                                    </div>
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
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onLogin: (userName, password) => dispatch(authenticate(userName, password)),
        onLogout: () => dispatch(logOut())
    };
}

const mapStateToProps = state => {
    console.log('Index mapStateToProps', state);
    return {...state};
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);