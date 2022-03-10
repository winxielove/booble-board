import React from 'react'

const Small = ({title}) => {
  return (
    <>
    <h1>{title}</h1>

    <hr />
    <h2 contentEditable={true}>{"this is editable"}</h2>
    </>
  )
}

export default Small