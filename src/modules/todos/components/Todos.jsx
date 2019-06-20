import React from 'react';
import PropTypes from 'prop-types';
import Pagination from 'material-ui-flat-pagination';

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
  handleClick,
  paginationType,
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
      {/* {paginationType === 0
        ? (
          <PaginationContainer
            onChangeActivePage={onChangeActivePage}
            totalRecords={totalRecords}
            activePage={activePage}
          />
        )
        : (
          <Pagination // material-ui-flat-pagination
            limit={10}
            offset={(activePage - 1) * 10}
            total={totalRecords}
            onClick={(e, offset, page) => handleClick(offset, page)}
          />
        )} */}
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
  handleClick: PropTypes.func,
  paginationType: PropTypes.number,
};

Todos.defaultProps = {
  todos: [],
  selectedTab: 0,
  onChangeActivePage: noop,
  totalRecords: 0,
  activePage: 1,
  handleClick: noop,
  paginationType: 0,
};

export default Todos;
