import React, { Component } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';

class Header extends Component {

    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div>
                <header className="app-header">
                    <img src={logo} className="app-logo" alt="Movies App Logo" />
                    <div className="login-button">
                        <Button variant="contained" color="default" onClick={this.openModalHandler}>
                            Login
                        </Button>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header;