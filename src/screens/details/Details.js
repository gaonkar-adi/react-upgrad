import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import './Details.css';

class Details extends Component {
    constructor() {
        super();
        this.state = { }
    }

    componentWillMount() { }

    render() {
        return (
            <Typography>
                Back to Details
            </Typography>
        )
    }
}

export default Details;