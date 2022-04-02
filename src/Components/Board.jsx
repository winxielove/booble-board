import React, { useState, useEffect, useCallback, useRef } from 'react'
import ItemSwitch from './itemSwitch'
import ContextMenus from './ContextMenu/ContextMenus'
import Controls from './Controls'
import Note from './Items/Note'

const Board = ({ board }) => {
    const [show, setShow] = useState(false)
    const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
    const [scroll, setScroll] = useState({ x: 0, y: 0 })

    const onScroll = (e) => {
        setScroll({x: e.target.scrollLeft, y: e.target.scrollTop})
    }

    const [items, setItems] = useState([{
        title: "Meows :)",
        pos: {
            x: 0,
            y: 0
        },
        color: "#58a4b0ff",
        type: "note"
    }])

    const div = useRef()

    const addItem = (a) => {
        setItems([...items, {...a, pos: {
            x: Math.floor(a.pos.x - Math.abs(Math.floor(div.current.getBoundingClientRect().x - scroll.x))),
            y: Math.floor(a.pos.y - Math.abs(Math.floor(div.current.getBoundingClientRect().y - scroll.y)))
        }}])
    }

    const handleContextMenu = useCallback(
        (event) => {
            event.preventDefault();
            setAnchorPoint({ x: event.pageX, y: event.pageY });
            setShow(true);
        },
        [setAnchorPoint]
    );

    const handleClick = useCallback(() => (show ? setShow(false) : null), [show]);

    useEffect(() => {
        document.getElementById("board-viewer").addEventListener("scroll", onScroll)
        document.addEventListener("click", handleClick);
        document.addEventListener("contextmenu", handleContextMenu);
        return () => {
        document.removeEventListener("click", handleClick);
        document.removeEventListener("contextmenu", handleContextMenu);
        };
    });

    const contextEV = (e) => {
        addItem(e)
    }
    var l = 0;
    return (
        <div className='board' style={{width: board.width + "px", height: board.height + "px"}} ref={div}>

            {show ? <ContextMenus anchorPoint={anchorPoint} ev={contextEV}/>: <></>}

            {items.map((i) => {
                l++;
                return (
                    <ItemSwitch item={{...i, board: board}} key={l}/>
                )
            })}

            {/* <Controls onNew={addItem}/> */}
            
        </div>
    )
}

export default Board