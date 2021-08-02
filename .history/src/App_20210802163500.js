import Header from './components/Header';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Task />
    </div>
  );
}

export default App;
