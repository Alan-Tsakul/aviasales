import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import * as actions from '../../actions/filter-actions';
import styles from './Filters-list.module.scss';

const FiltersList = ({ checked, ALL_TRANSFERS, NO_TRANSFERS, ONE_TRANSFER, TWO_TRANSFERS, THREE_TRANSFERS }) => {
  const copy = Object.values(checked.filter, (checked.filter.all = undefined));//eslint-disable-line
  const filtered = copy.filter((elem) => elem === true);
  if (filtered.length >= 4) {
    checked.filter.all = true;//eslint-disable-line
  } else if (filtered.length < 4) {
    checked.filter.all = false;//eslint-disable-line
  }

  return (
    <div className={styles['filters-list__controls']}>
      <div className={styles['filters-list__item']}>
        <label className={styles['filters-list__text']}>
          <input
            type="checkbox"
            className={styles.myinput}
            onChange={ALL_TRANSFERS}
            checked={checked.filter.all}
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
            checked={checked.filter.noOne}
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
            checked={checked.filter.onlyOne}
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
            checked={checked.filter.onlyTwo}
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
            checked={checked.filter.onlyThree}
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


function mapStateToProps (state) {
  return {
    checked: state,
  };
};

export default connect(mapStateToProps, actions)(FiltersList);
