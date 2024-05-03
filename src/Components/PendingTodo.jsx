import React, { useContext } from 'react'
import { TodoContext1 } from './RouterTodo';


import dltimg from '../Assets/icons8-delete-25 (2).png'


function PendingTodo() {
  
    const [todos, setTodos] = useContext(TodoContext1);
    console.log(todos)
    const onDlete=(id)=>{
        setTodos( todos.filter((to)=>to.id !==id))
     }
     
     const pendingdata=todos.filter(list => list.status === 'PENDING');
  return (
    
  
  <div style={{backgroundColor:"rgba(26, 165, 96, 0.801)",height:"950px"}} >
    <div className="tileGrid loader">
    {pendingdata.map((demo) => (
      <div className="tile">
        <div className="leftstatusBar" style={{
          backgroundColor: "#092635" 
            }} >
          <p>TODO</p>
        </div>
        <div className="mainCont">
        
        <div className="timeDate"style={{  backgroundColor:"#8a1212" }} >

        <p >{demo.status}</p>
        </div>
          
          <div className="subdiv">
            <p style={{marginTop:"15px"}}>{demo.list}</p>
            
        <div className="options">
            <div className="leftoption">
             </div>
            <div className="rightoption">
              <button>
              <img  height={17} src={dltimg} alt=""    title='Delete' onClick={()=>onDlete(demo.id)}  />
              </button>
            </div>
          </div>
          </div>
       
       </div>
       </div>
      
        
        
          
        
    ))}
  </div>

    </div>
  )
}

export default PendingTodo