import React from 'react';

function Game(props) {
    debugger
  return(
    <>
    <div><h2>Guess it !!! </h2></div>
    <div>
        <h3>Remember the number: {props.game.question}</h3>
        <h3>Difficulty: {props.game.length}</h3>
    </div>
    </>
  );
}

export default Game;