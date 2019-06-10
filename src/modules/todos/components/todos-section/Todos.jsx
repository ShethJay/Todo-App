import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../footer-section/Footer';
import TodoList from '../todos-list-section/TodoList';
import DoneTodoList from '../done-todos-list-section/DoneTodoList';
import HeaderContainer from '../header-section/HeaderContainer';

const Todos = ({ selectedTab }) => (
  <div className="todo-outer">
    <div className="todo-wrapper">
      <HeaderContainer />
      {selectedTab === 0 ? <TodoList /> : <DoneTodoList />}
      <Footer />
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
