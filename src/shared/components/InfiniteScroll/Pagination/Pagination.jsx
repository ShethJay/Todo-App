import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import { noop } from '../../../../utils';

const Pagination = ({
  pageRange, totalPages, activePage, onChangeActivePage,
}) => (
  <div className="pagination">
    {
        totalPages > 1
        && (
        <Fragment>
          <Button
            type="button"
            disabled={activePage === 1}
            onClick={() => onChangeActivePage(1)}
          >
              First
          </Button>
          <Button
            type="button"
            disabled={activePage === 1}
            onClick={() => onChangeActivePage(activePage - 1)}
          >
              Previous
          </Button>
          {
        pageRange.map(page => (
          <Button
            key={page}
            type="button"
            className={`pagination-button ${page === activePage ? 'active' : ''}`}
            onClick={() => onChangeActivePage(page)}
          >
            {page}
          </Button>
        ))
            }
          <Button
            type="button"
            disabled={activePage === totalPages}
            onClick={() => onChangeActivePage(activePage + 1)}
          >
              Next
          </Button>
          <Button
            type="button"
            disabled={activePage === totalPages}
            onClick={() => onChangeActivePage(totalPages)}
          >
              Last
          </Button>
        </Fragment>
        )
    }
  </div>
);

Pagination.propTypes = {
  pageRange: PropTypes.instanceOf(Array),
  totalPages: PropTypes.number,
  activePage: PropTypes.number,
  onChangeActivePage: PropTypes.func,
};

Pagination.defaultProps = {
  pageRange: [],
  totalPages: 0,
  activePage: 1,
  onChangeActivePage: noop,
};

export default Pagination;
