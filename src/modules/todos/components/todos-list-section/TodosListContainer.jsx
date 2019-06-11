import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TodosList from './TodosList';

const TodosListContainer = ({ todos }) => (
  <TodosList todos={todos} />
);

TodosListContainer.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
};
TodosListContainer.defaultProps = {
  todos: [],
};
const mapStateToPros = state => ({
  todos: state.todo.todos,

});

export default connect(mapStateToPros, null)(TodosListContainer);
