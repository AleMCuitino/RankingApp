import React from 'react'
import { useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'


function Header({onAddTask}) {
    const [ title, setTitle ] = useState('')

    function handleSubmit(event){
        event.preventDefault()

        onAddTask(title)
        setTitle('')
    }
    function onChangeTitle(event) {
        setTitle(event.target.value)
    }


  return (
    <div>

        <form onSubmit={handleSubmit}>
            <input placeholder="add something" type="text" value={title} onChange={onChangeTitle}/>
            <button>
                create
                <AiOutlinePlusCircle size={20}/>
            </button>
            
        </form>
      
    </div>
  )
}

export default Header
