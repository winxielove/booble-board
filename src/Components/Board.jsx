import React, { useState, useEffect, useCallback, useRef } from 'react'
import ItemSwitch from './itemSwitch'
import ContextMenus from './ContextMenu/ContextMenus'

const Board = ({ board }) => {
    const [show, setShow] = useState(false)
    const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
    const [scroll, setScroll] = useState({ x: 0, y: 0 })
    const [reload, setReload] = useState(false)
    const [items, setItems] = useState([])

    const onScroll = (e) => {
        setScroll({x: e.target.scrollLeft, y: e.target.scrollTop})
    }

    const act = (a, key, edits) => {
        var i = items;
        console.log(a, items, i[key])
        switch (a) {
            case "delete":
                console.log("delete")
                i[key] = "deleletme"
                break;
            case "edit":
                console.log("edit")
                i[key] = edits;
                break;
        }
        console.log(i)
        setItems(i)
        setReload(!reload)
    }

    const div = useRef()

    const addItem = (a) => {
        setItems([...items, {...a, pos: {
            x: Math.floor(a.pos.x - Math.abs(Math.floor(div.current.getBoundingClientRect().x + scroll.x))),
            y: Math.floor(a.pos.y - Math.abs(Math.floor(div.current.getBoundingClientRect().y + scroll.y)))
        }}])
        console.log(items)
    }

    const handleContextMenu = useCallback(
        (event) => {
            if (event.target.id == "board") {
                event.preventDefault();
                setAnchorPoint({ x: event.pageX, y: event.pageY });
                setShow(true);
            } else {
                setShow((show) ? false : show)
            }
        },
        [setAnchorPoint, setShow]
    );

    const handleClick = useCallback(() => (show ? setShow(false) : null), [show]);

    useEffect(() => {
        document.getElementById("board-viewer").addEventListener("scroll", onScroll)
        document.addEventListener("click", handleClick);
        document.addEventListener("contextmenu", handleContextMenu);
        return () => {
            document.getElementById("board-viewer").removeEventListener("scroll", onScroll)
            document.removeEventListener("click", handleClick);
            document.removeEventListener("contextmenu", handleContextMenu);
        };
    });

    const contextEV = (e) => {
        addItem(e)
    }
    var l = -1;
    return (
        <div className='board' id='board' style={{width: board.width + "px", height: board.height + "px"}} ref={div}>

            {show ? <ContextMenus anchorPoint={anchorPoint} ev={contextEV} act={act}/>: <></>}

            {items.map((i) => {
                if (i !== "deleletme") {
                    l++;
                    return (
                        <ItemSwitch item={{...i, board: board}} key={l} k={l}/>
                    )
                } else {
                    return (
                        <></>
                    )
                }
            })}

            <div className='board-layers'>
                {items.map((i) => {
                    return (
                        <div>
                            <h1>{i.type + ", named " + i.title}</h1>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}

export default Board