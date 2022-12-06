import React from 'react'
import Header from './Header'
import Tasks from './Tasks'
import { useState } from 'react'

function Appp() {
    const [ tasks, setTasks] = useState([])

    function addTask(taskTitle){
        setTasks([
            ...tasks,
            {
                id: crypto.randomUUID(),
                title: taskTitle,
                isCompleted: false
            }
        ])
    }


  return (
    <div>
      <Tasks tasks={tasks}/>
      <Header onAddTask={addTask} />
    </div>
  )
}

export default Appp
