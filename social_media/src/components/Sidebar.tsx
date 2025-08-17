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
  
  
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
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
  </nav>
</div>

  )
}

export default Sidebar
