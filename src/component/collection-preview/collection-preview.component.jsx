import React from 'react';
import SHOP_DATA from '../pages/shop/shop.data'
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss'

const CollectionPreview = ({ title, items, cid }) => {
  return (
    <div className="collection-preview">
      <h1 className={`title animated flipInX delay-${cid}s`}>{title.toUpperCase()}</h1>
      <div className="preview">
        {/* {
          items
          .filter((item, idx) => idx < 4)
          .map(({id, ...ItemProps}) => (
          <CollectionItem key={id}
            {...ItemProps}
          />
          ))
        } */}
        {/* before adding to cart */}

        {
          items
          .filter((item, idx) => idx < 4)
          .map( (item) => (
          <CollectionItem key={item.id}
            item={item}
          />
          ))
        }
      </div>
    </div>
  )
}

export default CollectionPreview
