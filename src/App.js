import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { loadRobotsThunk } from "./redux/thunks/robotsThunks";

function App() {
  const dispatch = useDispatch;
  useEffect(() => {
    dispatch(loadRobotsThunk);
  });
  return <div className="container"></div>;
}

export default App;
