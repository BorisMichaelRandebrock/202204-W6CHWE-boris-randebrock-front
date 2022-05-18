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
      <p className="titles">toby poo boo foo zoby sonny</p>
      <p>🤡 👻 ☠️ 🙀 😹 🤡</p>
      <p className="titles">wiru roby niu tab byz som</p>
      <p>🥶 💩 🫣 🫥 👁 🤖</p>
      <p className="titles">fili poo cuby tara bzzz r2d2</p>
      <div className="container">
        <RobotList />
      </div>
    </div>
  );
}

export default App;
