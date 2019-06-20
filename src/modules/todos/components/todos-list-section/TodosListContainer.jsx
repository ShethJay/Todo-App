import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import TodosList from './TodosList';
import * as actions from '../../redux/actions';
import { noop } from '../../../../utils/index';
import RequestStates from '../../../../utils/request-states';

class TodosListCotainer extends Component {
  constructor(props) {
    super(props);
    this.onDeleteTodo = this.onDeleteTodo.bind(this);
    this.onCheckTodo = this.onCheckTodo.bind(this);
  }

  onDeleteTodo(id) {
    const { deleteTodo } = this.props;
    deleteTodo(id);
  }

  onCheckTodo(e, id) {
    const { checked } = e.target;
    const { checkTodo } = this.props;
    checkTodo(id, checked);
  }

  render() {
    const {
      todos,
      loading,
      responseMessage,
      pageNo,
      pageSize,
      total,
      flushTodosList,
      getTodosListByPage,
      getTodosList,
    } = this.props;
    if (responseMessage !== '') {
      toast.info(responseMessage, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }

    return (
      <TodosList
        todos={todos}
        onCheckTodo={this.onCheckTodo}
        onDeleteTodo={this.onDeleteTodo}
        loading={loading}
        pageNo={pageNo}
        pageSize={pageSize}
        total={total}
        flushTodosList={flushTodosList}
        getTodosListByPage={getTodosListByPage}
        getTodosList={getTodosList}
      />
    );
  }
}

TodosListCotainer.propTypes = {
  deleteTodo: PropTypes.func,
  checkTodo: PropTypes.func,
  todos: PropTypes.instanceOf(Object),
  loading: PropTypes.bool,
  responseMessage: PropTypes.string,
  pageNo: PropTypes.number,
  pageSize: PropTypes.number,
  total: PropTypes.number,
  flushTodosList: PropTypes.func,
  getTodosListByPage: PropTypes.func,
  getTodosList: PropTypes.func,
};

TodosListCotainer.defaultProps = {
  deleteTodo: noop,
  checkTodo: noop,
  todos: {},
  loading: false,
  responseMessage: '',
  pageNo: 1,
  pageSize: 1,
  total: 0,
  flushTodosList: noop,
  getTodosListByPage: noop,
  getTodosList: noop,
};

const mapStateToProps = state => ({
  loading: state.todo.requestState === RequestStates.loading,
  isRequestSuccess: state.todo.requestState === RequestStates.success,
  responseMessage: state.todo.responseMessage,
  pageNo: state.todo.todosListPageNo,
  pageSize: state.todo.todosListPageSize,
  total: state.todo.totalRecords,
});

const mapDisptachToProps = dispatch => ({
  deleteTodo: id => dispatch(actions.deleteTodo(id)),
  checkTodo: (id, isChecked) => dispatch(actions.checkTodo(id, isChecked)),
  flushTodosList: () => dispatch(actions.flushTodosList()),
  getTodosListByPage: pageNo => dispatch(actions.getTodosListByPage(pageNo)),
  getTodosList: pageNo => dispatch(actions.getTodosList(pageNo)),
});

export default connect(mapStateToProps, mapDisptachToProps)(TodosListCotainer);
