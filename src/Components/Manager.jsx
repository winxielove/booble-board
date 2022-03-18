import React, { useState } from 'react'
import { BsFillPatchPlusFill } from "react-icons/bs"

const Manager = () => {
  const [show, setShow] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    width: 800,
    height: 600
  })


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
            const {
              title,
              description,
              width,
              height
            } = {...formData}

            console.log(title, description, width, height)
            
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
            <div className='board-manager-addnew'>
              <BsFillPatchPlusFill onClick={() => {
                setShow(true)
              }}/>
            </div>
        </div>
    </div>
  )
}

export default Manager