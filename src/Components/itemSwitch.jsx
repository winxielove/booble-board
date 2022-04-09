import React from 'react'
import Note from './Items/Note'
import Pin from './Items/Pin'

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