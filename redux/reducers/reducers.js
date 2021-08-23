import { combineReducers } from "redux";
import { allRoomsReducers, roomDetailsReducers } from "./roomReducers";

const reducers = combineReducers({
  allRooms: allRoomsReducers,
  room: roomDetailsReducers,
});

export default reducers;
