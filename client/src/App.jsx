import {useEffect, useState} from 'react'

function App() {

  const [message, setMessage] = useState("")

  useEffect(() => {
    async function getTodos(){
      const res = await fetch("/api/todos")
      const todos = await res.json()

      console.log(todos);
      setMessage(todos.mssg)
      
    }

    getTodos()
  }, [])

  return (
    <main className="container">
      <h1>Hello World!</h1>
      <p style={{color: "red", fontSize: "2rem"}}>{message}</p>
    </main>
  )
}

export default App
 
