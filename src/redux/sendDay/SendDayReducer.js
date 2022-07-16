import { SEND_DAY } from "./SendDayAction";

const initialState = {
  filt: {},
};

const sendDayReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_DAY:
      return {
        ...state,
        filt: action.payload,
      };
    default:
      return state;
  }
};

export default sendDayReducer;
