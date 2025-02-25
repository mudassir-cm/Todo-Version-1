import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TodoName from './components/TodoName'
import 'bootstrap/dist/css/bootstrap.min.css'
import AddTodo from './components/AddTodo'
import TodoItem1 from './components/TodoItem1'
import TodoItem2 from './components/TodoItem2'

function App() {
  const [count, setCount] = useState(0)

  return (

    <center className="todo-container">
      <TodoName />
      <AddTodo />
      <div className="todoItem">
      <TodoItem1></TodoItem1>
      <TodoItem2></TodoItem2>
      </div>
    </center>
  )
}

export default App
