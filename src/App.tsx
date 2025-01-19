import './App.css'
import TodoList from './components/TodoList'
import UserList from './components/UserList'

function App() {

  console.log(123)
  return (
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <TodoList />
      <UserList />
    </div>
  )
}

export default App
