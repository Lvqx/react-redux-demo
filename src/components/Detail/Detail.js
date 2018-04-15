import React, { Component } from 'react';

class DetailContent extends Component {

    render() {
        return(
            <div>{this.props.description}</div>
        );
    }
}

export default DetailContent;