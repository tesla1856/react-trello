import _ from 'lodash';
import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

const initialState = Immutable(
    {
        topicsByUrl: undefined,
        selectedTopicUrls: []
    }
);

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.TOPICS_FETCHED:
            return state.merge({
                topicsByUrl: action.topicsByUrl
            });
        case types.TOPICS_SELECTED:
            return state.merge ({
                selectedTopicUrls: action.selectedTopicUrls
            })
        default:
            return state;
    }
}

export function getTopicsByUrl(state) {
    return state.topics.topicsByUrl;
}

export function getTopicstUrlArray(state) {
    return _.keys(state.topics.topicsByUrl);
}

export function getSelectedTopicUrls(state) {
    return state.topics.selectedTopicUrls;
}

export function getSelectedTopicUrlsMap(state) {
    return _.keyBy(state.topics.selectedTopicUrls);
}
