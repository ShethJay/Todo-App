import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';
import { noop } from '../../../../utils/index';

const DisplayTodos = ({ todo, onCheckTodo, onDeleteTodo }) => (
  <TableRow key={todo.id} className="todo-row">
    <TableCell className="noBorder doneCheckBox" size="small">
      <Checkbox
        onChange={e => onCheckTodo(e, todo.id)}
        checked={todo.isDone}
        value="checkedB"
        color="primary"
        fontSize="small"
      />
    </TableCell>
    <TableCell className="noBorder todo-title" size="small" component="td" scope="row">
      <Typography
        variant="body1"
        word-wrap="break-word"
      >
        {todo.title}
      </Typography>
    </TableCell>
    <TableCell className="noBorder del-button" size="small">
      <IconButton
        aria-label="Delete"
        onClick={() => onDeleteTodo(todo.id)}
      >
        <DeleteIcon
          variant="contained"
        />
      </IconButton>
    </TableCell>
  </TableRow>
);
DisplayTodos.propTypes = {
  onCheckTodo: PropTypes.func,
  onDeleteTodo: PropTypes.func,
  todo: PropTypes.instanceOf(Object),
};
DisplayTodos.defaultProps = {
  onCheckTodo: noop,
  onDeleteTodo: noop,
  todo: {},
};
export default DisplayTodos;
