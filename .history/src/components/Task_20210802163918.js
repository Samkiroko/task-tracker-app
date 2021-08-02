import { useState } from 'react';

const Task = () => {
  const [task, setTask] = useState([
    {
      id: 1,
      text: 'Buy groceries',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Learn React',
      day: 'Feb 6th at 1:30pm',
      completed: false,
    },
  ]);
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Task;
