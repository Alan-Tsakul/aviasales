/*eslint-disable*/
import React from 'react';
import styles from './Ticket-flight-info-item.module.scss';

const TicketFlightInfoItem = ({label, value}) => {
  return (
    <div className={styles['ticket-flight-info__block']}>
      <p className={styles['ticket-flight-info__label']}>{label}</p>
      <p className={styles['ticket-flight-info__value']}>{value}</p>
    </div>
  );
};

export default TicketFlightInfoItem;
