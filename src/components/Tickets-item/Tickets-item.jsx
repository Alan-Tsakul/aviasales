/*eslint-disable*/
import React from 'react';
import TicketFlightInfoList from '../Ticket-flight-info-list/Ticket-flight-info-list';
import styles from './Tickets-item.module.scss';


const TicketsItem = () => {
  return (
    <div className={styles['ticket__card']}>
      <div className={styles['ticket__header']}>
        <div className={styles['ticket__price']}>
          <span className={styles.price}>13 400 P</span>
        </div>
        <div className={styles['ticket__logo']}>
          <img className={'ticket-logo__img'} src="/images/logo.svg" alt="logo"></img>
        </div>
      </div>
      <div className={styles['ticket__body']}>
          <TicketFlightInfoList />
      </div>
    </div>
  );
};

export default TicketsItem;
