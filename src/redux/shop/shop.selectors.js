import { createSelector } from "reselect";

const selectShop = state => state.shop;

// after changing SHOP_DATA from array to object, we can directly use collectionUrlParam in collections
// const COLLECTION_ID_MAP = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5
// }

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    // collections => Object.keys(collections).map(key => collections[key])
    // after removing SHOP_DATA from the project
    collections => collections 
    ? Object.keys(collections).map(key => collections[key])
    : []
);

export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        // collections => collections.find(collection => collection.cid === COLLECTION_ID_MAP[collectionUrlParam])

        // after removing SHOP_DATA from the project
        // collections => collections[collectionUrlParam]
        collections => (collections
        ? collections[collectionUrlParam]
        : null)
);