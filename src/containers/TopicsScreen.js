import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TopicsScreen.scc';

class TopicsScreen extends Component {
    render() {
        return (
            <h2> Где мои топики?</h2>
        );
    }
}

function mapStateToProps(state){
    return {};
}

export default connect (mapStateToProps) (TopicsScreen);