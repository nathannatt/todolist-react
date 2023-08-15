import Cards from "../Cards";

function Tasks({ taskName }) {
  const tasksList = [
    {
      taskName: "Wake Up",
      taskColor: "Red",
      taskHour: "7:00",
      isCompleted: false,
    },
    {
      taskName: "Eat Breakfast",
      taskColor: "Yellow",
      taskHour: "8:00",
      isCompleted: false,
    },
    {
      taskName: "Stretch",
      taskColor: "Green",
      taskHour: "9:00",
      isCompleted: false,
    },
  ];
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
