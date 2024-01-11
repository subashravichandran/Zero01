import React from 'react';

function Tasks(props) {
  return(
    <>
    <div>Tasks List</div>
    {props.tasks.map((task) => {
      return (
        <div key={task.id}>
          <h1>{task.title}</h1>
          <h2>{task.description}</h2>
        </div>
      );
    })}
    </>
  );

}

export default Tasks;