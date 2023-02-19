import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";

const firebaseConfig = {
    apiKey: 'AIzaSyBgyhuKBbb_oVCllihB2GZ2M-cVVIXFn58',
    authDomain: '266576880845-ghm618lh89745utjjlr8m2rbl3gkcbik.apps.googleusercontent.com',
    projectId: 'project-program-44d5b',
    storageBucket: 'project-program-44d5b.appspot.com',
    appId: "1:266576880845:android:232cf7336a7e602303b584"
  };


  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);
  export const storage = getStorage(app);
