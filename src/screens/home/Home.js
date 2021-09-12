import React, { Component } from 'react';
import Header from '../../common/header/Header';

class Home extends Component {

    constructor() {
        super();
        this.state = { }
    }

    componentWillMount() { }

    render() {
        return (
            <div>
                <Header />
            </div>
        )
    }
}

export default Home;