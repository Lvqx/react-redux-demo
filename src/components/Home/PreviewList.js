import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Preview from './Preview';

class PreviewList extends Component {
    static propTypes = {
        // articleList: React.PropType.arrayOf(React.PropType.object),
        loading: PropTypes.bool,
        error: PropTypes.bool,
        articleList: PropTypes.arrayOf(PropTypes.object),
        // loadArticles: PropTypes.func,
        push:PropTypes.func
    }

    componentDidMount() {
        // this.props.loadArticles();
    }

    render() {
        const { loading, error, articleList } = this.props;

        if (error) {
            return <p className="message">Oops,something is wrong</p>
        }

        if (loading) {
            return <p className="message">Loading...</p>
        }
        // this.props.push更新路由
        return articleList.map(item => (<Preview {...item} key={item.id} push={this.props.push} />))
    }
}

export default PreviewList;