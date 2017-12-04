import React from 'react'
import {
    Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Button, Col, Row } from 'react-bootstrap';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "2",
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.login = this.login.bind(this);
    }

    login(event) {
        event.preventDefault();
        // TODO:  This needs to be implemented
        // traditional signon
        // this.props.requestAuthTokenPost(this.state.username, this.state.password);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {

        const elementStyle = {
            marginTop: '10px'
        }

        return (
            <div className="login-container">
                <div className="login-box">
                    <form style={{ width: '60%', margin: 'auto' }} className="form-signin">
                        <label htmlFor="inputUserName" style={elementStyle}>User name</label>
                        <input type="inputUserName" id="inputUserName" name="username" className="form-control" placeholder="" required="" onChange={this.handleInputChange} />
                        <label htmlFor="inputPassword" style={elementStyle}>Password</label>
                        <input type="password" id="inputPassword" name="password" className="form-control" placeholder="" required="" onChange={this.handleInputChange} />
                        <Button type="submit" style={elementStyle} onClick={this.login} className="btn-active">Login</Button>
                    </form>
                    <br />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    // login: state.login,
});

const mapDispatchToProps = dispatch => ({
    // attemptAuthentication: (username, userData) => dispatch(attemptAuthentication(username, userData)),
    // requestAuthTokenPost: (user, password) => dispatch(requestAuthTokenPost(user, password)),
    // requestAuthTokenGet: () => dispatch(requestAuthTokenGet()),

});


export default connect(mapStateToProps, mapDispatchToProps)(Login);