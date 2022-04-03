import React from 'react'
import Note from './Items/Note'

const ItemSwitch = (props) => {
    const {item, k} = {...props}
    switch (item.type) {
        case "note":
            return (<Note {...item} k={k}/>)
        default:
            return (<Note {...item} k={k}/>)
    }
}

export default ItemSwitch