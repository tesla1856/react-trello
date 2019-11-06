import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListRow from '../components/ListRow';
import ListView from '../components/ListView';
import TopicFilter from '../components/TopicFilter';
import * as postsActions from '../store/posts/actions';
import * as postsSelectors from '../store/posts/reducer';
import * as topicsSelectors from '../store/topics/reducer';
import './PostsScreen.css';




class PostsScreen extends Component {

  componentDidMount() {
    this.props.dispatch(postsActions.fetchPosts());
  }

  render() {
    if (!this.props.rowsById) return this.renderLoading();
    return (
      <div className="PostsScreen">
        <TopicFilter
          className="TopicFilter"
          topics={this.props.topicsByUrl}
          selected={this.props.currentFilter}
          onChanged={this.onFilterChanged.bind(this)}
        />
        <ListView
          rowsIdArray={this.props.rowsIdArray}
          rowsById={this.props.rowsById}
          renderRow={this.renderRow.bind(this)} />
      </div>
    );
  }

  renderLoading() {
    return (
      <p>Loading...</p>
    );
  }

  renderRow(rowId, row) {
    return (
      <ListRow rowId={rowId}>
        {!row.thumbnail ? false :
          <img className="thumbnail" src={row.thumbnail} />
        }
        <h3>{row.title}</h3>
      </ListRow>
    )
  }

  onFilterChanged(newFilter) {
    this.props.dispatch(postsActions.changeFilter(newFilter));
  }

}

function mapStateToProps(state) {
  const [postsById, postsIdArray] = postsSelectors.getPosts(state);
  return {
    rowsById: postsById,
    rowsIdArray: postsIdArray,
    topicsByUrl: topicsSelectors.getSelectedTopicsByUrl(state),
    currentFilter: postsSelectors.getCurrentFilter(state)
  };
}

export default connect(mapStateToProps)(PostsScreen);