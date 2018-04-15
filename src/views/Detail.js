import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Detail.css'

// import DetailContent from '../components/Detail/Detail'
class Detail extends Component {

    static propTypes = {
        articleList: PropTypes.arrayOf(PropTypes.object),
    }

    render() {
        let { articleList } = this.props;
        let index = this.props.params.id;
        
        // console.log(index)
        return (
            <div>{this.props.articleList[index-1].description}</div>
        );
    }
}

export default connect(
    state => ({
        articleList: state.home.list.articleList
    })
)(Detail);

