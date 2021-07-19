import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import * as actions from '../../actions/sort-ticket-actions';
import styles from './Buttons.module.scss';

const Buttons = ({ sortedTickets, THE_CHEAPEST, THE_FASTEST }) => {
  const cx = classNames.bind(styles);
  const activeBtn = cx(['filter-buttons'], ['filter-buttons__active']);
  const lightBtn = cx(['filter-buttons']);

  return (
    <>
      <button
        type="button"
        className={sortedTickets.sort.isCheapest === true ? activeBtn : lightBtn}
        onClick={THE_CHEAPEST}
      >
        Самый дешевый
      </button>
      <button
        type="button"
        className={sortedTickets.sort.isFastest === true ? activeBtn : lightBtn}
        onClick={THE_FASTEST}
      >
        Самый быстрый
      </button>
    </>
  );
};

Buttons.propTypes = {
  sortedTickets: PropTypes.objectOf(PropTypes.object),
  THE_CHEAPEST: PropTypes.func,
  THE_FASTEST: PropTypes.func,
};

Buttons.defaultProps = {
  sortedTickets: () => {},
  THE_FASTEST: () => {},
  THE_CHEAPEST: () => {},
};

function mapStateToProps(state) {
  return {
    sortedTickets: state,
  };
}

export default connect(mapStateToProps, actions)(Buttons);
