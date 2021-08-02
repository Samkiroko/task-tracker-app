const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{tasks.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
