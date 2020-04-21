import React from 'react';
import { Route } from 'react-router-dom';

// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import SHOP_DATA from './shop.data'
// import CollectionPreview from '../../collection-preview/collection-preview.component';
// import { selectCollections } from '../../../redux/shop/shop.selectors';

import CollectionsOverview from '../../collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { updateCollections } from '../../../redux/shop/shop.actions';
import WithSpinner from '../../with-spinner/with-spinner.component';


// before shifting SHOOP_DATA to redux->shop
// class ShopPage extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//         collections: SHOP_DATA
//       }
//     }
    
//   render() {
//       const { collections } = this.state
//     return (

// const ShopPage = ({ collections }) => (

// --------------------------------------------
// transfering data to firebase convert const to class function

// const ShopPage = ({ match }) => 
// // { console.log("match", match);
// // return ( 
//     ( 
//       <div className="shop-page">

//         {/* {
//             collections. map(({id, ...CollectionProps }) => (
//                 <CollectionPreview key={id}
//                 {...CollectionProps} />
//             ))
//         } */}

//         <Route exact path={`${match.path}`} component={CollectionsOverview} />
//         <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
//       </div>
//     );
// }

//   }
// }

// const mapStateToProps = createStructuredSelector({
//   collections: selectCollections
// });

// export default connect(mapStateToProps)(ShopPage);


// --------------------------------------------


//----- Loader ------

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  // constructor(){
  //   super();

  //   this.state = {
  //     loading: true
  //   }
  // }

  //or

  state = {
    loading: true
  }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    // this.unsubscribeFromSnapshot = 
      collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      // console.log("snapshot zzzzz",snapshot);
      // console.log(collectionsMap);
        this.setState({ loading: false });
    });
  }
  
  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route exact
        path={`${match.path}`}
        // component= {CollectionsOverview} 
        render={(props) => <CollectionsOverviewWithSpinner
          isLoading={loading} {...props} /> }
        />
        
        <Route path={`${match.path}/:collectionId`} 
        // component={CollectionPage} 
        render={(props) =>
        <CollectionPageWithSpinner
          isLoading={loading} {...props} /> }
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);