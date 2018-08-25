import Loader from 'react-loader-spinner';
import React, { Component } from 'react';

class Spinner extends Component {

    render() {
        return (
            <Loader
                type="ThreeDots"
                color="#777777"
                height="100"
                width="100"
            />
        );
    }
}

export default Spinner