import React from 'react';
import styles from './App.module.scss';
import FiltersList from '../Filters-list/Filters-list';
import Buttons from '../Buttons/Buttons';
import TicketsList from '../Tickets-list/Tickets-list';

const App = () => (
  <div className={styles.app}>
    <div className={styles.logo}>
      <img src="/images/logo-brand.svg" alt="logo"/>
    </div>
    <div className={styles.app__container}>
      <div className={styles['filters-list']}>
        <h3 className={styles['filters-list__title']}>Количество пересадок</h3>
        <FiltersList />
      </div>
      <div className={styles.app__content}>
        <Buttons />
        <TicketsList />
      </div>
    </div>
  </div>
);

export default App;
