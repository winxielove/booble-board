import React, { useEffect, useRef, useState } from 'react'
import { OverlayTrigger, Popover, Tooltip } from 'react-bootstrap'
import { BlockPicker, CompactPicker } from 'react-color'
import { ChromePicker, HuePicker, SketchPicker } from 'react-color'
import Draggable from 'react-draggable'
import { IconContext } from "react-icons"
import { MdOutlineDragIndicator, MdModeEditOutline, MdCheck, MdDelete, MdDeleteForever, MdDeleteSweep, MdCancel } from "react-icons/md"
import { usePopper } from 'react-popper'
import pickFont from '../../Modules/pickFont'
import "../../Styles/Note.css"

const Note = (props) => {

    const [posi, setPosi] = useState(null)
    const [size, setSize] = useState({width: 0, height: 0})
    const [editing, setEditing] = useState(false)
    const [editor, setEditor] = useState({
        ...props
    })
    var {pos, color, title, description, board, act, k} = {...props}
    console.log(k)
    const ref = useRef()
    const divRef = useRef()

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
            key={k}
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
                            <MdOutlineDragIndicator className='i-note-handle'/>
                        </div>
                        {(editing) ?
                        <div>
                            <MdCheck   className="i-note-check"
                            onClick={() => {
                                act("edit",  k, editor)
                                setEditing(false)
                            }}/>
                            <MdCancel  className='i-note-cancel' onClick={() => {
                                setEditor({...props})
                                setEditing(false)
                            }}/>
                        </div>
                        :
                        <MdModeEditOutline   className="i-note-pencil"
                        onClick={() => {
                            setEditor({...props})
                            setEditing(true)
                        }}/>}
                    </div>
                    {editing ? <form onSubmit={(e) => {e.preventDefault()}}>
                        <label>Title: </label><input value={editor.title} onChange={
                            (e) => {
                                setEditor({...editor, title: e.target.value})
                            }
                        }/>
                        <br /><br />
                        <label>Description: </label><input value={editor.description} onChange={
                            (e) => {
                                setEditor({...editor, description: e.target.value})
                            }
                        }/>
                        <hr />
                    </form> : <div>
                            <h1>{editor.title}</h1>

                            <hr />
                            <h5>{editor.description}</h5>
                        </div>}

                    {editing ? <div className='i-note-toolbar'>
                        <MdDelete className='i-note-delete' onClick={() => {
                            console.log("FUCK")
                            act("delete",  k)
                        }}/>
                    </div> : <></>}
                </div>
        </Draggable>
    )
}

export default Note