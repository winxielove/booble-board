import React, { useState } from 'react'
import Board from './Board'
import Controls from './Controls'

const BoardView = () => {

  return (
    <div className='board-view' id='board-viewer'>

        
        <Board/>

        <Controls/>

    </div>
  )
}

export default BoardView