import React, { Component } from 'react';
import actions from './actions/users';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './css/App.css';

class App extends Component {
  componentDidMount() {
      const {
          actions
      } = this.props;
      actions.fetchUsers();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    users: state.users
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

