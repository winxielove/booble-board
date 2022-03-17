import React, { useEffect, useRef, useState } from 'react'
import { CompactPicker, SketchPicker } from 'react-color'
import { AiOutlineFileAdd } from "react-icons/ai"

const Controls = ({ onNew }) => {

    const [scroll, setScroll] = useState()

    const onScroll = (e) => {
        setScroll({x: e.target.scrollLeft, y: e.target.scrollTop})
    }

    useEffect(() => {
        document.getElementById("board-viewer").addEventListener("scroll", onScroll)
        return (
            document.getElementById("board-viewer").addEventListener("scroll", onScroll)
        )
    }, [])
    return (
    <div className='board-controls'>

        <div className='board-minimap'>

            <div className='board-maxmap'>
                <div className='board-mapwindow' style={scroll ? {
                marginLeft: scroll.x / (window.innerWidth / 6.2) + "vw",
                marginTop: scroll.y / ((window.innerHeight / 6.2)) + "vh"
                } : {}}>
                </div>
            </div>

            {scroll ? `${scroll.y}, ${scroll.x}` : `0, 0`}
        </div>

    </div>
  )
}

export default Controls