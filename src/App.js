import React from 'react'
import './App.css'
import Table from './component/Table/Table'


function App() {
  return (
    <div className="App">
      <nav className="nav-breadcrumb" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
            
          </li>
          <li className="breadcrumb-item">
            <a href="/">administration</a>
            
          </li>
          <li className ="breadcrumb-item active" aria-current="page">
            looger search
          </li>
        </ol>
      </nav>
      
      <Table/>
    </div>
  )
}

export default App
