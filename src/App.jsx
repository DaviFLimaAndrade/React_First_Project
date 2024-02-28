import { useState } from 'react'
import "./App.css"
import Todo from "./components/Todo"
import TodoForm from './components/TodoForm'
import Search from './components/search'
import Filter from './components/filter'

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
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("all")
  const [sort, setSort] = useState("Asc")

  const addTodo = (text, category) => {

    const newTodos = [...todos, {
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
    const test = newTodos.map((todo) =>
      todo.id === id ? {
        id: todo.id,
        text: todo.text,
        category: todo.category,
        isComplete: !todo.isComplete
      } : todo);
    console.log(test)
    setTodos(test);

  };

  return <div className="app">
    <h1>Lista de tarefas</h1>
    <Search search={search} setSearch={setSearch} />
    <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
    <div className="todo-list">
      {todos
      .filter((todo) => filter === 'all'? true : filter === 'Completed' ? todo.isComplete: !todo.isComplete)
      .sort((a,b) => sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
      .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())
      )
        .map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
        ))}
    </div>
    <TodoForm addTodo={addTodo} />
  </div>
}



export default App
