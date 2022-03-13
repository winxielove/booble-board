import React, { useState, useEffect, useCallback } from 'react'
import ItemSwitch from './itemSwitch'
import ContextMenus from './ContextMenu/ContextMenus'
import Controls from './Controls'
import Note from './Items/Note'

const Board = () => {
    const [show, setShow] = useState(false)
    const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });

    const [items, setItems] = useState([{
        title: "Meows :)",
        pos: {
            x: 0,
            y: 0
        },
        color: "#58a4b0ff",
        type: "note"
    }])

    const addItem = (a) => {
        setItems([...items, a])
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
        <div className='board'>

            {show ? <ContextMenus anchorPoint={anchorPoint} ev={contextEV}/>: <></>}

            {items.map((i) => {
                l++;
                return (
                    <ItemSwitch item={i} key={l}/>
                )
            })}

            {/* <Controls onNew={addItem}/> */}
            
        </div>
    )
}

export default Board