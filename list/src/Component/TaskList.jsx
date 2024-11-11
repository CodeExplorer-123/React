import React from 'react';
//import ShowTask from './ShowTask';

// Example1 :

// const TaskList = () => {

//   const tasks = [
//     { id: 1, task: 'Buy groceries', completed: false },
//     { id: 2, task: 'Wash the car', completed: true },
//     { id: 3, task: 'Prepare dinner', completed: false },
//   ];

//   return (
//     <ul>
//       {tasks.map(task => (
//         <li key={task.id}>
//           <ShowTask task={task} />
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default TaskList;


// Example2 :

const TaskList = () => {

  const tasks = [
    { id: 1, task: 'Buy groceries', completed: false },
    { id: 2, task: 'Wash the car', completed: true },
    { id: 3, task: 'Prepare dinner', completed: false },
  ];

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <h1>{task.task}</h1>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;