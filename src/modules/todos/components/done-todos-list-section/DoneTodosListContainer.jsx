import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DoneTodosList from './DoneTodosList';

const DoneTodosListContainer = ({ todos }) => (
  <DoneTodosList todos={todos} />
);
DoneTodosListContainer.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
};
DoneTodosListContainer.defaultProps = {
  todos: [],
};
const mapStateToPros = state => ({
  todos: state.todo.todos,

});
export default connect(mapStateToPros, null)(DoneTodosListContainer);
