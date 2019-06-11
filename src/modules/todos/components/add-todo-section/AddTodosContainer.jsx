import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddTodos from './AddTodos';
import * as actions from '../../redux/actions';
import { noop } from '../../../../utils';

class AddTodosContainer extends Component {
  constructor(props) {
    super(props);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClickOpen() {
    const { openDialog } = this.props;
    openDialog();
  }

  handleClose() {
    const { closeDialog } = this.props;
    closeDialog();
  }

  render() {
    const { isDialogOpen } = this.props;
    return (
      <AddTodos
        isDialogOpen={isDialogOpen}
        handleClickOpen={this.handleClickOpen}
        handleClose={this.handleClose}
      />
    );
  }
}
AddTodosContainer.propTypes = {
  openDialog: PropTypes.func,
  closeDialog: PropTypes.func,
  isDialogOpen: PropTypes.bool,
};
AddTodosContainer.defaultProps = {
  openDialog: noop,
  closeDialog: noop,
  isDialogOpen: false,
};
const mapStateToPros = state => ({
  isDialogOpen: state.todos.isDialogOpen,
});
const mapDisptachToProps = dispatch => ({
  openDialog: () => dispatch(actions.openDialog()),
  closeDialog: () => dispatch(actions.closeDialog()),
});

export default connect(mapStateToPros, mapDisptachToProps)(AddTodosContainer);
