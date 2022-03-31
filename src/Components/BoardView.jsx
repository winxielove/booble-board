import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Board from './Board'
import Controls from './Controls'

const BoardView = () => {
  const { width, height } = useParams()

  useEffect(() => {
    console.log(width, height)
  }, [])
  

  return (
    <div className='board-view' id='board-viewer'>

        
        <Board board={{width: width, height: height}}/>

        <Controls board={{width: width, height: height}}/>

    </div>
  )
}

export default BoardView