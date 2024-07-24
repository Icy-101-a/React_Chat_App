// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage} from "firebase/storage";


// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: "reactchatapp-7a592.firebaseapp.com",
//   projectId: "reactchatapp-7a592",
//   storageBucket: "reactchatapp-7a592.appspot.com",
//   messagingSenderId: "125422764290",
//   appId: "1:125422764290:web:b6a640c806e777530e421b"
// };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app)

// Example usage in firebase.js or equivalent
// firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_API_KEY,
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);



// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: "reactchatapp-7a592.firebaseapp.com",
//   projectId: "reactchatapp-7a592",
//   storageBucket: "reactchatapp-7a592.appspot.com",
//   messagingSenderId: "125422764290",
//   appId: "1:125422764290:web:b6a640c806e777530e421b"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);
// const storage = getStorage(app);

// export { auth, db, storage };

