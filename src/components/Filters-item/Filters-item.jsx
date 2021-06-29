/*eslint-disable*/
import React from 'react';
import styles from './Filters-item.module.scss';

const FiltersItem = ({ label }) => {
  return (
    <div className={styles['filters-list__item']}>
      <label className={styles['filters-list__label']}>
        <input type="checkbox" className={styles.myinput} id="checkbox11" name="happy" value="yes"/>
        <span className={styles['filters-list__text']}>{label}</span>
      </label>
    </div>
  );
};

export default FiltersItem;
