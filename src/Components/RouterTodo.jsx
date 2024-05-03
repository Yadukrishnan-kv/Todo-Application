import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeTodo from './HomeTodo';
import TasksTodo from './TasksTodo';
import CompletedTodo from './CompletedTodo';
import PendingTodo from './PendingTodo';
import EditTodo from './EditTodo';


const TodoContext1 = createContext();
function RouterTodo() {
    const [todo, setTodo] = useState([]);
  return (
    <div>
          <TodoContext1.Provider value={[todo, setTodo]}>
          <BrowserRouter>
          <Routes>
          <Route path="/"
                element={
                  <>
                    <HomeTodo/>
                    <TasksTodo/>
                    
                  </>
                }>

          </Route>
          <Route path="/Tasks"
                element={
                  <>
                    <HomeTodo/>
                    <TasksTodo/>
                  </>
                }>

          </Route>

          <Route
                path="/Completed"
                element={
                  <>
                  <HomeTodo/><CompletedTodo/>
                  </>
                }
            >
              </Route>
              <Route
                path="/Pending"
                element={
                  <>
                  <HomeTodo/><PendingTodo/>
                  </>
                }
            >
              </Route>
              <Route
                path="/edit/:user"
                element={
                  <>
                  <HomeTodo/><EditTodo/>
                  </>
                }
            >
              </Route>
          </Routes>
          </BrowserRouter>
          </TodoContext1.Provider>

    </div>
  )
}

export default RouterTodo
export {TodoContext1};