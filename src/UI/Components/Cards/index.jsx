import { useEffect, useState } from "react";
import "./styles.css";

function Cards({ taskName, taskColor, taskHour, isCompleted }) {
  const [classContainer,setClassContainer ] = useState()

  function handleColor() {
    if (taskColor === "Red") {
      setClassContainer("cardContainerRed")
    } else if (taskColor === "Green") {
        setClassContainer("cardContainerGreen")
    } else if (taskColor === "Yellow") {
        setClassContainer("cardContainerYellow")
    }
  }

  useEffect(() => {
    handleColor();
  });
  return (
    <div className={classContainer}>
      <p>{taskName}</p>
      <p>{taskHour}</p>
    </div>
  );
}

export default Cards;
