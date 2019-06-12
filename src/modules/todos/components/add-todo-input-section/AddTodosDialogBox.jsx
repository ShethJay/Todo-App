import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import AddTodoInputContainer from './AddTodoInputContainer';
import * as actions from '../../redux/actions';
import { noop } from '../../../../utils';
import { ADD_TODO_DIALOG } from '../../../../shared/dialogNames';


const AddTodosDialogBox = ({
  currentDialogNames,
  closeDialog,
}) => (
  <Dialog
    open={currentDialogNames.indexOf(ADD_TODO_DIALOG) > -1}
    onClose={() => closeDialog(ADD_TODO_DIALOG)}
    aria-labelledby="form-dialog-title"
  >
    <DialogContent id="form-dialog-title" className="add-todos-dialog">
      <AddTodoInputContainer />
    </DialogContent>
  </Dialog>
);

AddTodosDialogBox.propTypes = {
  closeDialog: PropTypes.func,
  currentDialogNames: PropTypes.arrayOf(PropTypes.string),
};

AddTodosDialogBox.defaultProps = {
  closeDialog: noop,
  currentDialogNames: [],
};
const mapStateToProps = state => ({
  currentDialogNames: state.todo.currentDialogNames,
});
const mapDispatchToProps = dispatch => ({
  closeDialog: dialogName => dispatch(actions.closeDialog(dialogName)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AddTodosDialogBox);
