import React, { useContext} from 'react'
import { TodoContext1 } from "../Components/RouterTodo";
import completedImage from '../Assets/icons8-checkmark-25.png'
import editimg from '../Assets/icons8-edit-25 (1).png'
import dltimg from '../Assets/icons8-delete-25 (2).png'
import '../Styles/HomeTodo.css'
import { Link } from 'react-router-dom';
function TasksTodo() {

    const [todos, setTodos] = useContext(TodoContext1);
   
    
    const onDlete=(id)=>{
        setTodos( todos.filter((to)=>to.id !==id))
     }
     console.log(todos)

     const done=(id)=>{
      let complete=todos.map((list)=>{
        if(list.id === id)
        {
          return({...list,status:"COMPLETED"})
        }
        return  list
      })
      setTodos(complete)
     }


     
     

    
  return (
    <div style={{backgroundColor:"rgba(26, 165, 96, 0.801)",height:"950px"}} >
      
      <div>
            <ul>
            <div className="tileGrid loader">
           {todos.map((disp,ind)=>(
            
               <div className="tile">
              <div
              className="leftstatusBar"
              style={{ backgroundColor: "#092635"  }}
               >
              <p>TODO</p>
             </div>
           <div className="mainCont">
           <div className="timeDate"style={{ backgroundColor: "#04567D" }} >
            <p>TASKS</p></div>
            <div className="subdiv">
                <li>{disp.list}</li>

        <div className="options">
            <div className="leftoption">
              <button> 
                <img
                           
                            height={19}
                            src={completedImage}
                            alt=""
                            title='Complete'
                            onClick={()=>done(disp.id)}
                          /></button>
              
              <Link style={{ padding: "0" }} to={`/edit/${ind}`}>
                <button>
                <img
                            
                              height={19}
                              src={editimg}
                              alt=""
                              title='Edit'
                             
                            />
                </button>
                </Link>
              
            </div>
            <div className="rightoption">
              <button>
              <img  height={17} src={dltimg} alt=""    title='Delete'  onClick={()=>onDlete(disp.id)}/>
              </button>
            </div>
          </div>
          </div>
       
       </div>
       </div>
        ))}
       </div>
         
        </ul>
       </div>

    </div>
  )
}

export default TasksTodo