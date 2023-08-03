import { useState, useEffect } from 'react';
import Item from './Item';

const TasksCard = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch(`/api/quest`)
      .then(res => res.json())
      .then(items => setTasks(items))
  }, [])

  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">Tâches</div>
        <div className="card-text">
          {tasks.map((item, index) => <Item item={item} key={index} />)}
        </div>
      </div>
    </div>
  );
};

export default TasksCard;
