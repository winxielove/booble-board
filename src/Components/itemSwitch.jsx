import React from 'react'
import Note from './Items/Note'
import Pin from './Items/Pin'

const ItemSwitch = (props) => {
    const {item, k} = {...props}
    switch (item.type) {
        case "pin":
            return (<Pin {...item} k={k}/>)
        case "note":
            return (<Note {...item} k={k}/>)
        default:
            return (<Note {...item} k={k}/>)
    }
}

export default ItemSwitch