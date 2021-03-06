import React from 'react'

export default function TodoItems(props) {
    const {items,deleteItem } = props;
    let length = items.length
    const listItems = length ? (items.map(item => {
        return(
            <div key={item.id}>
                <span className="name">{item.name}</span>
                <span className="age">{item.age}</span>
                <span className="action icon"  onClick={ ()=>deleteItem(item.id)}>&times;</span>
            </div>
        )
    })): (
        <p>there is no items to show</p>
    )
    return (
        <div>
            <div className='ListItems'>
                <span className='name title'>Name</span> 
                <span className='age title'>Age</span> 
                <span className='action title'>action</span>
            </div>
          {listItems}
        </div>
    )
}
