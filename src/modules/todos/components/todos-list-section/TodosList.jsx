import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';
import { noop } from '../../../../utils/index';

const TodosList = ({ todos, onCheckTodo, onDeleteTodo }) => (
  <div className="list">
    <Table size="small">
      <TableBody>
        {todos.length > 0
          && todos
            .filter(todo => !todo.isRemoved)
            .filter(todo => !todo.isDone)
            .map(todo => (
              <TableRow key={todo.id} className="todo-row">
                <TableCell className="noBorder checkBox" size="small">
                  <Checkbox
                    onChange={e => onCheckTodo(todo.id, e)}
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
            ))}
      </TableBody>
    </Table>
  </div>
);
TodosList.propTypes = {
  todos: PropTypes.instanceOf(Array),
  onCheckTodo: PropTypes.func,
  onDeleteTodo: PropTypes.func,
};
TodosList.defaultProps = {
  todos: [],
  onCheckTodo: noop,
  onDeleteTodo: noop,
};
export default TodosList;
