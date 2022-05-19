import axios from "axios";
import { loadRobotsActionCreator } from "../features/robotsSlice";

export const loadRobotsThunk = () => async (dispatch) => {
  const { data } = await axios.get(process.env.REACT_APP_API_URL);
  dispatch(loadRobotsActionCreator(data.robots));
};
