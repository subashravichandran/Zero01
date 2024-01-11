import './App.css';
import axios from 'axios';
import Tasks from './components/tasks';
import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:3000/api/v1/tasks'; 

function getApiData() {
  return axios.get(API_URL).then((response) => response.data)
}

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() =>{
    let mounted = true
    getApiData().then((tasks) => {
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
