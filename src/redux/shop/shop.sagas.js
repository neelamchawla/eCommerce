// listen to every action of specific type instead to "takeEvery" use "takeLatest" to get the last/latest output 
import { takeLatest, all, call, put } from 'redux-saga/effects';

// --- aftr moving data from shop.action, bring tools into ---
import { firestore, convertCollectionSnapshotToMap } from '../../component/firebase/firebase.utils';

import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

//action of specific action type
import ShopActionTypes from './shop.types';


//generator function, this do the asynchronous code 
//yield is imp to be used in generator function
export function* fetchCollectionsAsync() {
    yield console.log('I am Fired');

    //--- moving this from shop.actions, but customising it as per generator function requirements. using try and catch method.

    try{
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
    
    yield put(fetchCollectionsSuccess(collectionsMap));
    }
    catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
};

// saga function, it pause whenevr a specific action type is fired, that we want it in a function
// we only want the most recent one that we got / fired at every yield. ie. yield control over the saga back to middleware to saga middleware
// "takeEvery" is listener hvng 2 actions, and to trigger the functions
export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    );
};

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)]);
};