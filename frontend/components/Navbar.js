import { Component } from 'react';
import Link from 'next/link';
import authenticate from '../actions/index';
import logOut from '../actions/index';
import { connect } from 'react-redux';

class Navbar extends Component {

    static async getInitialProps({store, isServer, pathname, query}) {
        // console.log('isServer', isServer);
        console.log('Navbar Store', store);
        store.dispatch(authenticate('ktayah@yahoo.com', 'test123'));
        return { store: store, title: title }
    }
    render() {
        console.log('Navbar props', this.props);
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link href="/index"><a className="navbar-brand">{this.props.title}</a></Link>
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
                                        <button type="submit" className="btn btn-primary" onClick={() => this.props.onLogin('ktayah@yahoo.com', 'test123')}>Sign in</button>
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

// Functional Approach to above code, trying to see if it had anything to do with the bug
// const Navbar = (/*{title, authenticate, onLogin, onLogout}*/props) => (
//     <div>
//         {console.log('Navbar Props', props)}
//         {/* {props.dispatch(authenticate('ktayah@yahoo.com', 'test123'))} */}
//         {/* {props.dispatch(authenticate('ktayah@yahoo.com', 'test123'))} */}
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <Link href="/index"><a className="navbar-brand">{props.title}</a></Link>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//                 <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
//                 <li className="nav-item active">
//                     <Link href='/index'><a className="nav-link">Home</a></Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link href="/about"><a className="nav-link">About Us</a></Link>                
//                 </li>
//                 <li className="nav-item">
//                     <Link href="/trips"><a className="nav-link">Trips</a></Link>
//                 </li>
//                 </ul>
//                 <form className="form-inline my-1 my-lg-0">
//                     <div className="dropdown">
//                     <button className="btn dropdown-toggle btn-outline-success my-2 my-sm-0" data-toggle="dropdown" type="button">Sign in</button>
//                         <div className="dropdown-menu dropdown-menu-left">
//                             <div className="px-4 py-3">
//                                 <div className="form-group">
//                                     <label htmlFor="exampleDropdownFormEmail1">Email address</label>
//                                     <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="exampleDropdownFormPassword1">Password</label>
//                                     <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
//                                 </div>
//                                 <br/>
//                                 <div className="form-group">
//                                     <div className="form-check">
//                                         <input type="checkbox" className="form-check-input" id="dropdownCheck" />
//                                         <label className="form-check-label" htmlFor="dropdownCheck">
//                                         Remember me
//                                         </label>
//                                     </div>
//                                 </div>
//                                 <br/>
//                                 <button type="submit" className="btn btn-primary" onClick={() => props.onLogin('ktayah@yahoo.com', 'test123')}>Sign in</button>
//                             </div>
//                             <div className="dropdown-divider"></div>
//                             <a className="dropdown-item" href="#">New around here? Sign up</a>
//                             <a className="dropdown-item" href="#">Forgot password?</a>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </nav>
//     </div>
// );

// Navbar.getInitialProps = ({store, isServer, pathname, query}) => {
//     console.log(store, isServer, pathname, query);
//     // console.log('Navbar Store', store, store.getState());
//     // store.dispatch(authenticate('ktayah@yahoo.com', 'test123'));
//     // return { title: title }
// }

const mapDispatchToProps = dispatch => {
    return {
        onLogin: action,
        onLogout: () => dispatch(logOut())
    };
}

const action = (userName, password) => dispatch(authenticate(userName, password));

const mapStateToProps = state => {
    console.log('Index mapStateToProps', state);
    return {...state};
    // const { jwt, user } = state.userData;
    // return { jwt, user }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);