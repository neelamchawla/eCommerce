import React from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';

//----after adding thunk
// import { createStructuredSelector } from 'reselect';

// import SHOP_DATA from './shop.data'
// import CollectionPreview from '../../collection-preview/collection-preview.component';
// import { selectCollections } from '../../../redux/shop/shop.selectors';

//----- replace "CollectionPage" with "CollectionPageContainer" removing all withspinner isFetching and isLoading ----
import CollectionsOverviewCotainer from '../../collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

//after adding thunk
// import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';   
// import { updateCollections } from '../../../redux/shop/shop.actions';
// import { fetchCollectionsStartAsync } from '../../../redux/shop/shop.actions';

import { fetchCollectionsStart } from '../../../redux/shop/shop.actions';
//after adding saga replace "fetchCollectionsStartAsync" with "fetchCollectionsStart"

//moved to collection and shop.container.jsx
// import { selectIsCollectionFetching,selectIsCollectionsLoaded } from '../../../redux/shop/shop.selectors';

// ----------------

// import WithSpinner from '../../with-spinner/with-spinner.component';


// before shifting SHOP_DATA to redux->shop
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

//aft adding "collectionsOverviewCotainer", remove "CollectionsOverviewWithSpinner" and "isCollectionFetching"

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  // constructor(){
  //   super();

  //   this.state = {
  //     loading: true
  //   }
  // }
  //or
  //-----after adding thunk
  // state = {
  //   loading: true
  // }

  // unsubscribeFromSnapshot = null;
  // -----------------------------

  // componentDidMount() {
  //-----after adding thunk
    // const { updateCollections } = this.props;
    // const collectionRef = firestore.collection('collections');
//--------------------
    // this.unsubscribeFromSnapshot = 
    //------ before promise --------
    //   collectionRef.onSnapshot(async snapshot => {
    //   const collectionsMap = convertCollectionSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   // console.log("snapshot zzzzz",snapshot);
    //   // console.log(collectionsMap);
    //     this.setState({ loading: false });
    // });

    //---------------- fetch implimentation -------
    // fetch('https://firestore.googleapis.com/v1/projects/ecommerce-90a58/databases/(default)/documents/collections')
    // .then(response => response.json())
    // .then(collections => console.log("collectionzzzzzz",collections));
    // but it's nested very deeeep to get the object
    
    // ---------------- or ------------------------
    //-------------- promise implimentation -------
  //-----after adding thunk

    // collectionRef.get()
    // .then(snapshot => {
    //     const collectionsMap = convertCollectionSnapshotToMap(snapshot);
    //     updateCollections(collectionsMap);
    //     // console.log(collectionsMap);
    //       this.setState({ loading: false });
    //   });
  // ------------------

  componentDidMount() {
    const { fetchCollectionsStart } = this
    .props;
    fetchCollectionsStart();
}
   
  render() {
    const { match } = this.props;
    //aftr thunk replace "loading" with "isCollectionFetching"
    // const {
      // isCollectionFetching, 
      // isCollectionsLoaded } = this.props;
  
    // const { loading } = this.state;  //after adding thunk
    return (
      <div className="shop-page">
        <Route exact
        path={`${match.path}`}
        // component= {CollectionsOverview} 
        
        // aftr adding "CollectionsOverviewCotainer"
        // render={(props) => <CollectionsOverviewWithSpinner
        //   isLoading={isCollectionFetching} {...props} /> }
        component={CollectionsOverviewCotainer}
        />
        
        <Route path={`${match.path}/:collectionId`} 
        // component={CollectionPage}
        // replaced "isCollectionFetching" with "!isCollectionsLoaded" to make loader work aft refreshing the page. ! is used coz isloading will work only if its value is true. but we dont hv collection in "isCollectionsLoaded = false" (thrf4) !false = true.
        // render={(props) => (
        // <CollectionPageWithSpinner
        //   isLoading={!isCollectionsLoaded}
        //   {...props} /> )}

        component={CollectionPageContainer}
        />
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   updateCollections: collectionsMap =>
//     dispatch(updateCollections(collectionsMap))
// });


// --- remove aft CollectionPageContainer ---
//after adding thunk
// const mapStateToProps = createStructuredSelector({
//   // isCollectionFetching: selectIsCollectionFetching,
//   isCollectionsLoaded: selectIsCollectionsLoaded
// })

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
  // mapStateToProps, 
  null,
  mapDispatchToProps)(ShopPage);