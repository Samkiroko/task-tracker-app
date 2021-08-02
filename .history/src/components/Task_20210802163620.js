import React from 'react';

const tasks = [
  {
    id: 1,
    text: 'Buy groceries',
    day: 'Feb 5th at 2:30pm',
    reminder: true,
  },
  {
    id: 2,
    title: 'Learn React',
    day: 'Feb 6th at 1:30pm',
    completed: false,
  },
];

const Task = () => {
  return (
    <>
      {tasks.map(() => (
        <h3>{tasks.text}</h3>
      ))}
    </>
  );
};

export default Task;
