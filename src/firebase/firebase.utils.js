import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDStGRUN86ji2Qdnh3X81tT_NHLDmUP5pE",
  authDomain: "crwn-db-c318a.firebaseapp.com",
  databaseURL: "https://crwn-db-c318a.firebaseio.com",
  projectId: "crwn-db-c318a",
  storageBucket: "crwn-db-c318a.appspot.com",
  messagingSenderId: "91531866676",
  appId: "1:91531866676:web:5b18f2e5e28643a5e25061"
};

export const createUserProfileDocument = async (
  userAuthInfo,
  additionalData
) => {
  if (!userAuthInfo) return;
  const userRefInfo = firestore.doc(`users/${userAuthInfo.uid}`);
  const snapShotInfo = await userRefInfo.get();

  if (!snapShotInfo.exists) {
    const { displayName, email } = userAuthInfo;
    const createdAt = new Date();
    try {
      await userRefInfo.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log(err);
    }
  }
  return userRefInfo;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
