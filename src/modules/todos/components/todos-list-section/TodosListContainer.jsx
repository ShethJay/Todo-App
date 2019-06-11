import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TodosList from './TodosList';
import * as actions from '../../redux/actions';
import { noop } from '../../../../utils';

class TodosListContainer extends Component {
  constructor(props) {
    super(props);
    this.onDeleteTodo = this.onDeleteTodo.bind(this);
    this.onCheckTodo = this.onCheckTodo.bind(this);
    this.onUpdateTodo = this.onUpdateTodo.bind(this);
  }

  onDeleteTodo(id) {
    // this.deleteTodo(id);
    this.onUpdateTodo(id, { isRemoved: true });
  }

  onCheckTodo(id, e) {
    // this.props.checkTodo(id , e.target.checked)
    this.onUpdateTodo(id, { isDone: e.target.checked });
  }

  onUpdateTodo(id, todo) {
    const { updateTodo } = this.props;
    updateTodo(id, todo);
  }

  render() {
    const { todos } = this.props;
    return (
      <TodosList
        todos={todos}
        onCheckTodo={this.onCheckTodo}
        onDeleteTodo={this.onDeleteTodo}
      />
    );
  }
}
TodosListContainer.propTypes = {
  updateTodo: PropTypes.func,
  todos: PropTypes.arrayOf(PropTypes.object),
};
TodosListContainer.defaultProps = {
  updateTodo: noop,
  todos: [],
};
const mapStateToPros = state => ({
  todos: state.todos.todos,

});
const mapDisptachToProps = dispatch => ({
  // removeTodo: id => dispatch(actions.removeTodo(id)),
  // checkTodo: (id, isChecked) => dispatch(actions.checkTodo(id, isChecked)),
  updateTodo: (id, todo) => dispatch(actions.updateTodo(id, todo)),
});
export default connect(mapStateToPros, mapDisptachToProps)(TodosListContainer);
