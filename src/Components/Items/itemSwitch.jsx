import React from 'react'
import Note from './Visual/Note'
import Pin from './Visual/Pin'

const ItemSwitch = (props) => {
    const {item} = {...props}
    switch (item.type) {
        case "pin":
            return (<Pin {...item}/>)
        case "note":
            return (<Note {...item}/>)
        default:
            return (<Note {...item}/>)
    }
}

export default ItemSwitch