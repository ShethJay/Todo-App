import React from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import { noop } from '../../../../utils';
import AddTodosDialogBox from '../add-todo-input-section/AddTodosDialogBox';

const AddTodos = ({
  handleClickOpen,
}) => (

  <div className="add-todos-icon">
    <Fab className="" color="primary">
      <AddIcon onClick={handleClickOpen} />
    </Fab>
    <AddTodosDialogBox />
  </div>

);

AddTodos.propTypes = {
  handleClickOpen: PropTypes.func,
};

AddTodos.defaultProps = {
  handleClickOpen: noop,
};

export default AddTodos;
