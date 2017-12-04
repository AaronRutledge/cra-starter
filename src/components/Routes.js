
import App from '../App.js';

import Login from './Login';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

class Routes extends React.Component {

    render() {

        const PrivateRoute = ({ component: Component, ...rest }) => (
            <Route {...rest} render={props => (
                // TODO:  Check for authentication here
                true ? (

                    <Component {...props} />

                ) : (
                        <div>
                            <Login />
                        </div>
                    )
            )} />
        );

        return (
            <Router>
                <div>
                    <Route path="/login" component={Login} />
                    <PrivateRoute exact path="/" component={App} />
                </div>
            </Router>
        )
    }
}


const mapStateToProps = (state) => ({
    login: state.login,
});

const mapDispatchToProps = dispatch => ({
    // attemptAuthentication: (username, userData) => dispatch(attemptAuthentication(username, userData)),
    // requestAuthTokenGet: (loader) => dispatch(requestAuthTokenGet(loader)),
    // logout: () => dispatch(logout()),
    // logOff: () => dispatch(logOff()),

});


export default connect(mapStateToProps, mapDispatchToProps)(Routes);