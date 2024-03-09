import './App.css';
import Tasks from './components/tasks';
import Game from './components/game';
import FetchData from './Middleware/fetch_data';
import * as k from './constants'
import { useEffect, useState } from 'react';

function App() {
  return (
    <>
      <DisplayGame />
      <PromptAnswer />
      {/* <Task /> */}
    </>
  )
}

function Task() {
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

function DisplayGame() {
  const [game, setGame] = useState([])
  const [showElement, setShowElement] = useState(true)

  useEffect(() => {
    let mounted = true
    FetchData(k.GAME + '/1').then((game) => {
      if (mounted) {
        setGame(game);
      }
    });
    setTimeout(function () {
      setShowElement(false);
    }, 3000)
    return () => (mounted = false);
  }, [])

  return (
    <>
      <div><h1>Guess Game</h1></div>
      { showElement ? <Game  game={game}/> : null }
    </>
  );
}

function PromptAnswer() {
  const [showElement, setShowElement] = useState(false)

  useEffect(() => {
    setTimeout(function () {
      setShowElement(true);
    }, 3000)
  }, [])
  
  return (
    <>
      { showElement ? <h1>Answer</h1> : null }
    </>
  )
}

export default App;
