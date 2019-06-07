import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import { noop } from '../../../../utils';

const Header = ({ selectedTab, handleChange }) => (
  <AppBar position="static" color="default" className="tabs-menu">
    <Tabs
      value={selectedTab}
      onChange={event => handleChange(event)}
      indicatorColor="primary"
      textColor="primary"
      variant="fullWidth"
    >
      <Tab className="tab-title" label="To-do" />
      <Tab className="tab-title" label="Done" />
    </Tabs>
  </AppBar>
);
Header.propTypes = {
  handleChange: PropTypes.func,
  selectedTab: PropTypes.number,
};
Header.defaultProps = {
  handleChange: noop,
  selectedTab: 0,
};
export default Header;
