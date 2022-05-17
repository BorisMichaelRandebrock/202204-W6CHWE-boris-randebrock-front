import axios from "axios";
import { loadRobotsActionCreator } from "../features/robotsSlice";

export const loadRobotsThunk = () => (dispatch) => {
  const url = "http://localhost:5001/robots/";
  const { data } = axios.get(url);
  dispatch(loadRobotsActionCreator(data.robots));
};
