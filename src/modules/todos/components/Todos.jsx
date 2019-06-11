import React from 'react';
import PropTypes from 'prop-types';
import DoneTodosListContainer from './done-todos-list-section/DoneTodosListContainer';
import HeaderContainer from './header-section/HeaderContainer';
import TodosListContainer from './todos-list-section/TodosListContainer';
import FooterContainer from './footer-section/FooterContainer';
import AddTodosContainer from './add-todo-section/AddTodosContainer';

const Todos = ({ selectedTab }) => (
  <div className="todo-outer">
    <div className="todo-wrapper">
      <HeaderContainer />
      {selectedTab === 0 ? <TodosListContainer /> : <DoneTodosListContainer />}
      <AddTodosContainer />
      <FooterContainer />
    </div>
  </div>
);

Todos.propTypes = {
  selectedTab: PropTypes.number,
};
Todos.defaultProps = {
  selectedTab: 0,
};

export default Todos;
