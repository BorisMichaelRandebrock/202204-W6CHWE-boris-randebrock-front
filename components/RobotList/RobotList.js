import { useState } from "react";
import Robot from "../Robot/Robot";

const RobotList = () => {
  const listOfRobots = useState((state) => state.robots);
  return (
    <ul>
      {listOfRobots.map((robot, index) => {
        return (
          <li key={index}>
            <Robot robot={robot} />
          </li>
        );
      })}
    </ul>
  );
};
export default RobotList;
