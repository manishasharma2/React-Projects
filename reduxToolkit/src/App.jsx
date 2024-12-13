import { useState } from 'react'
import Todos from './components/Todos'
import TodoFrom from './components/TodoFrom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoFrom />
      <Todos />
    </>
  )
}

export default App
