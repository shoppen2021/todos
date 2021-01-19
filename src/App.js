import React from 'react'
import Todolist from "./components/todolist";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <Todolist />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
