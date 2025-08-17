import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faHashtag,
  faBell,
  faEnvelope,
  faBookmark,
  faListUl,
  faUser,
  faEllipsis,
  faRightFromBracket
  
  
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/authService";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    navigate("/login", { replace: true });
  };

  return (
    <div >

  <nav className="mt-5">
    <div className="link-active mb-8">
      <FontAwesomeIcon icon={faHouse} className="text-xl" />
      <span className="icon">Home</span>
    </div>
    <div className="link mb-8">
      <FontAwesomeIcon icon={faHashtag} className="text-xl" />
      <span className="icon">Explore</span>
    </div>
    <div className="link mb-8">
      <FontAwesomeIcon icon={faBell} className="text-xl" />
      <span className="icon">Notifications</span>
    </div>
    <div className="link mb-8">
      <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
      <span className="icon">Messages</span>
    </div>
    <div className="link mb-8">
      <FontAwesomeIcon icon={faBookmark} className="text-xl" />
      <span className="icon">Bookmarks</span>
    </div>
    <div className="link mb-8">
      <FontAwesomeIcon icon={faListUl} className="text-xl" />
      <span className="icon">Lists</span>
    </div>
    <div className="link mb-8">
      <FontAwesomeIcon icon={faUser} className="text-xl" />
      <span className="icon">Profile</span>
    </div>
    <div className="link mb-8">
      <FontAwesomeIcon icon={faEllipsis} className="text-xl" />
      <span className="icon">More</span>
    </div>
      <div
          onClick={handleLogout}
          className="link mb-8 cursor-pointer "
        >
          <FontAwesomeIcon icon={faRightFromBracket} className="text-xl" />
          <span className="icon">Logout</span>
        </div>
  </nav>
</div>

  )
}

export default Sidebar
