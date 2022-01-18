import { object } from 'prop-types';
import React from 'react'
import { useState } from 'react'
import Header from './Components/Header';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';

//import './index.css';


  const App = () =>  {
    const [tasks, setTasks] = useState([
        
      {
          id: 1,
          text: 'Doctors Appiontment',
          day: 'Feb 5th at 2:30pm',
          reminder: true,
      },
      {
          id: 2,
          text: 'Meeting at School',
          day: 'Feb 6th at 1:30pm',
          reminder: true,
      },
      {
          id: 3,
          text: 'Food shopping',
          day: 'Feb 5th at 2:30pm',
          reminder: false,
      },
  
])

  //Add Task
  //const AddTask = (task) =>
  //console.log(task);

   //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !==
    id))
  }

   // Toggle Reminder
   const toggleReminder = (id) => {
     setTasks(
       tasks.map((task) => task.id === id ? 
     { ...task, reminder: 
      !task.reminder } : task 
     )
     )
   }

  
     

   return (
     <div className="container">
       <Header  />
       <AddTask onAdd={AddTask}/>
       {tasks.length > 0 ?(
       <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
       ) : ( 'No Tasks To Show'
       )}
     </div>
   
   )
   
  
   }


export default App
