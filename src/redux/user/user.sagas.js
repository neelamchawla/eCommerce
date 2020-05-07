import { takeLatest, put, all, call } from "redux-saga/effects";

import UserActionTypes from "./user.types";
// import { googleSignInSuccess, googleSignInFailure, emailSignInSuccess, emailSignInFailure } from "./user.action";
import { 
    signInSuccess, signInFailure,
    signOutSuccess, signOutFailure,
    signUpSuccess, signUpFailure
     } from "./user.action";

import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from "../../component/firebase/firebase.utils";


export function* getSnapshotFromUserAuth(userAuth, additionalData){
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapshot = yield userRef.get();
        
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
        );
        console.log("userRef",userRef);
    }   catch (error) {
        yield put(signInFailure(error));
    }
}

//this function will trigger whn onClick btn in sign-in page is pressed. moving this funtn from App.js "cdm" listener to here.
export function* signInWithGoogle() {
    try{
        const { user } = yield auth.signInWithPopup(googleProvider);
        // const userRef = yield call(createUserProfileDocument, user);
        // const userSnapshot = yield userRef.get();
        
        // yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
        // );

        yield getSnapshotFromUserAuth(user);
        // console.log(userRef);
    } catch (error) {
        yield put(signInFailure(error));
    }
};

export function* signInWithEmail({ payload: { email, password }}) {
    try{
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        // const userRef = yield call(createUserProfileDocument, user);
        // const userSnapshot = yield userRef.get();
        
        // yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
        // );

        yield getSnapshotFromUserAuth(user);

        // console.log(userRef);
    } catch (error) {
        yield put(signInFailure(error));
    }
};

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch(error) {
        yield put(signInFailure(error));
    }
};

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch(error) {
        yield put(signOutFailure(error));
    }
};

//signUp(userCredentials)
export function* signUp({payload: { email, password, displayName }}) {
try {
       const { user } = yield auth.createUserWithEmailAndPassword(email,password);
        yield put(signUpSuccess({ user, additionalData: {displayName} }));
    } catch(error) {
        yield put(signUpFailure(error));
    }
};

export function* signInAfterSignUp({payload: { user, additionalData }}) {
    yield getSnapshotFromUserAuth(user, additionalData);
};

// ---------------------------------------------

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
};

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
};

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
};

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
};

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
};

export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
};

// ---------------------------------------------

export function* userSagas() {
    yield all(
        [call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(isUserAuthenticated),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
        ]);
};