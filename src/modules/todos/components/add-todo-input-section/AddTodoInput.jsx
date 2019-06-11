import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { noop } from '../../../../utils';

const AddTodoInput = ({
  title,
  onInputChange,
  onKeyUp,
  helperText,
}) => (
  <TextField
    autoFocus
    id="name"
    label="Enter Todos"
    className="textField"
    margin="dense"
    value={title}
    onChange={onInputChange}
    onKeyUp={onKeyUp}
    fullWidth
    helperText={helperText}
    error={helperText.length !== 0}
  />
);
AddTodoInput.propTypes = {
  onKeyUp: PropTypes.func,
  onInputChange: PropTypes.func,
  title: PropTypes.string.isRequired,
  helperText: PropTypes.string,
};
AddTodoInput.defaultProps = {
  onKeyUp: noop,
  onInputChange: noop,
  helperText: '',
};
export default AddTodoInput;
