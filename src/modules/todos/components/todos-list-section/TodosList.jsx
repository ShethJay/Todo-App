import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import BlockUI from 'react-block-ui';

import { noop } from '../../../../utils/index';
import GoogleLoader from '../../../../shared/components/GoogleLoader';
import InfiniteScrollContainer from '../../../../shared/components/InfiniteScroll/InfiniteScrollContainer';

const TodosList = ({
  todos,
  onCheckTodo,
  onDeleteTodo,
  loading,
  pageNo,
  pageSize,
  total,
  flushTodosList,
  getTodosListByPage,
  getTodosList,

}) => (
  <BlockUI
    tag="div"
    blocking={loading && todos.length === 0}
    loader={<GoogleLoader height={50} width={50} />}
    className="todos-list-block-ui"
  >
    <div className="todos-list">
      <InfiniteScrollContainer
        items={todos}
        flushItems={flushTodosList}
        getItems={getTodosListByPage}
        getItemsTotal={getTodosList}
        loading={loading}
        noDataMessage="No data available"
        pageNo={pageNo}
        pageSize={pageSize}
        total={total}
      >
        <Table size="small">
          <TableBody>
            {todos.length > 0
            && todos
              .map(todo => (
                <TableRow key={todo.id} className="todos-row">
                  <TableCell className="remove-padding todos-done-checkbox">
                    <Checkbox
                      onChange={e => onCheckTodo(e, todo.id)}
                      checked={todo.isDone}
                      value="checked"
                      color="primary"
                      fontSize="small"
                    />
                  </TableCell>
                  <TableCell className="remove-padding todos-title-input">
                    <Typography
                      variant="body1"
                      word-wrap="break-word"
                    >
                      {todo.title}
                    </Typography>
                  </TableCell>
                  <TableCell className="remove-padding todos-delete-button">
                    <IconButton
                      aria-label="Delete"
                      onClick={() => onDeleteTodo(todo.id)}
                    >
                      <DeleteIcon
                        variant="contained"
                      />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </InfiniteScrollContainer>
    </div>
  </BlockUI>
);

TodosList.propTypes = {
  onCheckTodo: PropTypes.func,
  onDeleteTodo: PropTypes.func,
  todos: PropTypes.instanceOf(Object),
  loading: PropTypes.bool,
  pageNo: PropTypes.number,
  pageSize: PropTypes.number,
  total: PropTypes.number,
  flushTodosList: PropTypes.func,
  getTodosListByPage: PropTypes.func,
  getTodosList: PropTypes.func,
};

TodosList.defaultProps = {
  onCheckTodo: noop,
  onDeleteTodo: noop,
  todos: {},
  loading: false,
  pageNo: 1,
  pageSize: 1,
  total: 0,
  flushTodosList: noop,
  getTodosListByPage: noop,
  getTodosList: noop,
};

export default TodosList;
