import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { noop } from '../../../../utils';

const AddTodoInput = ({
  title,
  onInputChange,
  onKeyUp,
  helperText,
  onAddTodoClick,
}) => (
  <div className="add-todo-div">
    <TextField
      autoFocus
      id="name"
      label="Enter Todos"
      className="add-todo-input"
      margin="dense"
      value={title}
      onChange={onInputChange}
      onKeyUp={onKeyUp}
      fullWidth
      helperText={helperText}
      error={helperText.length !== 0}
    />
    <Button variant="contained" onClick={onAddTodoClick} className="add-todo-button">
      Add Todo
    </Button>
  </div>
);
AddTodoInput.propTypes = {
  title: PropTypes.string,
  onInputChange: PropTypes.func,
  onKeyUp: PropTypes.func,
  helperText: PropTypes.string,
  onAddTodoClick: PropTypes.func,
};
AddTodoInput.defaultProps = {
  title: '',
  onInputChange: noop,
  onKeyUp: noop,
  helperText: '',
  onAddTodoClick: noop,
};
export default AddTodoInput;
