import { useState } from 'react';
import Header from './components/Header';
import Task from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
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

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header title="Task Tracker" />
      {task.length > 0 ? (
        <Task tasks={tasks} onDelete={deleteTask} />
      ) : (
        <div>No Tasks</div>
      )}
    </div>
  );
}

export default App;
