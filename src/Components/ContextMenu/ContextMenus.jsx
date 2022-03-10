import { ControlledMenu, MenuDivider, MenuItem } from '@szhsin/react-menu'
import React, { useEffect, useState } from 'react'

const colors = ["d81e5b","f0544f","fdf0d5","c6d8d3","bac1b8","58a4b0"]

const ContextMenus = ({ contextData, anchorPoint, ev}) => {

    const [open, setOpen] = useState(false)

    useEffect(() => {
        setOpen(true)
    }, "")

  return (
    <div className='context-menu' style={{
        top: anchorPoint.y,
        left: anchorPoint.x
      }}>
        <ControlledMenu anchorPoint={anchorPoint} state={open ? "open" : "closed"}>
            <MenuItem className={"noselect"} onClick={(e) => {
              ev({
                title: `Untitled Note`,
                pos: {
                    x: anchorPoint.x,
                    y: anchorPoint.y
                },
                color: "#" + colors[Math.floor(Math.random() * colors.length)],
                type: "note"
              })
            }}>
                Add
            </MenuItem>
            <MenuItem>
                Delete
            </MenuItem>
            <MenuDivider/>
        </ControlledMenu>
      </div>
  )
}

export default ContextMenus