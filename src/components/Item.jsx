import React from 'react'

function Item({ item }) {
  const quantity = item?.CharacterItem?.quantity && ('x' + item?.CharacterItem?.quantity)
  return (
    <span style={{ marginRight: 4 }}>
      <span className="badge badge-success">
        {item?.name}
      </span>
      {quantity}
    </span>
  )
}

export default Item