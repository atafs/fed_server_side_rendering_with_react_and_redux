import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';

class AdminsListPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins() {
    return this.props.admins.map(admin => {
      return <li key={admin.id}>{admin.name}</li>;
    });
  }

  render() {
    return (
      <div>
        <h3>Protected List of Admins</h3>
        <ul>{this.renderAdmins()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ admins }) {
  return { admins };
}

function loadData(store) {
  return store.dispatch(fetchAdmins());
}

export default {
  component: connect(mapStateToProps, { fetchAdmins })(AdminsListPage),
  loadData: ({ dispatch }) => dispatch(fetchAdmins())
};
