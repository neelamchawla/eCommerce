import React from 'react';
// import SHOP_DATA from '../pages/shop/shop.data'
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss'
import { Link } from 'react-router-dom';

const CollectionPreview = ({ title, items, cid }) => {
  return (
    <div className="collection-preview">
      <br/>
      <Link className='logo-container' to ={`/shop/${title.toLowerCase()}`}>
          <h1 className={`title animated flipInX delay-1s`}>
              {title.toUpperCase()}
              <span className="msg">more --></span>
          </h1>
      </Link>
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
