import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PreviewList from '../components/Home/PreviewList';
import { actions } from './HomeRedux';
import { push } from 'react-router-redux';


class Home extends Component {
    render() {
        // const { loadArticles, articleList, push } = this.props
        return (
            <div>
                <h1>Home</h1>
                <PreviewList {...this.props} />
            </div>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         articleList: state.home.list.articleList
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         push,
//         ...actions
//     }
// }

// 使用connect方法的组件可以感知redux
export default connect(state => {
    return {
        articleList: state.home.list.articleList
    };
}, {
    push,
    ...actions
})(Home);



