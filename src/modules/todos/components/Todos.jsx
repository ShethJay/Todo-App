import React from 'react';
import PropTypes from 'prop-types';

import HeaderContainer from './header-section/HeaderContainer';
import TodosListContainer from './todos-list-section/TodosListContainer';
import AddTodosContainer from './add-todo-section/AddTodosContainer';
import FooterContainer from './footer-section/FooterContainer';

const Todos = ({ todos, selectedTab }) => (
  <div className="todos-container">
    <div className="todos">
      <HeaderContainer />
      <TodosListContainer
        todos={
          selectedTab === 0
            ? todos.filter(todo => !todo.isDone)
            : todos.filter(todo => todo.isDone)
        }
      />
      <AddTodosContainer />
      <FooterContainer />
    </div>
  </div>
);

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  selectedTab: PropTypes.number,
};

Todos.defaultProps = {
  todos: [],
  selectedTab: 0,
};

export default Todos;
