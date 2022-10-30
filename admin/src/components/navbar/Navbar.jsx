import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import ListIcon from '@mui/icons-material/List';
import LanguageIcon from '@mui/icons-material/Language';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

function Navbar() {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="left">
          <input type="text" placeholder='Serch ....' className="input" />
          <SearchIcon/>
        </div>
        <div className="right">
        <div className="item">
        <LanguageIcon/>
        English
        </div>
        <div className="item">
        <ChatBubbleOutlineOutlinedIcon/>
        <div className="badge">1</div>
        </div>
        <div className="item">
        <NotificationsNoneOutlinedIcon/>
        <div className="badge">2</div>
        </div>
        <div className="item">
        <ListIcon/>
        </div>
        <div className="item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwluksYekjsg2CvUL4PJNKgB7IGBc-12EovQ&usqp=CAU" alt="" className="img" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar