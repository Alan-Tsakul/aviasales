/*eslint-disable*/
import React from 'react';
import styles from './Buttons.module.scss';

const Buttons = () => {
  return (
    <>
      <button type="button" className={styles['filter-buttons']}>
        Самый дешевый
      </button>
      <button type="button" className={styles['filter-buttons']}>
        Самый быстрый
      </button>
    </>
  );
};

export default Buttons;
