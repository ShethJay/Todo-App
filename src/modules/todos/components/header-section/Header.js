import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../redux/actions';
import { noop } from '../../../../utils';

class Header extends Component {
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
      <AppBar position="static" color="default" className="tabs-menu">
        <Tabs
          value={selectedTab}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab className="tab-title" label="To-do" />
          <Tab className="tab-title" label="Done" />
        </Tabs>
      </AppBar>
    );
  }
}
Header.propTypes = {
  onTabClick: PropTypes.func,
  selectedTab: PropTypes.number,
};
Header.defaultProps = {
  onTabClick: noop,
  selectedTab: 0,
};
const mapStateToPros = state => ({
  selectedTab: state.todo.selectedTab,
});
const mapDisptachToProps = dispatch => ({
  onTabClick: tabValue => dispatch(actions.onTabClick(tabValue)),
});

export default connect(mapStateToPros, mapDisptachToProps)(Header);
