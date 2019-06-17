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
    // this.onUpdateTodo = this.onUpdateTodo.bind(this);
  }

  componentDidMount() {
    const { getTodosList } = this.props;
    getTodosList(2);
  }

  componentWillUnmount() {
    const { flushTodosList } = this.props;
    flushTodosList();
  }

  onDeleteTodo(id) {
    const { removeTodo } = this.props;
    removeTodo(id);
    // this.onUpdateTodo(id);
  }

  onCheckTodo(e, id) {
    const { checked } = e.target;
    const { checkTodo } = this.props;
    checkTodo(id, checked);
    // this.onUpdateTodo(id, { isDone: checked });
  }

  // onUpdateTodo(id, todo) {
  //   const { updateTodo } = this.props;
  //   updateTodo(id, todo);
  // }

  render() {
    const {
      todos,
      loading,
      responseMessage,
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
      />
    );
  }
}

TodosListCotainer.propTypes = {
  removeTodo: PropTypes.func,
  checkTodo: PropTypes.func,
  todos: PropTypes.instanceOf(Object),
  getTodosList: PropTypes.func,
  loading: PropTypes.bool,
  flushTodosList: PropTypes.func,
  responseMessage: PropTypes.string,
};

TodosListCotainer.defaultProps = {
  removeTodo: noop,
  checkTodo: noop,
  todos: {},
  getTodosList: noop,
  loading: false,
  flushTodosList: noop,
  responseMessage: '',
};

const mapStateToProps = state => ({
  loading: state.todo.requestState === RequestStates.loading,
  isRequestSuccess: state.todo.requestState === RequestStates.success,
  responseMessage: state.todo.responseMessage,
});

const mapDisptachToProps = dispatch => ({
  removeTodo: id => dispatch(actions.removeTodo(id)),
  checkTodo: (id, isChecked) => dispatch(actions.checkTodo(id, isChecked)),
  getTodosList: page => dispatch(actions.getTodosList(page)),
  flushTodosList: () => dispatch(actions.flushTodosList()),
  // updateTodo: (id, todo) => dispatch(actions.updateTodo(id, todo)),
});

export default connect(mapStateToProps, mapDisptachToProps)(TodosListCotainer);
