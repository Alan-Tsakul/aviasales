import {React, useEffect }from 'react';
import PropTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { Spin, Alert, Result } from 'antd';
import * as actions from '../../actions/load-tickets-action';
import TicketsItem from '../Tickets-item/Tickets-item';
import styles from './Tickets-list.module.scss';
import 'antd/dist/antd.css';

const TicketsList = ({
  loadedTickets,
  filteredTickets,
  getAllTickets,
  getSearchId,
  searchId,
  noOne,
  onlyOne,
  onlyTwo,
  onlyThree,
  isCheapest,
  isFastest,
  isFetching,
  isFetchError,
}) => {
  
  useEffect(() => {
    getSearchId();
  }, []);//eslint-disable-line

  searchId.replace(/"/g, '');
  useEffect(() => {
    getAllTickets(searchId);
  });

  noOne === true ? (filteredTickets = loadedTickets.filter(//eslint-disable-line
        (ticket) => ticket.segments[0].stops.length === 0 && ticket.segments[1].stops.length === 0
      ))
    : filteredTickets;
  onlyOne === true ? (filteredTickets = loadedTickets.filter(//eslint-disable-line
        (ticket) => ticket.segments[0].stops.length === 1 && ticket.segments[1].stops.length === 1
      ))
    : filteredTickets;
  onlyTwo === true ? (filteredTickets = loadedTickets.filter(//eslint-disable-line
        (ticket) => ticket.segments[0].stops.length === 2 && ticket.segments[1].stops.length === 2
      ))
    : filteredTickets;
  onlyThree === true? (filteredTickets = loadedTickets.filter(//eslint-disable-line
        (ticket) => ticket.segments[0].stops.length === 3 && ticket.segments[1].stops.length === 3
      ))
    : filteredTickets;

  isCheapest === true ? filteredTickets.sort(function (a, b) {//eslint-disable-line
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        return 0;
      })
    : filteredTickets;

  isFastest === true  ? filteredTickets.sort(function (a, b) {//eslint-disable-line
        if (a.segments[0].duration + a.segments[1].duration > b.segments[0].duration + b.segments[1].duration) {
          return 1;
        }
        if (a.segments[0].duration + a.segments[1].duration < b.segments[0].duration + b.segments[1].duration) {
          return -1;
        }
        return 0;
      })
    : filteredTickets;

    function onClickButton() {}
  
  const spinner = isFetching ? (
    <Spin tip="Loading...">
      <Alert />
    </Spin>
  ) : null;

  const error = isFetchError ? <Result subTitle="Sorry, something went wrong." /> : null;

  const noResults =
    filteredTickets.length === 0 && !spinner ? (
      <Result title="Рейсов, подходящих под заданные фильтры, не найдено" />
    ) : null;

  const loadButton =
    !spinner && !noResults ? (
      <button type="button" className={styles['load-button']} onClick={() => onClickButton()}>
        Загрузить еще 5 билетов!
      </button>
    ) : null;
  const elements = filteredTickets.map((item, index) => (index < 5 ? <TicketsItem Ticket={item} key={uuidv4()} /> : null));

  const content = (
    <>
      <div className={styles['tickets-list']}>
        {elements}
        {loadButton}
      </div>
    </>
  );

  return (
    <>
      {noResults}
      {spinner}
      {error}
      {content}
    </>
  );
};

function mapStateToProps(state) {
  return {
    loadedTickets: state.load.tickets,
    filteredTickets: state.load.filteredTickets,
    searchId: state.load.searchId,
    noOne: state.filter.noOne,
    onlyOne: state.filter.onlyOne,
    onlyTwo: state.filter.onlyTwo,
    onlyThree: state.filter.onlyThree,
    isCheapest: state.sort.isCheapest,
    isFastest: state.sort.isFastest,
    isFetching: state.load.isFetching,
    isFetchError: state.load.isFetchError,
  };
};

TicketsList.propTypes = {
  loadedTickets: PropTypes.objectOf(PropTypes.object).isRequired,
  filteredTickets:  PropTypes.objectOf(PropTypes.object).isRequired,
  searchId: PropTypes.string.isRequired,
  noOne: PropTypes.bool.isRequired,
  onlyOne: PropTypes.bool.isRequired,
  onlyTwo: PropTypes.bool.isRequired,
  onlyThree: PropTypes.bool.isRequired,
  isCheapest: PropTypes.bool.isRequired,
  isFastest: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isFetchError: PropTypes.bool.isRequired,
  getAllTickets: PropTypes.func.isRequired,
  getSearchId: PropTypes.func.isRequired
};

export default connect(mapStateToProps, actions)(TicketsList);
