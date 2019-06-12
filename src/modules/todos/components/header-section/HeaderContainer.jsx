import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from './Header';
import * as actions from '../../redux/actions';
import { noop } from '../../../../utils';

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, newValue) {
    const { changeSelectedTab } = this.props;
    changeSelectedTab(newValue);
  }

  render() {
    const { selectedTab } = this.props;
    return (
      <Header handleChange={this.handleChange} selectedTab={selectedTab} />
    );
  }
}

HeaderContainer.propTypes = {
  changeSelectedTab: PropTypes.func,
  selectedTab: PropTypes.number,
};

HeaderContainer.defaultProps = {
  changeSelectedTab: noop,
  selectedTab: 0,
};

const mapStateToPros = state => ({
  selectedTab: state.todo.selectedTab,
});

const mapDisptachToProps = dispatch => ({
  changeSelectedTab: tabValue => dispatch(actions.changeSelectedTab(tabValue)),
});

export default connect(mapStateToPros, mapDisptachToProps)(HeaderContainer);
