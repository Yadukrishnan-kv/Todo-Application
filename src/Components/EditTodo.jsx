import React, { useContext,  useState } from 'react'
import { TodoContext1 } from './RouterTodo';
import { Link, useNavigate, useParams } from 'react-router-dom';
import saveimg from '../Assets/icons8-save-60.png'
import '../Styles/HomeTodo.css'

function EditTodo() {
    const Navigate=useNavigate()
    const [todos, setTodos] = useContext(TodoContext1);
    const {user}=useParams()
    const editdata=todos[user]

    console.log(editdata)
    const [todo, setTodo] = useState({id:editdata.id,list:editdata.list,status:editdata.status})

    const handleChange=(event)=>{
      setTodo({...todo,[event.target.name]:event.target.value})
      event.preventDefault();
      
    }
    
    const edit=(e)=>{
      const newdata=[...todos];
      newdata[user]=todo
      setTodos(newdata)
      Navigate('/')
      console.log(newdata)
      
      
    }
 
      

  return (
    <div>
    

    <div className="editpage">
     
        <div className="edittile">
          <div className="leftstatusBar">
            <p></p>
          </div>
          <div className="mainCont">
            
            <form>
              <div className="subdiv">
                <input
                  type="text"
                  value={todo.list}
                  onChange={ handleChange}
                  name='list'
                />

                <div className="options">
                  <div className="leftoption"></div>
                  <div className="rightoption">
                <Link to={'/Tasks'}><button type="submit"  style={{marginTop:"30px"}}  onClick={edit} title='Save'>
                      <img height={30} src={saveimg} alt="" />
                    </button></Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
     
    </div>

    </div>
  )
}

export default EditTodo