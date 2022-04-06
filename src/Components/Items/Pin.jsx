import React, { useRef, useState } from 'react'
import Draggable from 'react-draggable'
import "../../Styles/Pin.css"
import pickFont from '../../Modules/pickFont'

const Pin = (props) => {
    const [size, setSize] = useState({
        width: 0,
        height: 0
    })
    const [show, setShow] = useState(false)
    var {pos, color, title, board, act, k} = {...props}
    const ref = useRef()
    const divRef = useRef()

  return (
    <Draggable
        defaultPosition={{x: pos.x, y: pos.y}}
        ref={ref}
        bounds={{left: 0,
        top: 0,
        right: parseInt(board.width - size.width - 4),
        bottom: parseInt(board.height - size.height - 4)}}
        onDrag={(e) => {
            setSize({width: divRef.current.clientWidth, height: divRef.current.clientHeight})
        }}
        key={k}
    >
        <div className='i-pin' ref={divRef} style={{
            backgroundColor: color,
            border: "2px solid " + pickFont(color, "#FDF0D5", "#3A3335"),
            boxShadow: "0px 0px 5px " + pickFont(color, "#3A3335", "#FDF0D5")
        }}
            onMouseEnter={() => {
                setShow(true)
            }}
            onMouseLeave={() => {
                setShow(false)
            }}
        >
            {show ? <h2>{title}</h2> : <></>}
        </div>
    </Draggable>
  )
}

export default Pin