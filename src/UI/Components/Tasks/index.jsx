import React, { useState, useEffect } from "react";
import Cards from "../Cards";

function Tasks({ taskName }) {
  const [tasksList, setTasksList] = useState();

  const callApi = async () => {
    const response = await fetch("../../../../Mock/tasks.json");
    const body = await response.json();
    setTasksList(body);
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div>
      <h1>{taskName}</h1>
      <div>
        {tasksList.map((task) => (
          <Cards
            taskName={task.taskName}
            taskColor={task.taskColor}
            taskHour={task.taskHour}
            isCompleted={task.isCompleted}
          />
        ))}
      </div>
    </div>
  );
}

export default Tasks;
