import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import { noop } from '../../../../utils';
import AddTodosDialogBox from './AddTodosDialogBox';

const AddTodos = ({
  handleClickOpen,
  handleClose,
  isDialogOpen,
}) => (

  <div className="add-todo-icon">
    <Fab className="" color="primary">
      <AddIcon onClick={handleClickOpen} />
    </Fab>
    <AddTodosDialogBox handleClose={handleClose} isDialogOpen={isDialogOpen} />
  </div>

);
AddTodos.propTypes = {
  handleClickOpen: PropTypes.func,
  handleClose: PropTypes.func,
  isDialogOpen: PropTypes.bool,
};
AddTodos.defaultProps = {
  handleClickOpen: noop,
  handleClose: noop,
  isDialogOpen: false,
};
export default AddTodos;
