import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { noop } from '../../../utils';
import Todos from './Todos';
import * as actions from '../redux/actions';

class TodosContainer extends Component {
  constructor(props) {
    super(props);
    this.onChangeActivePage = this.onChangeActivePage.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onChangeActivePage(pageNo) {
    const { getTodosListByPage } = this.props;
    getTodosListByPage(pageNo);
  }

  handleClick(offset, page) {
    const { getTodosListByPage } = this.props;
    getTodosListByPage(page);
  }

  render() {
    const {
      selectedTab, todos, totalRecords, activePage, paginationType,
    } = this.props;
    return (
      <Todos
        selectedTab={selectedTab}
        todos={todos}
        onChangeActivePage={this.onChangeActivePage}
        totalRecords={totalRecords}
        activePage={activePage}
        handleClick={this.handleClick}
        paginationType={paginationType}
      />
    );
  }
}

TodosContainer.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  selectedTab: PropTypes.number,
  getTodosListByPage: PropTypes.func,
  totalRecords: PropTypes.number,
  activePage: PropTypes.number,
  paginationType: PropTypes.number,
};

TodosContainer.defaultProps = {
  todos: [],
  selectedTab: 0,
  getTodosListByPage: noop,
  totalRecords: 0,
  activePage: 0,
  paginationType: 0,
};

const mapStateToPros = state => ({
  todos: state.todo.todos,
  selectedTab: state.todo.selectedTab,
  totalRecords: state.todo.totalRecords,
  activePage: state.todo.todosListPageNo,
  paginationType: state.todo.paginationType,
});

const mapDispatchToProps = dispatch => ({
  getTodosListByPage: (pageNo, limit) => dispatch(actions.getTodosListByPage(pageNo, limit)),
});

export default connect(mapStateToPros, mapDispatchToProps)(TodosContainer);
