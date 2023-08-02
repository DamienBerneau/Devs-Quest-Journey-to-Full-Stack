import React from 'react'
import classNames from 'classnames'

function Item({ item }) {
  const quantity = item?.CharacterItem?.quantity && ('x' + item?.CharacterItem?.quantity)
  return (
    <span style={{ marginRight: 4 }}>
      <span className={classNames('badge badge-secondary', {
        'badge-success': quantity,
        'badge-primary': item.owned,
        'badge-warning': item.special,
      })}>
        {item?.name}
      </span>
      {quantity}
    </span>
  )
}

export default Item