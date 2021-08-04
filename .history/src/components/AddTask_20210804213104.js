import { useState } from 'react';

const AddTask = () => {
  const [task, setTask] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);
  return (
    <form className="add-form">
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="add task" />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input type="text" placeholder="add Day & Time" />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input type="checkbox" />
      </div>
      <input type="submit" value="save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
