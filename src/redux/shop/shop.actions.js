import ShopActionTypes from "./shop.types";
// import { firestore, convertCollectionSnapshotToMap } from "../../component/firebase/firebase.utils";

// export const updateCollections = (collectionsMap) => ({
//     type: ShopActionTypes.UPDATE_COLLECTIONS,
//     payload: collectionsMap
// });

// after adding thunk

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsFailure = (errorMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});

// export const fetchCollectionsStartAsync = () => {
//     return dispatch => {
    //     const collectionRef = firestore.collection('collections');
    //     dispatch(fetchCollectionsStart());

    //     collectionRef.get()
    //     .then(snapshot => {
    //     const collectionsMap = convertCollectionSnapshotToMap(snapshot);
    //     // updateCollections(collectionsMap);   //b4
    //     dispatch(fetchCollectionsSuccess(collectionsMap));                     //aft
        
    //     // console.log(collectionsMap);
    //     //   this.setState({ loading: false });
    //   })
    //   .catch(error => dispatch(fetchCollectionsFailure(error.message))
    //   );
//     }
// }