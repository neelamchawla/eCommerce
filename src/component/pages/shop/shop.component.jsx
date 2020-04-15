import React from 'react';
import { Route } from 'react-router-dom';

// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import SHOP_DATA from './shop.data'
// import CollectionPreview from '../../collection-preview/collection-preview.component';
// import { selectCollections } from '../../../redux/shop/shop.selectors';

import CollectionsOverview from '../../collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

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

const ShopPage = ({ match }) => 
// { console.log("match", match);
// return ( 
    ( 
      <div className="shop-page">

        {/* {
            collections. map(({id, ...CollectionProps }) => (
                <CollectionPreview key={id}
                {...CollectionProps} />
            ))
        } */}

        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    );
// }

//   }
// }

// const mapStateToProps = createStructuredSelector({
//   collections: selectCollections
// });

// export default connect(mapStateToProps)(ShopPage);
export default ShopPage;
