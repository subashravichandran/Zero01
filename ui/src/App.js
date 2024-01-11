import './App.css';
import Tasks from './components/tasks';
import FetchData from './Middleware/fetch_data';
import * as k from './constants'
import { useEffect, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() =>{
    let mounted = true
    FetchData(k.TASKS).then((tasks) => {
      if (mounted) {
        setTasks(tasks);
      }
    });
    return  () => (mounted = false);
  }, []);

  return (
    <>
    <div><h1>Hello</h1></div>
    <Tasks tasks={tasks} />
    </>
  );
}

export default App;
