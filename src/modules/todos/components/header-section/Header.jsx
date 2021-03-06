import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { noop } from '../../../../utils';

const Header = ({ selectedTab, handleChange }) => (
  <AppBar position="static" color="default" className="todo-header">
    <Tabs
      value={selectedTab}
      onChange={handleChange}
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
