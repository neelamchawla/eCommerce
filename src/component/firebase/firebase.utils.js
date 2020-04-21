import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC0sqCe7RWddP8nUJx8YmSJOLb-jZx8VA8",
    authDomain: "ecommerce-90a58.firebaseapp.com",
    databaseURL: "https://ecommerce-90a58.firebaseio.com",
    projectId: "ecommerce-90a58",
    storageBucket: "ecommerce-90a58.appspot.com",
    messagingSenderId: "1098068062014",
    appId: "1:1098068062014:web:9fa934a506edaac952066f",
    measurementId: "G-XZLD1F0NPJ"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    
    // ---- users collection ------
    // const userRef = firestore.doc('users/123test')
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    console.log("users",userRef);

    const collectionRef = firestore.collection('users');

    const snapShot = await userRef.get();
    // console.log("snap",snapShot);
    console.log("snap",snapShot.data());
    
    // ---- items collection ------
    const collectionSnapshot = await collectionRef.get();
    console.log({collectionSnapshot});
    // fetch all the data from backend and get access to get the list of all the users in the project --> below:
    // console.log({ collection: collectionSnapshot.docs.map(doc => doc.data()) })
    

    //to chk the userRef works comment if statement and uncomment the test data
    if (!snapShot.exists){
      const { displayName, email, password } = userAuth;
      const createAt = new Date();

      try{
        await userRef.set({
          // set this default values will be added to firebase db online, under 123Test username
          // displayName: 'Test user',
          // email: 'randomemail@gmail.com',
          // password: 'random',
          displayName,
          email,
          password,
          createAt,
          ...additionalData
        })
      }
      catch (error) {
        console.log('error creating user', error.message);
        alert(error.message);
      }
    }
    return userRef;
  };


//collection into database in firebase
export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log("collectionRef", collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    // const newDocRef = collectionRef.doc(obj.title);
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
    // console.log("newDocRef",newDocRef);
  });
  return await batch.commit();
};

 export const convertCollectionSnapshotToMap = (collectionsSnapshot) => {
  const transformedCollection = collectionsSnapshot.docs.map(docSnapshot => {
    const { title, items } = docSnapshot.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: docSnapshot.id,
      title,
      items
    };
  });
  console.log(transformedCollection);

  return transformedCollection.reduce( (accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;