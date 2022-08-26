

import { Alert, AlertDescription, AlertTitle } from '@chakra-ui/react';
import { useState } from 'react';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "i am going to school",
      date: 'april 12',
    },
    {
      id: 2,
      text: "i am going to gym",
      date: 'june 12',
    }
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !==id))

        // alternative method
  //    const newTask = tasks.filter(task => {
  //     return task.id !== id
  //    })
  //    setTasks(newTask)
  };

  const addTask = (task) => {
    const id = Math.random() * 100
    const addOn = {id, ...task}
    setTasks([...tasks, addOn])
    console.log(id);
  }

  return (
   <div>
    <Header />
    <AddTask addTask={addTask}/>
    {tasks.length > 0 ? <Tasks tasks={tasks} deleteTask={deleteTask} />
    : <Alert status='warning'>
        <AlertTitle>Add Task</AlertTitle>
        <AlertDescription>You don't have any task </AlertDescription>
      </Alert>}
   </div>
  );
  
}

export default App;
