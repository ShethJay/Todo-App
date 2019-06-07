import React from 'react';
import { connect } from 'react-redux';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import PropTypes from 'prop-types';
import * as actions from '../../redux/actions';
import { noop } from '../../../../utils';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      helperText: '',
      setOpen: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
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
    const { addTodo } = this.props;
    if (keyCode === 13 && title !== '') {
      addTodo(title);
      this.setState({
        title: '',
        helperText: '',
        setOpen: false,
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

  handleClickOpen() {
    this.setState({ setOpen: true });
  }

  handleClose() {
    this.setState({ setOpen: false });
  }

  render() {
    const { title, setOpen, helperText } = this.state;
    return (
      <div className="footer">
        <div className="add-todo-icon">
          <Fab className="" color="primary">
            <AddIcon onClick={this.handleClickOpen} />
          </Fab>
          <Dialog
            open={setOpen}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogContent className="todo-input-dialog">
              <TextField
                autoFocus
                id="name"
                label="Enter Todos"
                className="textField"
                margin="dense"
                value={title}
                onChange={this.onInputChange}
                onKeyUp={this.onKeyUp}
                fullWidth
                helperText={helperText}
                error={helperText.length !== 0}
              />
            </DialogContent>
          </Dialog>
        </div>
        <div>
          <hr className="hr-line" />
        </div>
      </div>
    );
  }
}
Footer.propTypes = {
  addTodo: PropTypes.func,
};
Footer.defaultProps = {
  addTodo: noop,
};
const mapStateToPros = state => ({
  todo: state.todo.todo,
});
const mapDisptachToProps = dispatch => ({
  addTodo: title => dispatch(actions.addTodo(title)),
});

export default connect(mapStateToPros, mapDisptachToProps)(Footer);
