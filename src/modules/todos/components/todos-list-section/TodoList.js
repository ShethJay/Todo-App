// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableRow from '@material-ui/core/TableRow';
// import Checkbox from '@material-ui/core/Checkbox';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';
// import PropTypes from 'prop-types';
// import * as actions from '../../redux/actions';
// import { noop } from '../../../../utils/index';

// class TodoList extends Component {
//   constructor(props) {
//     super(props);
//     this.onDeleteTodo = this.onDeleteTodo.bind(this);
//     this.onCheckTodo = this.onCheckTodo.bind(this);
//     this.onUpdateTodo = this.onUpdateTodo.bind(this);
//   }

//   onDeleteTodo(id) {
//     const { removeTodo } = this.props;
//     removeTodo(id);
//     // this.onUpdateTodo(id, { isRemoved: true });
//   }

//   onCheckTodo(id, e) {
//     // this.props.checkTodo(id , e.target.checked)
//     this.onUpdateTodo(id, { isDone: e.target.checked });
//   }

//   onUpdateTodo(id, todo) {
//     const { updateTodo } = this.props;
//     updateTodo(id, todo);
//   }

//   render() {
//     const { todo } = this.props;
//     return (
//       <div className="list">
//         <Table size="small">
//           <TableBody>
//             {todo.length > 0
//               && todo
//                 .filter(todos => !todos.isRemoved)
//                 .filter(todos => !todos.isDone)
//                 .map(todos => (
//                   <TableRow key={todos.id} className="todo-row">
//                     <TableCell className="noBorder checkBox" size="small">
//                       <Checkbox
//                         onChange={e => this.onCheckTodo(todos.id, e)}
//                         checked={todos.isDone}
//                         value="checkedB"
//                         color="primary"
//                         fontSize="small"
//                       />
//                     </TableCell>
//                     <TableCell className="noBorder todo-title" size="small" component="td" scope="row">
//                       <Typography
//                         variant="body1"
//                         word-wrap="break-word"
//                       >
//                         {todos.title}
//                       </Typography>
//                     </TableCell>
//                     <TableCell className="noBorder del-button" size="small">
//                       <IconButton
//                         aria-label="Delete"
//                         onClick={() => this.onDeleteTodo(todos.id)}
//                       >
//                         <DeleteIcon
//                           variant="contained"
//                         />
//                       </IconButton>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//           </TableBody>
//         </Table>
//       </div>
//     );
//   }
// }
// TodoList.propTypes = {
//   updateTodo: PropTypes.func,
//   removeTodo: PropTypes.func,
//   todo: PropTypes.arrayOf(PropTypes.object),
// };
// TodoList.defaultProps = {
//   updateTodo: noop,
//   removeTodo: noop,
//   todo: [],
// };
// const mapStateToPros = state => ({
//   todo: state.todo.todo,
// });
// const mapDisptachToProps = dispatch => ({
//   removeTodo: id => dispatch(actions.removeTodo(id)),
//   checkTodo: (id, isChecked) => dispatch(actions.checkTodo(id, isChecked)),
//   updateTodo: (id, todo) => dispatch(actions.updateTodo(id, todo)),
// });
// export default connect(mapStateToPros, mapDisptachToProps)(TodoList);
