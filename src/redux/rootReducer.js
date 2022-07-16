import { combineReducers } from "redux";
import sentPhoneReducer from "./login/LoginReducer";
import cityReducer from "./givecity/GiveCityReducer";
import showTiketReducer from "./showTiket/ShowTiketReducer";
import sendDayReducer from "./sendDay/SendDayReducer";

const rootReducer = combineReducers({
  user: sentPhoneReducer,
  city: cityReducer,
  tiket: showTiketReducer,
  filt: sendDayReducer,
});

export default rootReducer;
