import React, { useEffect, useRef, useState } from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import { BlockPicker, CompactPicker } from 'react-color'
import { ChromePicker, HuePicker, SketchPicker } from 'react-color'
import Draggable from 'react-draggable'
import { MdOutlineDragHandle, MdOutlineColorLens, MdOutlineDragIndicator } from "react-icons/md"
import Note from './Note'

const DefaultItem = (props) => {
    var {pos, color, type} = {...props}
    const ref = useRef()

    switch (type) {
        case "note":
            var body = <Note {...props}/>
            break;
        default:
            var body = <Note {...props}/>
            break;
    }
    function pickFont(bgColor, lightColor, darkColor) {
        var color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
        var r = parseInt(color.substring(0, 2), 16); // hexToR
        var g = parseInt(color.substring(2, 4), 16); // hexToG
        var b = parseInt(color.substring(4, 6), 16); // hexToB
        return (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186) ?
          darkColor : lightColor;
    }
    return (
        <Draggable 
            handle=".board-item-handle"
            defaultPosition={{x: pos.x, y: pos.y}}
            ref={ref}
            className='board-item-draggable'
            >
                <div className='board-item board-item-draggable' style={{backgroundColor: color, color: pickFont(color, "white", "#3A3335"), borderColor: pickFont(color, "#FDF0D5", "#3A3335"), boxShadow: "0px 0px 5px " + pickFont(color, "#3A3335", "#FDF0D5")}}>
                    <div className='board-item-header'>
                        <div className='board-item-handle'>
                            <MdOutlineDragIndicator color={pickFont(color, "#FDF0D5", "#3A3335")}/>
                        </div>
                    </div>
                    {
                        body
                    }
                </div>
        </Draggable>
    )
}

export default DefaultItem