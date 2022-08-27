

import { Alert, AlertDescription, AlertTitle } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const todoTask =  JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(todoTask);
  const [show, setShow] = useState(false)

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !==id))
  };
  // // deleting task from an api using delete
  // const deleteTask = async (id) => {
  //   await fetch('http://localhost:3330/tasks', {
  //   method: 'DELETE'
  //   })
  //   setTasks(tasks.filter(task => task.id !==id))
  // }

  // adding task 
  const addTask = (task) => {
    const id = Math.random() * 100
    const addOn = {id, ...task}
    setTasks([...tasks, addOn])
  };

   // // adding task to an api data using post
    // const addTask = async (task) => {
    //   const res = await fetch('http://localhost:3330/tasks', {
    //     method: "POST",
    //     "headers": {
    //       "Content-type": "application/json"
    //     },
    //     body: JSON.stringify(task)
    //   })
    //   const data = await res.json();
    //   setTasks([...tasks, data])
    // }

  // setting task to local storage
  useEffect(() =>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
  },[tasks]);

  // // fetching task from an api
  // const fetchTask = async () => {
  //   const res = await fetch('http://localhost:3330/tasks');
  //   const data = await res.json()
  //   setTasks(data)
  // }
  // useEffect(() => {
  //   fetchTask()
  // },[])

  return (
   <div>
    <Header show={show} setShow={setShow} />
    {show && <AddTask addTask={addTask}/>}
    {tasks.length > 0 ? <Tasks tasks={tasks} deleteTask={deleteTask} />
    : <Alert mx={'auto'} p={5} w={'60%'} status='warning'>
        <AlertTitle>Add Task</AlertTitle>
        <AlertDescription color={'red'}>You don't have any task </AlertDescription>
      </Alert>}
   </div>
  );
  
}

export default App;
