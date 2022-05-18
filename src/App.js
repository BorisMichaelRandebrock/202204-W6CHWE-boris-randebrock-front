import { useEffect } from "react";
import { useDispatch } from "react-redux";
import RobotList from "./components/RobotList/RobotList";
import "./App.css";
import { loadRobotsThunk } from "./redux/thunks/robotsThunks";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRobotsThunk);
  }, [dispatch]);
  return (
    <div className="container">
      <h1>Robots (or not.... ?)</h1>
      <p>🤖 👾 🎃 👹 👽 🤖</p>
      <p>🤡 👻 ☠️ 🙀 😹 🤡</p>
      <p>🥶 💩 🫣 🫥 👁 🤖</p>
      <div className="container">
        <RobotList />
      </div>
    </div>
  );
}

export default App;
