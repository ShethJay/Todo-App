import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AddTodos from './AddTodos';
import * as actions from '../../redux/actions';
import { noop } from '../../../../utils';
import { ADD_TODO_DIALOG } from '../../../../shared/dialogNames';

class AddTodosContainer extends Component {
  constructor(props) {
    super(props);
    this.handleClickOpen = this.handleClickOpen.bind(this);
  }

  handleClickOpen() {
    const { openDialog } = this.props;
    openDialog(ADD_TODO_DIALOG);
  }

  render() {
    return (
      <AddTodos
        handleClickOpen={this.handleClickOpen}
      />
    );
  }
}

AddTodosContainer.propTypes = {
  openDialog: PropTypes.func,
};

AddTodosContainer.defaultProps = {
  openDialog: noop,
};

const mapDisptachToProps = dispatch => ({
  openDialog: dialogName => dispatch(actions.openDialog(dialogName)),
});

export default connect(null, mapDisptachToProps)(AddTodosContainer);
