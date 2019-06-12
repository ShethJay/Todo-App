import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { noop } from '../../../../utils/index';

const TodosList = ({ todos, onCheckTodo, onDeleteTodo }) => (
  <div className="todos-list">
    <Table size="small">
      <TableBody>
        {todos.length > 0
          && todos
            .map(todo => (
              <TableRow key={todo.id} className="todos-row">
                <TableCell className="remove-padding todos-done-checkbox">
                  <Checkbox
                    onChange={e => onCheckTodo(e, todo.id)}
                    checked={todo.isDone}
                    value="checked"
                    color="primary"
                    fontSize="small"
                  />
                </TableCell>
                <TableCell className="remove-padding todos-title-input">
                  <Typography
                    variant="body1"
                    word-wrap="break-word"
                  >
                    {todo.title}
                  </Typography>
                </TableCell>
                <TableCell className="remove-padding todos-delete-button">
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
  onCheckTodo: PropTypes.func,
  onDeleteTodo: PropTypes.func,
  todos: PropTypes.instanceOf(Object),
};

TodosList.defaultProps = {
  onCheckTodo: noop,
  onDeleteTodo: noop,
  todos: {},
};

export default TodosList;
