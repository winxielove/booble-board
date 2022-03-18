import React, { useState } from 'react'
import Board from './Board'
import Controls from './Controls'

const testSettings = {

  width: 800,
  height: 600

}

const BoardView = () => {

  return (
    <div className='board-view' id='board-viewer'>

        
        <Board board={testSettings}/>

        <Controls board={testSettings}/>

    </div>
  )
}

export default BoardView