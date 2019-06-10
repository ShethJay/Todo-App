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

const TodosList = ({ todo, onCheckTodo, onDeleteTodo }) => (
  <div className="list">
    <Table size="small">
      <TableBody>
        {todo.length > 0
          && todo
            .filter(todos => !todos.isRemoved)
            .filter(todos => !todos.isDone)
            .map(todos => (
              <TableRow key={todos.id} className="todo-row">
                <TableCell className="noBorder checkBox" size="small">
                  <Checkbox
                    onChange={e => onCheckTodo(todos.id, e)}
                    checked={todos.isDone}
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
                    {todos.title}
                  </Typography>
                </TableCell>
                <TableCell className="noBorder del-button" size="small">
                  <IconButton
                    aria-label="Delete"
                    onClick={() => onDeleteTodo(todos.id)}
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
  todo: PropTypes.instanceOf(Array),
  onCheckTodo: PropTypes.func,
  onDeleteTodo: PropTypes.func,
};
TodosList.defaultProps = {
  todo: [],
  onCheckTodo: noop,
  onDeleteTodo: noop,
};
export default TodosList;
