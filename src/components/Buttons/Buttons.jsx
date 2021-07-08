import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import classNames from 'classnames/bind';
import * as actions from '../../actions/sort-ticket-actions';
import styles from './Buttons.module.scss';


const Buttons = ({ sortedTickets, THE_CHEAPEST, THE_FASTEST }) => {
  const cx = classNames.bind(styles);
  const className1 = cx(['filter-buttons'], ['filter-buttons__active']);
  const className2 = cx(['filter-buttons']);

  return (
    <>
      <button
        type="button"
        className={sortedTickets.sort.isCheapest === true ? className1 : className2}
        onClick={THE_CHEAPEST}
      >
        Самый дешевый
      </button>
      <button
        type="button"
        className={sortedTickets.sort.isFastest === true ? className1 : className2}
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

const mapStateToProps = (state) => {// eslint-disable-line
  return {
    sortedTickets: state,
  };
};

export default connect(mapStateToProps, actions)(Buttons);
