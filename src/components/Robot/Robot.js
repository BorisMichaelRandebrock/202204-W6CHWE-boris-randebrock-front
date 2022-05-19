import styled from "styled-components";

export const StyledRobot = styled.div`
  h2 {
    justify-content: center;
  }
  span {
    justify-content: center;
  }
  li {
    display: flex;
    justify-content: center;
  }
`;

const Robot = ({ image, speed, resistance, creationDate }) => {
  return (
    <li>
      <StyledRobot>
        <h2>RobotName</h2>
        <img src={image} alt="robot-name" />
        <p>
          <span>Speed: {speed}</span>
        </p>
        <p>
          <span>Resistance: {resistance}</span>
        </p>
        <p>
          <span>CreationDate: {creationDate}</span>
        </p>
      </StyledRobot>
    </li>
  );
};

export default Robot;
