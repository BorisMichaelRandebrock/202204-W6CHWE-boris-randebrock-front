// import { useState } from "react";
import { useSelector } from "react-redux";
import Robot from "../Robot/Robot";

const RobotList = () => {
  const listOfRobots = useSelector((state) => state.robots);
  return (
    <ul>
      {listOfRobots.map((robot, index) => {
        return (
          <li key={index}>
            <Robot
              image={robot.img}
              speed={robot.speed}
              rsistance={robot.resistance}
              creationDate={robot.CreationDate}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default RobotList;
