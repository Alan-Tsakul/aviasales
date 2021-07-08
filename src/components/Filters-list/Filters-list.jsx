import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import * as actions from '../../actions/filter-actions';
import styles from './Filters-list.module.scss';

const FiltersList = ({ checked, ALL_TRANSFERS, NO_TRANSFERS, ONE_TRANSFER, TWO_TRANSFERS, THREE_TRANSFERS }) => {
  const copy = Object.values(checked.filter, (checked.filter.checkboxid1 = undefined));//eslint-disable-line
  const filtered = copy.filter((elem) => elem === true);
  if (filtered.length >= 4) {
    checked.filter.checkboxid1 = true;//eslint-disable-line
  } else if (filtered.length < 4) {
    checked.filter.checkboxid1 = false;//eslint-disable-line
  }

  return (
    <div className={styles['filters-list__controls']}>
      <div className={styles['filters-list__item']}>
        <label className={styles['filters-list__text']}>
          <input
            type="checkbox"
            className={styles.myinput}
            onChange={ALL_TRANSFERS}
            checked={checked.filter.checkboxid1}
          />{' '}
          &nbsp; Все
        </label>
      </div>
      <div className={styles['filters-list__item']}>
        <label className={styles['filters-list__text']}>
          <input
            type="checkbox"
            className={styles.myinput}
            onChange={NO_TRANSFERS}
            checked={checked.filter.checkboxid2}
          />{' '}
          &nbsp; Без пересадок
        </label>
      </div>
      <div className={styles['filters-list__item']}>
        <label className={styles['filters-list__text']}>
          <input
            type="checkbox"
            className={styles.myinput}
            onChange={ONE_TRANSFER}
            checked={checked.filter.checkboxid3}
          />{' '}
          &nbsp; 1 пересадка
        </label>
      </div>
      <div className={styles['filters-list__item']}>
        <label className={styles['filters-list__text']}>
          <input
            type="checkbox"
            className={styles.myinput}
            onChange={TWO_TRANSFERS}
            checked={checked.filter.checkboxid4}
          />{' '}
          &nbsp; 2 пересадки
        </label>
      </div>
      <div className={styles['filters-list__item']}>
        <label className={styles['filters-list__text']}>
          <input
            type="checkbox"
            className={styles.myinput}
            onChange={THREE_TRANSFERS}
            checked={checked.filter.checkboxid5}
          />{' '}
          &nbsp; 3 пересадки
        </label>
      </div>
    </div>
  );
};

FiltersList.propTypes = {
  checked: PropTypes.objectOf(PropTypes.object),
  ALL_TRANSFERS: PropTypes.func,
  NO_TRANSFERS: PropTypes.func,
  ONE_TRANSFER: PropTypes.func,
  TWO_TRANSFERS: PropTypes.func,
  THREE_TRANSFERS: PropTypes.func,
};

FiltersList.defaultProps = {
  ALL_TRANSFERS: () => {},
  NO_TRANSFERS: () => {},
  ONE_TRANSFER: () => {},
  TWO_TRANSFERS: () => {},
  THREE_TRANSFERS: () => {},
  checked: () => {}
};


const mapStateToProps = (state) => {//eslint-disable-line
  return {
    checked: state,
  };
};

export default connect(mapStateToProps, actions)(FiltersList);
