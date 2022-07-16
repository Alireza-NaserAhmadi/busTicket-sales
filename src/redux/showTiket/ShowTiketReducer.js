import { TIKET } from "./ShowTiketAction";

const initialState = {
  tiket: [],
};

const showTiketReducer = (state = initialState, action) => {
  switch (action.type) {
    case TIKET:
      return {
        ...state,
        tiket: action.payload,
      };
    default:
      return state;
  }
};

export default showTiketReducer;
