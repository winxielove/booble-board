import React, { useEffect, useRef, useState } from 'react'
import { OverlayTrigger, Popover, Tooltip } from 'react-bootstrap'
import { BlockPicker, CompactPicker } from 'react-color'
import { ChromePicker, HuePicker, SketchPicker } from 'react-color'
import Draggable from 'react-draggable'
import { MdOutlineDragIndicator, MdModeEditOutline, MdCheck } from "react-icons/md"
import { usePopper } from 'react-popper'

const Note = (props) => {

    const [posi, setPosi] = useState(null)
    const [size, setSize] = useState({width: 0, height: 0})
    const [editing, setEditing] = useState(false)

    var {pos, color, type, title, description, board} = {...props}
    const ref = useRef()
    const divRef = useRef()
    function pickFont(bgColor, lightColor, darkColor) {
        var color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
        var r = parseInt(color.substring(0, 2), 16); // hexToR
        var g = parseInt(color.substring(2, 4), 16); // hexToG
        var b = parseInt(color.substring(4, 6), 16); // hexToB
        return (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186) ?
          darkColor : lightColor;
    }

    useEffect(() => {
        console.log(pos)
        setSize({width: divRef.current.clientWidth, height: divRef.current.clientHeight})
    }, [])
    
    return (
        <Draggable 
            handle=".i-note-handle"
            defaultPosition={{x: pos.x, y: pos.y}}
            ref={ref}
            bounds={{left: 0,
            top: 0,
            right: parseInt(board.width - size.width - 4),
            bottom: parseInt(board.height - size.height - 4)}}
            onDrag={(e) => {
                setSize({width: divRef.current.clientWidth, height: divRef.current.clientHeight})
            }}
            >
                <div ref={divRef}
                    className={`i-note i-note-draggable ${editing ? "i-note-editing" : ""}`}
                    style={
                        {
                        backgroundColor: color, 
                        color: pickFont(color, "white", "#3A3335"), 
                        borderColor: pickFont(color, "#FDF0D5", "#3A3335"), 
                        boxShadow: "0px 0px 5px " + pickFont(color, "#3A3335", "#FDF0D5"),
                        "--bkgclr":  pickFont(color, "#FDF0D5", "#3A3335")
                        }}
                        >
                    <div className='i-note-header'>
                        <div className='i-note-handle'>
                            <MdOutlineDragIndicator color={pickFont(color, "#FDF0D5", "#3A3335")}/>
                        </div>
                        {(editing) ?
                        <MdCheck color={pickFont(color, "#FDF0D5", "#3A3335")} className="i-note-check"
                        onClick={() => {
                            setEditing(false)
                        }}/>
                        :
                        <MdModeEditOutline color={pickFont(color, "#FDF0D5", "#3A3335")} className="i-note-pencil"
                        onClick={() => {
                            setEditing(true)
                        }}/>}
                    </div>
                    <h1>{title}</h1>

                    <hr />
                    <h5>{description}</h5>
                </div>
        </Draggable>
    )
}

export default Note