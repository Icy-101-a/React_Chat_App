// import { doc, getDoc } from 'firebase/firestore';
// import { create } from 'zustand'
// import { db } from './firebase';

// export const useUserStore = create((set) => ({
//   currentUser: null,
//   isLoading: true,
//   fetchUserInfo: async (uid) =>{
//     if(!uid) { set({currentUser: null, isLoading: false});
//                 return
//     }

//     try{
//         const docRef = doc(db, "users", uid);
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//             set({currentUser: docSnap.data(), isLoading: false})
//         }else{
//             set({currentUser: null, isLoading: false})
//         }
//     }catch (err) {
//         console.log(err)
//         return set({currentUser: null, isLoading: false});
//     }
//   }
// }))

import { doc, getDoc } from 'firebase/firestore';
import { create } from 'zustand'
import { db } from './firebase';

export const useUserStore = create((set) => ({
  currentUser: null,
  isLoading: true,
  fetchUserInfo: async (uid) => {
    // if (!uid) {
    //     return set({ currentUser: null, isLoading: false });
    // }

    try {

        if (!uid) {
            return set({ currentUser: null, isLoading: false });
        }
        const docRef = doc(db, "users", uid); 
        const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        set({ currentUser: docSnap.data(), isLoading: false });
      } else {
        set({ currentUser: null, isLoading: false });
      }
    } catch (err) {
      console.error("Error fetching user info:", err);
      set({ currentUser: null, isLoading: false });
    }
  }
}));
