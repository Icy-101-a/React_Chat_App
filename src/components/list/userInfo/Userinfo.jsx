import { useUserStore } from "../../../lib/userStore"
import "./userInfo.css"

const Userinfo = () => {
  const {currentUser} = useUserStore()

    return (
      <div className="userInfo">
        <div className="user">
          <img src= {currentUser.avatar || "/images/avatar.png"} alt="" />
          <h2>{currentUser.username}</h2>
        </div>
        <div className="icons">
          <img src="/images/more.png" alt="" />
          <img src="/images/video.png" alt="" />
          <img src="/images/edit.png" alt="" />
        </div>
      </div>
    )
  }

  export default Userinfo