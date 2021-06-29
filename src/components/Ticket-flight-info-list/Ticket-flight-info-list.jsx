/*eslint-disable*/
import React from 'react';
import TicketFlightInfoItem from '../Ticket-flight-info-item/Ticket-flight-info-item';
import styles from './Ticket-flight-info-list.module.scss';

const TicketFlightInfoList = () => {
  const twoTransferElements = [
    {
      label: 'Mow - Hkt',
      value: '10:45 - 08:00',
      id: 0,
    },
    {
      label: 'В пути',
      value: '21ч 15м',
      id: 1,
    },
    {
      label: '2 пересадки',
      value: 'HKG, JNB',
      id: 2,
    },
  ];

  const oneTransferElements = [
    {
      label: 'Mow - Hkt',
      value: '11:20 - 00:50',
      id: 3,
    },
    {
      label: 'В пути',
      value: '13ч 30м',
      id: 4,
    },
    {
      label: '1 пересадкa',
      value: 'HKG',
      id: 5,
    },
  ];

  const elementsOfTwoTransfer = twoTransferElements.map((item) => (
    <TicketFlightInfoItem label={item.label} value={item.value} key={item.id} />
  ));

  const elementsOfOneTransfer = oneTransferElements.map((item) => (
    <TicketFlightInfoItem label={item.label} value={item.value} key={item.id} />
  ));

  return (
    <>
      <div className={styles['ticket-flight-info']}>{elementsOfTwoTransfer}</div>
      <div className={styles['ticket-flight-info']}>{elementsOfOneTransfer}</div>
    </>
  );
};

export default TicketFlightInfoList;
