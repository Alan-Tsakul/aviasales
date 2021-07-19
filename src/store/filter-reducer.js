 const filterState = {
  all: true,
  noOne: true,
  onlyOne: true,
  onlyTwo: true,
  onlyThree: true,
};

const filterReducer = (state = filterState, action) => {//eslint-disable-line
  switch (action.type) {
    case 'Все':
      if (state.all === true) {
        for (const key in state) {//eslint-disable-line
          state[key] = false;//eslint-disable-line
        }
        return {
          ...state,
        };
      }

      if (state.all === false) {
        for (const key in state) {//eslint-disable-line
          state[key] = true;//eslint-disable-line
        }
        return {
          ...state,
        };
      }

      break;

    case 'Без пересадок':
      return {
        ...state,
        noOne: !state.noOne,
      };

    case '1 пересадка':
      return {
        ...state,
        onlyOne: !state.onlyOne,
      };

    case '2 пересадки':
      return {
        ...state,
        onlyTwo: !state.onlyTwo,
      };

    case '3 пересадки':
      return {
        ...state,
        onlyThree: !state.onlyThree,
      };

    default:
      return state;
  }
};

export default filterReducer;
