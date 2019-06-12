import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Todos from './Todos';

const TodosContainer = ({ todos, selectedTab }) => (
  <Todos selectedTab={selectedTab} todos={todos} />
);

TodosContainer.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  selectedTab: PropTypes.number,
};

TodosContainer.defaultProps = {
  todos: [],
  selectedTab: 0,
};

const mapStateToPros = state => ({
  selectedTab: state.todo.selectedTab,
  todos: state.todo.todos,
});

export default connect(mapStateToPros)(TodosContainer);
