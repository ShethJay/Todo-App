import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Footer from '../footer-section/Footer';
import TodoList from '../todos-list-section/TodoList';
import DoneTodoList from '../done-todos-list-section/DoneTodoList';
import HeaderContainer from '../header-section/HeaderContainer';

const Todo = ({ selectedTab }) => (
  <div className="todo-outer">
    <div className="todo-wrapper">
      <HeaderContainer />
      {selectedTab === 0 ? <TodoList /> : <DoneTodoList />}
      <Footer />
    </div>
  </div>
);
Todo.propTypes = {
  selectedTab: PropTypes.number,
};
Todo.defaultProps = {
  selectedTab: 0,
};
const mapStateToPros = state => ({
  selectedTab: state.todo.selectedTab,
});
export default connect(mapStateToPros, null)(Todo);
