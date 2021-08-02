import { useState } from 'react';
import Header from './components/Header';
import Task from './components/Task';

function App() {
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
    <div className="container">
      <Header title="Task Tracker" />
      <Task task={task} />
    </div>
  );
}

export default App;
