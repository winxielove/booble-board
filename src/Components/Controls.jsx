import React, { useRef, useState } from 'react'
import { CompactPicker, SketchPicker } from 'react-color'
import { AiOutlineFileAdd } from "react-icons/ai"

const Controls = ({ onNew }) => {

    const [color, setColor] = useState("#FFFFFF")
    const [title, setTitle] = useState("Title :)")
    const ref = useRef()


    return (
    <div className='board-controls'>

        <div className='control-new'>

            <input type="text" onChange={(e) => {
                setTitle(e.target.value)
            }} value={title}/>

            <div className='control-color'>
                <CompactPicker color={color} onChange={(e) => {
                    setColor(e.hex)
                }}/>
            </div>

            <div className='control-add'
                style={{"background-color": color}}
                onClick={() => {
                onNew({
                    title: title,
                    pos: {
                        x: 0,
                        y: 0
                    },
                    color: color
                })
            }}>
                <AiOutlineFileAdd color='white'/>
            </div>
        </div>

    </div>
  )
}

export default Controls