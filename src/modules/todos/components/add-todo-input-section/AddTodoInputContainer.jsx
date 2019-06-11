import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddTodoInput from './AddTodoInput';
import * as actions from '../../redux/actions';
import { noop } from '../../../../utils';

class AddTodoInputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      helperText: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onInputChange(e) {
    const { value } = e.target;
    if (value !== '') {
      this.setState({
        title: value,
        helperText: '',
      });
    } else {
      this.setState({
        title: '',
        helperText: '',
      });
    }
  }

  onKeyUp(e) {
    const { keyCode } = e;
    const { title } = this.state;
    const { addTodo, closeDialog } = this.props;
    if (keyCode === 13 && title !== '') {
      addTodo(title);
      closeDialog();
      this.setState({
        title: '',
        helperText: '',
      });
    } else if (keyCode === 13 && title === '') {
      this.setState({ helperText: 'Todo cannot be blank' });
    }
    if (keyCode === 27) {
      this.setState({
        title: '',
      });
    }
  }

  render() {
    const { helperText, title } = this.state;
    return (
      <AddTodoInput
        title={title}
        onInputChange={this.onInputChange}
        onKeyUp={this.onKeyUp}
        helperText={helperText}
      />
    );
  }
}
AddTodoInputContainer.propTypes = {
  addTodo: PropTypes.func,
  closeDialog: PropTypes.func,
};
AddTodoInputContainer.defaultProps = {
  addTodo: noop,
  closeDialog: noop,
};

const mapDisptachToProps = dispatch => ({
  addTodo: title => dispatch(actions.addTodo(title)),
  closeDialog: () => dispatch(actions.closeDialog()),
});

export default connect(null, mapDisptachToProps)(AddTodoInputContainer);
