import React, { useState, useEffect } from 'react'
import { BsFillPatchPlusFill } from "react-icons/bs"
import { BiTrash, BiWorld } from "react-icons/bi"
import { generatePath, useNavigate } from 'react-router-dom'

const Manager = () => {
  const [show, setShow] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    width: 800,
    height: 600
  })
  const [localReload, setLocalReload] = useState(false)
  const [localData, setlocalData] = useState([])
  const nav = useNavigate()



  useEffect(() => {
    var bds = [];
    for (var i = 0; i < localStorage.length; i++) {
      bds.push(JSON.parse(localStorage.getItem(localStorage.key(i)))) 
    }
    setlocalData(bds)
  }, [localReload])
  

  return (
    <div className='manager'>
        {show ? <div className='board-manager-newboard' onClick={(e) => {
      if (e.target.className == "board-manager-newboard") {
        setShow(false)
      }
    }}>
          <div className='board-newboard'>
          <h1>New Board</h1>
          <h2>(ﾉ´ヮ`)ﾉ*: ･ﾟ</h2>
          <form onSubmit={(e) => {
            e.preventDefault()
            if (localStorage.getItem(formData.title)) {
              console.log("value already exists!")
            } else {
              localStorage.setItem(formData.title, JSON.stringify({
                ...formData,
                icon: {
                  iconType: "r-icon",
                  name: "world"
                }
              }))
              setShow(false)
              setLocalReload(true)
            }
            
          }}>
            <hr />
            <h2>Title: <input type="text" name='title' value={formData.title} onChange={(e) => {
              setFormData({...formData, title: e.target.value})
            }}/></h2>
            <h2>Description: <input type="text" name='description' value={formData.description} onChange={(e) => {
              setFormData({...formData, description: e.target.value})
            }}/></h2>
            <hr />
            <h2>Width: <input type="number" name='width' value={formData.width} onChange={(e) => {
              setFormData({...formData, width: e.target.value})
            }}/></h2>
            <h2>Height: <input type="number" name='height' value={formData.height} onChange={(e) => {
              setFormData({...formData, height: e.target.value})
            }}/></h2>

            <br />

            <input type="submit" value='Create' onChange={() => {}} className="board-newboard-submit"/>
            <h5>This saves to local storage, so it is only available on the current device.</h5>

          </form>
          </div>
        </div> : <></>}
        <h1>Board Organizer</h1>

        <h2>Boards:</h2>
        <div className='board-manager'>
            {localData.map((b) => {
                return <div className='board-manager-item' >
                  <div className='board-manager-thumb' onClick={
                  () => {
                    nav(generatePath("/board/:width&:height", {
                      "width": b.width,
                      "height": b.height
                    }))
                  }
                }>
                    {b.icon.iconType == "r-icon" && b.icon.name == "world" ? <BiWorld/>
                    :
                    <></>}
                  </div>
                  <h1 className='board-manager-title'>{b.title}</h1>
                  <BiTrash onClick={() => {
                    localStorage.removeItem(b.title)
                    setLocalReload(!localReload)
                  }}/>
                </div>
              })}
        </div>
        <div className='board-manager-addnew'>
              <BsFillPatchPlusFill onClick={() => {
                setShow(true)
              }}/>
            </div>
    </div>
  )
}

export default Manager