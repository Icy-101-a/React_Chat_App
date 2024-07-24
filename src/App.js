import { useEffect } from 'react';
import './App.css';
import Chat from './components/chat/Chat';
import Detail from './components/detail/Detail';
import List from './components/list/List';
import Login from './components/login/Login';
import Notification from './components/notification/Notification';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebase';
import { useUserStore } from './lib/userStore';
import { useChatStore } from './lib/chatStore';


function App() {

  const {currentUser, isLoading, fetchUserInfo} = useUserStore()
  const {chatId} = useChatStore()

  // const user = false;

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await fetchUserInfo(user?.uid);
      } else {
        fetchUserInfo(null);
      }
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);
  
  // useEffect(()=>{
  //   const unSub = onAuthStateChanged(auth, (user) => {
  //     fetchUserInfo(user.uid);
  //   });

  //   return () => {
  //     unSub();
  //   };
  // }, [fetchUserInfo]);


  if (isLoading) return <div className='loading'>Loading...</div>
  
  return (
    <div className="container">
      {currentUser ? (
          <>
            <List />
            {/* user={user} */}
            {chatId && <Chat />}
            {chatId && <Detail />}
          </>
        ) : (
          <Login/>
      )}
      <Notification/>
    </div>
  );
}

export default App;
