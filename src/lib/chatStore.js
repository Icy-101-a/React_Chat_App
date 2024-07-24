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
import { useUserStore } from './userStore';

export const useChatStore = create((set) => ({
  chatId: null,
  user: null,
  isCurrentUserBlocked: false,
  isReceiverBlocked: false,
  changeChat: (chatId, user) => {
    const currentUser = useUserStore.getState().currentUser;

    // CHECK IF CURRENT USER IS BLOCKED
    if (user.blocked.includes(currentUser.id)) {
      return set({
        chatId,
        user: null,
        isCurrentUserBlocked: true,
        isReceiverBlocked: false,
      });
    }

    // CHECK IF RECEIVER IS BLOCKED
    else if (currentUser.blocked.includes(user.id)) {
      return set({
        chatId,
        user: user,
        isCurrentUserBlocked: false,
        isReceiverBlocked: false,
      });
    } else {
      return set({
        chatId,
        user,
        isCurrentUserBlocked: false,
        isReceiverBlocked: false,
      });
    }

  },
  
  changeBlock: () => {
    set(state => ({ ...state, isReceiverBlocked: !state.isReceiverBlocked }));
  }
}));

