import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import PropTypes from 'prop-types';
import { noop } from '../../../../utils';
import AddTodoInputContainer from '../add-todo-input-section/AddTodoInputContainer';

const AddTodosDialogBox = ({
  isDialogOpen,
  handleClose,
}) => (
  <Dialog
    open={isDialogOpen}
    onClose={handleClose}
    aria-labelledby="form-dialog-title"
  >
    <DialogContent id="form-dialog-title" className="todo-input-dialog">
      <AddTodoInputContainer />
    </DialogContent>
  </Dialog>
);
AddTodosDialogBox.propTypes = {
  handleClose: PropTypes.func,
  isDialogOpen: PropTypes.bool,
};
AddTodosDialogBox.defaultProps = {
  handleClose: noop,
  isDialogOpen: false,
};
export default AddTodosDialogBox;
