import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import * as actions from '../../redux/actions';
import { noop } from '../../../../utils';

class HeaderContainer extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, newValue) {
    const { onTabClick } = this.props;
    onTabClick(newValue);
  }

  render() {
    const { selectedTab } = this.props;
    return (
      <Header handleChange={this.handleChange} selectedTab={selectedTab} />
    );
  }
}
HeaderContainer.propTypes = {
  onTabClick: PropTypes.func,
  selectedTab: PropTypes.number,
};
HeaderContainer.defaultProps = {
  onTabClick: noop,
  selectedTab: 0,
};
const mapStateToPros = state => ({
  selectedTab: state.todos.selectedTab,
});
const mapDisptachToProps = dispatch => ({
  onTabClick: tabValue => dispatch(actions.onTabClick(tabValue)),
});
export default connect(mapStateToPros, mapDisptachToProps)(HeaderContainer);
