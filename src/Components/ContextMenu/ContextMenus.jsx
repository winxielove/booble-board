import { ControlledMenu, MenuDivider, MenuItem, SubMenu } from '@szhsin/react-menu'
import React, { useEffect, useState } from 'react'
import '@szhsin/react-menu/dist/index.css';

const colors = ["d81e5b","f0544f","fdf0d5","c6d8d3","bac1b8","58a4b0"]

const ContextMenus = ({ contextData, anchorPoint, ev}) => {

    const [open, setOpen] = useState(false)
    const [scroll, setScroll] = useState()

    useEffect(() => {
      var viewer = document.getElementById("board-viewer")
      setScroll({x: viewer.scrollLeft, y: viewer.scrollTop})
      setOpen(true)
    }, [""])

  return (
    <div className='context-menu' style={{
        top: anchorPoint.y,
        left: anchorPoint.x
      }}>
        <ControlledMenu anchorPoint={anchorPoint} state={open ? "open" : "closed"}>
            <SubMenu label='Add' direction='right' position='anchor'>
            <MenuItem className={"noselect"} onClick={(e) => {
              ev({
                title: `Untitled Note`,
                pos: {
                    x: scroll.x + anchorPoint.x,
                    y: scroll.y + anchorPoint.y
                },
                color: "#" + colors[Math.floor(Math.random() * colors.length)],
                type: "note"
              })
            }}>
                Note
            </MenuItem>
            </SubMenu>
            <MenuItem>
                Delete
            </MenuItem>
            <MenuDivider/>
        </ControlledMenu>
      </div>
  )
}

export default ContextMenus