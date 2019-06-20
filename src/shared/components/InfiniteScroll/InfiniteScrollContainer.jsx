import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { noop } from '../../../utils';
import InfiniteScroll from './InfiniteScroll';


class InfiniteScrollContainer extends Component {
  constructor(props) {
    super(props);
    this.onChangeActivePage = this.onChangeActivePage.bind(this);
    this.getNextPage = this.getNextPage.bind(this);
    this.checkLoaderVisibility = this.checkLoaderVisibility.bind(this);
  }

  componentDidMount() {
    const {
      getItemsTotal, flushItems, getItems,
    } = this.props;
    flushItems();
    localStorage.clear();
    getItemsTotal().then(() => {
      getItems(1);
    });
  }

  onChangeActivePage(pageNo) {
    const { getItems } = this.props;
    getItems(pageNo);
  }

  getNextPage() {
    const { getItems, pageNo } = this.props;
    getItems(pageNo + 1);
  }

  checkLoaderVisibility() {
    const { pageNo, total, pageSize } = this.props;
    return pageNo === 0
      ? true
      : (total / (pageNo * pageSize)) > 1;
  }

  render() {
    const {
      children,
      loading,
      items,
      noDataMessage,
      pageNo,
      pageSize,
      total,
    } = this.props;
    return (
      <InfiniteScroll
        onChangeActivePage={this.onChangeActivePage}
        getNextPage={this.getNextPage}
        checkLoaderVisibility={this.checkLoaderVisibility}
        items={items}
        loading={loading}
        noDataMessage={noDataMessage}
        pageNo={pageNo}
        pageSize={pageSize}
        total={total}
      >
        {children}
      </InfiniteScroll>
    );
  }
}
InfiniteScrollContainer.propTypes = {
  getItems: PropTypes.func,
  pageNo: PropTypes.number,
  total: PropTypes.number,
  pageSize: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element), PropTypes.element,
  ]).isRequired,
  items: PropTypes.instanceOf(Array),
  loading: PropTypes.bool,
  noDataMessage: PropTypes.string,
  getItemsTotal: PropTypes.func,
  flushItems: PropTypes.func,

};

InfiniteScrollContainer.defaultProps = {
  getItems: noop,
  pageNo: 1,
  total: 0,
  pageSize: 10,
  items: [],
  loading: false,
  noDataMessage: '',
  getItemsTotal: noop,
  flushItems: noop,

};

export default InfiniteScrollContainer;
