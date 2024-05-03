import React, { useContext, useEffect, useRef, useState } from 'react'
import '../Styles/HomeTodo.css'
import addicon from '../Assets/icons8-add-40.png'

import {TodoContext1} from '../Components/RouterTodo';
import { Link } from 'react-router-dom'

function HomeTodo() {

  


const [todos, setTodos]=useContext(TodoContext1);
const [todo, setTodo] = useState('')
console.log(todos)

const handleSubmit=(e)=>{
  e.preventDefault();
}
const addTodos=()=>{
 if(todo !==''){
  setTodos([...todos,{list:todo,id:Date.now(),status:"PENDING"}])
  setTodo('')
  console.log(todos)
 }
}
 
const inputRef = useRef('null')
useEffect(()=>{
  inputRef.current.focus();
})



 return (
    <div>
     
       <div className="main">
                  <h1 className="heading" >ToDo..</h1>
            <form action="" onSubmit={handleSubmit}>
                   <input type="text" placeholder='Add New Task...' onChange={(event)=>setTodo(event.target.value)} value={todo} ref={inputRef} />
                   <button  type="submit" onClick={addTodos} >
                   <img src={addicon} alt=""  height={20} id='addimg'/>
                   </button>
             </form>
           <div className='navholder1'>
               <div className="navleft">
               <Link to='/Tasks'>  <a href="">TASKS</a></Link>
               <Link to='/Completed'><a href="">COMPLETED</a></Link>
              <Link to='/Pending'><a href="">PENDINGS</a></Link>
                </div>
                
          </div>
         
       
        
</div>
    </div>
  





       
)
}

export default HomeTodo