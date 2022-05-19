// import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Robot from "../Robot/Robot";

const RobotsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledRobot = styled.div`
  li {
    text-align: center;
  }
  h2 {
    justify-content: center;
  }
  span {
    justify-content: center;
  }
`;

const RobotList = () => {
  const listOfRobots = useSelector((state) => state.robots);
  return (
    <ul>
      <RobotsContainer>
        {listOfRobots.map((robot, index) => {
          return (
            <li key={index}>
              <StyledRobot>
                <Robot
                  image={robot.img}
                  speed={robot.speed}
                  resistance={robot.resistance}
                  creationDate={robot.CreationDate}
                />
              </StyledRobot>
            </li>
          );
        })}
      </RobotsContainer>
    </ul>
  );
};
export default RobotList;
