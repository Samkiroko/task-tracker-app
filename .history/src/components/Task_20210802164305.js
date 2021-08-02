const Task = ({ tasks }) => {
  return (
    <>
      {task.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Task;
