import { useState } from 'react'
import "./App.css"
import Todo from "./components/Todo"
import TodoForm from './components/TodoForm'

function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    text: 'Criar funcionalidade x no sistema',
    category: 'trabalho',
    isComplete: false,
  },
  {
    id: 2,
    text: "ir para a academia",
    category: 'Pessoal',
    isComplete: false,
  },
  {
    id: 3,
    text: "Estudar React",
    category: "Estudos",
    isComplete: false,
  },
  ]) 

  const addTodo = (text, category) => {

    const newTodos = [...todos,{
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isComplete: false,
    },];

    setTodos(newTodos)
  };

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredtodos = newTodos.filter((todo) =>
    todo.id !== id ? todo : null
    );
    setTodos(filteredtodos)
  };
  
  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => 
    todo.id === id ? todo.isComplete = !todo.isComplete : todo
    );
    setTodos(newTodos);
  };

  return <div className="app">
  <h1>Lista de tarefas</h1>
  <div className="todo-list">
    {todos.map((todo)=>(
      <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
    ))}
  </div>
  <TodoForm addTodo={addTodo}/>
</div>
}

// 42:02 / 1:02:43
// https://www.youtube.com/watch?v=YVEVrigByKY


export default App
