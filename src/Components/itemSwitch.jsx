import React from 'react'
import Note from './Items/Note'

const ItemSwitch = (props) => {
    const {item, key} = {...props}

    console.log(item.type)
    switch (item.type) {
        case "note":
            return (<Note {...item} key={key}/>)
        default:
            return (<Note {...item} key={key}/>)
    }
}

export default ItemSwitch