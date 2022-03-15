import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Board from './Components/Board'
import BoardView from './Components/BoardView'
import Header from './Components/Header'
import Manager from './Components/Manager'


function App() {

  return (
    <div className="app">
      <BrowserRouter>
      
        <Routes>
          <Route element={<BoardView/>}
            path="board"
          />
          <Route element={<Manager/>}
            path="*"
          />
        </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App
