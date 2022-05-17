const Robot = (image, speed, resistance, creationDate) => {
  return (
    <li>
      <h2>RobotName</h2>
      <img src={image} alt="robot" />
      <p>
        <span>Speed: {speed}</span>
      </p>
      <p>
        <span>Resistance: {resistance}</span>
      </p>
      <p>
        <span>CreationDate: {creationDate}</span>
      </p>
    </li>
  );
};

export default Robot;
