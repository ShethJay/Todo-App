import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Pagination from './Pagination';
import { noop } from '../../../../utils';

class PaginationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.calculatePageRange = this.calculatePageRange.bind(this);
  }

  calculatePageRange() {
    const {
      activePage, pageSize, totalRecords, pageNeighbours,
    } = this.props;
    const totalPages = Math.ceil(totalRecords / pageSize);
    let startPage = activePage < pageNeighbours + 1 ? 1 : activePage - pageNeighbours;
    const endPage = totalPages < (pageNeighbours * 2) + startPage
      ? totalPages : (pageNeighbours * 2) + startPage;
    const diff = (startPage - endPage) + (pageNeighbours * 2);
    startPage -= (startPage - diff > 0 ? diff : 0);
    return new Array((endPage - startPage) + 1).fill().map((_, i) => i + startPage);
  }

  render() {
    const pageRange = this.calculatePageRange();
    const {
      activePage, onChangeActivePage, totalRecords, pageSize,
    } = this.props;
    return (
      <Pagination
        pageRange={pageRange}
        totalPages={Math.ceil(totalRecords / pageSize)}
        activePage={activePage}
        onChangeActivePage={onChangeActivePage}
      />
    );
  }
}

PaginationContainer.propTypes = {
  activePage: PropTypes.number,
  pageSize: PropTypes.number,
  totalRecords: PropTypes.number,
  pageNeighbours: PropTypes.number,
  onChangeActivePage: PropTypes.func,
};

PaginationContainer.defaultProps = {
  activePage: 1,
  pageSize: 10,
  totalRecords: 0,
  pageNeighbours: 1,
  onChangeActivePage: noop,
};

export default PaginationContainer;
