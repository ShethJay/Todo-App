import React from 'react';
import PropTypes from 'prop-types';

import HeaderContainer from './header-section/HeaderContainer';
import TodosListContainer from './todos-list-section/TodosListContainer';
import AddTodosContainer from './add-todo-section/AddTodosContainer';
import FooterContainer from './footer-section/FooterContainer';
import PaginationContainer from '../../../shared/components/InfiniteScroll/Pagination/PaginationContainer';
import { noop } from '../../../utils';

const Todos = ({
  todos,
  selectedTab,
  onChangeActivePage,
  totalRecords,
  activePage,
}) => (
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
      <PaginationContainer
        onChangeActivePage={onChangeActivePage}
        totalRecords={totalRecords}
        activePage={activePage}
      />
      <FooterContainer />
    </div>
  </div>
);

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  selectedTab: PropTypes.number,
  onChangeActivePage: PropTypes.func,
  totalRecords: PropTypes.number,
  activePage: PropTypes.number,
};

Todos.defaultProps = {
  todos: [],
  selectedTab: 0,
  onChangeActivePage: noop,
  totalRecords: 0,
  activePage: 1,
};

export default Todos;
