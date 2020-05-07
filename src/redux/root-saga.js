import { all, call } from 'redux-saga/effects';

// import { fetchCollectionsStart  } from './shop/shop.sagas';      // replace "fetchCollectionsStart" with "shopSagas"
import { shopSagas  } from './shop/shop.sagas';

import { userSagas } from './user/user.sagas';
import { cartSagas } from './cart/cart.sagas';

export default function* rootSaga(){
    yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}

//all -> it takes an array of sagas. if we want to render three different sagas, then we had three sagas run, for that we would hv to yield these multiple times. but using "all([call(... all the sagas)])" we can call multiple sagas inside of the array and initialize them all separately.
// this pattern will allow us to add all the sagas to the root-saga, we dnt hv to add more saga middleware to run calls.