import React from 'react';
import SHOP_DATA from '../pages/shop/shop.data'
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss'

const CollectionPreview = ({title, items}) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {
          items
          .filter((item, idx) => idx < 4)
          .map(({id, ...ItemProps}) => (
          <CollectionItem key={id}
            {...ItemProps}
          />
          ))
        }
      </div>
    </div>
  )
}

export default CollectionPreview
