import Api from '../services/load-tickets-service'; 

const api = new Api();

const getAllTicketsAction = (payload) => ({ type: 'Загрузить билеты', payload });

const getSearchIdAction = (payload) => ({ type: 'Загрузить ID', payload });

const toggleIsFetching = (isFetching) => ({ type: 'Загрузка данных', isFetching });

const setFetchError = (error) => ({ type: 'Ошибка загрузки билетов', payload: error });

export const getSearchId = () => async (dispatch) => {
  const json = await api.getSearchId();
  return dispatch(getSearchIdAction(json));
};

export const getAllTickets = (searchId) => (dispatch) => {
  api
    .getAllTickets(searchId)
    .then((json) => {
      dispatch(getAllTicketsAction(json));
      dispatch(toggleIsFetching(true));
    })
    .catch(() => {
      dispatch(setFetchError(false));
      dispatch(toggleIsFetching(false));
    })
    .finally(() => {
      api.getAllTickets(searchId).then((json) => {
        dispatch(getAllTicketsAction(json));
      });
    });
};
