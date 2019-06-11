import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import PropTypes from 'prop-types';
import DisplayTodosContainer from '../display-todos-section/DisplayTodosContainer';

const DoneTodosList = ({ todos }) => (
  <div className="list">
    <Table size="small">
      <TableBody>
        {todos.length > 0
        && todos
          .filter(todo => todo.isDone)
          .map(todo => (
            <DisplayTodosContainer todo={todo} key={todo.id} />
          ))}
      </TableBody>
    </Table>
  </div>
);
DoneTodosList.propTypes = {
  todos: PropTypes.instanceOf(Array),
};
DoneTodosList.defaultProps = {
  todos: [],
};
export default DoneTodosList;
