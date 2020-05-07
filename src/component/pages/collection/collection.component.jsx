import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../collection-item/collection-item.component';
import { selectCollection } from '../../../redux/shop/shop.selectors';
import { Link } from 'react-router-dom';

import { firestore } from '../../firebase/firebase.utils';

import './collection.styles.scss';
import back from '../../../assests/back.png';

// const CollectionPage = ({ match, collection }) => {
//   console.log("match", match);
//   console.log("params", match.params.collectionId);

const CollectionPage = ({ collection }) => {
  console.log("collection", collection);

  useEffect(() => { 
    console.log('use effect in collection fired');
    const unsubcribeFromCollections = firestore.collection('collections').onSnapshot(snapshot => console.log(snapshot));

    return () => {
      console.log("unsubcribeFromCollections")
      unsubcribeFromCollections();
    };
  }, []);
  
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title animated flipInX">{ title }</h2>
      <div>
        <Link to ='/shop'>
        <img src={back} alt="back_button" />
        </Link>
      </div>
      <div className="items">
        {
          items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);