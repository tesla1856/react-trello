import _ from 'lodash';
import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

const initialState = Immutable({
  postsById: undefined,
  currentFilter: "all",
  currentPostId: undefined
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.POSTS_FETCHED:
      return state.merge({ postsById: action.postsById });

    case types.FILTER_CHANGED:
      return state.merge({
        currentFilter: action.filter
      });

    default:
      return state;
  }
}

export function getPosts(state) {
  const currentFilter = state.posts.currentFilter;
  const postsById = state.posts.postsById;
  const postsIdArray = currentFilter === 'all' ?
    _.keys(postsById) :
    _.filter(_.keys(postsById), (postId) => postsById[postId].topicUrl === currentFilter);
  return [postsById, postsIdArray];
}

export function getCurrentFilter(state) {
  return state.posts.currentFilter;
}