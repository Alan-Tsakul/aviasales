import React from 'react';
import PropTypes from 'prop-types';
import TicketFlightInfoList from '../Ticket-flight-info-list/Ticket-flight-info-list';
import styles from './Tickets-item.module.scss';

const TicketsItem = ({ Ticket }) => (
  <div className={styles.ticket__card}>
    <div className={styles.ticket__header}>
      <div className={styles.ticket__price}>
        <span className={styles.price}>{Ticket.price} Р</span>
      </div>
      <div className={styles.ticket__logo}>
        <img
          className={styles['ticket-logo__img']}
          src={`https://pics.avs.io/99/36/${Ticket.carrier}.png`}
          alt="logo"
        />
      </div>
    </div>
    <div className={styles.ticket__body}>
      <TicketFlightInfoList Ticket={Ticket} />
    </div>
  </div>
);

TicketsItem.propTypes = {
  Ticket: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default TicketsItem;
