const loadingState = {
  searchId: '',
  tickets: [],
  filteredTickets: [],
  isFetching: true,
  isFetchError: false,
};

export default function loadTicketsReducer(state = loadingState, action) {
  switch (action.type) {
    case 'Загрузить ID':
      return {
        ...state,
        searchId: action.payload.searchId,
      };

    case 'Загрузить билеты':
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload.tickets]
      };

    case 'Загрузка данных':
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case 'Обработка ошибки':
      return {
        ...state,
        isFetchError: action.isFetchError,
      };

    default:
      return state;
  }
}
