/*eslint-disable*/
import React from 'react';
import styles from './Tickets-list.module.scss'
import TicketsItem from '../Tickets-item/Tickets-item'

const TicketsList = () => {
    const elements = [
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
        {
            id: 5,
        },
    ]
    const ticketsList = elements.map((item) => <TicketsItem  key={item.id}/>)
    return <div className={styles['tickets-list']}>{ticketsList}</div>
}

export default TicketsList;
