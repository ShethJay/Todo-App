import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TodosList from './TodosList';
import * as actions from '../../redux/actions';
import { noop } from '../../../../utils/index';

class TodosListCotainer extends Component {
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

TodosListCotainer.propTypes = {
  removeTodo: PropTypes.func,
  checkTodo: PropTypes.func,
  todos: PropTypes.instanceOf(Object),
};

TodosListCotainer.defaultProps = {
  removeTodo: noop,
  checkTodo: noop,
  todos: {},
};

const mapDisptachToProps = dispatch => ({
  removeTodo: id => dispatch(actions.removeTodo(id)),
  checkTodo: (id, isChecked) => dispatch(actions.checkTodo(id, isChecked)),
  // updateTodo: (id, todo) => dispatch(actions.updateTodo(id, todo)),
});

export default connect(null, mapDisptachToProps)(TodosListCotainer);
