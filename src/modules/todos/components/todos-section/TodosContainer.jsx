import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Todos from './Todos';

const TodosContainer = ({ selectedTab }) => (<Todos selectedTab={selectedTab} />);

const mapStateToPros = state => ({
  selectedTab: state.todo.selectedTab,
});
TodosContainer.propTypes = {
  selectedTab: PropTypes.number,
};
TodosContainer.defaultProps = {
  selectedTab: 0,
};
export default connect(mapStateToPros, null)(TodosContainer);
