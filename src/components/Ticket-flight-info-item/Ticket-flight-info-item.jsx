import React from 'react';
import PropTypes from 'prop-types';
import styles from './Ticket-flight-info-item.module.scss';

const TicketFlightInfoItem = ({ origin, destination, date, duration, stops }) => {
  const formattedDate = new Date(date);
  const seconds = formattedDate.getTime();
  const allSeconds = seconds + duration * 6 * 1000;
  const timeDeparture = new Date(allSeconds).toISOString().substring(11, 16);
  const timeArrive = date.substring(11, 16);
  const minutes = Math.floor(duration % 60).toString();
  const hours = Math.floor((duration / 60) % 60).toString();
  const durationFlight = `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;

  let transfers;
  if (stops.length === 0) {
    transfers = 'БЕЗ ПЕРЕСАДОК';
  }
  if (stops.length === 1) {
    transfers = '1 ПЕРЕСАДКА';
  }
  if (stops.length === 2) {
    transfers = '2 ПЕРЕСАДКИ';
  }
  if (stops.length === 3) {
    transfers = '3 ПЕРЕСАДКИ';
  }

  return (
    <div className={styles['ticket-flight-content']}>
      <div className={styles['ticket-flight-info__block-1']}>
        <p className={styles['ticket-flight-info__label']}>
          {origin} - {destination}
        </p>
        <p className={styles['ticket-flight-info__value']}>
          {timeArrive} - {timeDeparture}
        </p>
      </div>
      <div className={styles['ticket-flight-info__block-2']}>
        <p className={styles['ticket-flight-info__label']}>В пути</p>
        <p className={styles['ticket-flight-info__value']}>{durationFlight}</p>
      </div>
      <div className={styles['ticket-flight-info__block-3']}>
        <p className={styles['ticket-flight-info__label']}>{transfers}</p>
        <p className={styles['ticket-flight-info__value']}>{stops.join()}</p>
      </div>
    </div>
  );
};

TicketFlightInfoItem.propTypes = {
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  stops: PropTypes.instanceOf(Array).isRequired,
};

export default TicketFlightInfoItem;
