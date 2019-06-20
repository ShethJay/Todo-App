import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import GoogleLoader from '../GoogleLoader';
import { noop } from '../../../utils';
import InfiniteSensor from '../InfiniteSensor';

const InfiniteScroll = ({
  items, loading, noDataMessage, children, checkLoaderVisibility, getNextPage,
}) => (
  <div className="infinite-scroll-wrapper">
    {
      items.length === 0 && !loading
        ? <div className="no-data">{noDataMessage}</div>
        : (
          <Fragment>
            {/* <div className="infinite-scroll-header">{header}</div> */}
            {children}
          </Fragment>
        )
    }
    {
         checkLoaderVisibility() && loading && items.length > 0
        && (
          <div className="infinite-loader">
            <GoogleLoader height={25} width={25} />
          </div>
        )
      }
    {
        items.length > 0 && checkLoaderVisibility() && !loading
        && (
          <InfiniteSensor
            className="infinite-sensor"
            onReachedBottom={() => getNextPage()}
          />
        )
      }
    {
        checkLoaderVisibility() && !loading
        && (
          <div className="btn-load-more-container">
            <Button
              className="btn-load-more"
              onClick={() => getNextPage()}
            >
              Load More
            </Button>
          </div>
        )
      }
  </div>
);
InfiniteScroll.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element), PropTypes.element,
  ]).isRequired,
  items: PropTypes.instanceOf(Array),
  loading: PropTypes.bool,
  noDataMessage: PropTypes.string,
  checkLoaderVisibility: PropTypes.func,
  getNextPage: PropTypes.func,
};

InfiniteScroll.defaultProps = {
  items: [],
  loading: false,
  noDataMessage: '',
  checkLoaderVisibility: noop,
  getNextPage: noop,
};
export default InfiniteScroll;
