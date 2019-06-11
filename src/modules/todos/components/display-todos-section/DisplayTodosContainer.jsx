import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DisplayTodos from './DisplayTodos';
import { noop } from '../../../../utils/index';
import * as actions from '../../redux/actions';

class DisplayTodosContainer extends Component {
  constructor(props) {
    super(props);
    this.onDeleteTodo = this.onDeleteTodo.bind(this);
    this.onCheckTodo = this.onCheckTodo.bind(this);
    // this.onUpdateTodo = this.onUpdateTodo.bind(this);
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
    const { todo } = this.props;
    return (
      <DisplayTodos
        todo={todo}
        onCheckTodo={this.onCheckTodo}
        onDeleteTodo={this.onDeleteTodo}
      />
    );
  }
}
DisplayTodosContainer.propTypes = {
  removeTodo: PropTypes.func,
  checkTodo: PropTypes.func,
  todo: PropTypes.instanceOf(Object),
};
DisplayTodosContainer.defaultProps = {
  removeTodo: noop,
  checkTodo: noop,
  todo: {},
};
const mapStateToPros = state => ({
  todos: state.todo.todos,
});
const mapDisptachToProps = dispatch => ({
  removeTodo: id => dispatch(actions.removeTodo(id)),
  checkTodo: (id, isChecked) => dispatch(actions.checkTodo(id, isChecked)),
  // updateTodo: (id, todo) => dispatch(actions.updateTodo(id, todo)),
});
export default connect(mapStateToPros, mapDisptachToProps)(DisplayTodosContainer);
