import React from 'react';
import "./Header.css";
// import HomeIcon from '@material-ui/icons/Home';
// import FlashOnIcon from '@material-ui/icons/FlashOn';
// import LiveTvIcon from '@material-ui/icons/LiveTv';
// import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
// import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';

function Header({setSearchItem}) {
    // const [searchItem, setSearchItem] = useState("");
    // console.log(searchItem);
    return (
        <div className="header">
            <img src='https://fontmeme.com/permalink/210508/0f8f937a5838e9627f942ad50fbcdcd2.png' alt="" />
            <div className="header_right">
                <div className="header__search">
                    <SearchIcon />
                    <p><input placeholder="Search" type="text" onChange={(e)=>setSearchItem(e.target.value)} /></p>
                </div>
            </div>
            {/* <div className="header__icons">
                <div className="header__icon header__icon--active">
                    <HomeIcon />
                    <p>Home</p>
                </div>
                <div className="header__icon">
                    <FlashOnIcon />
                    <p>Trending</p>
                </div>
                <div className="header__icon">
                    <LiveTvIcon />
                    <p>Verified</p>
                </div>
                <div className="header__icon">
                    <VideoLibraryIcon />
                    <p>Collections</p>
                </div>
                <div className="header__icon">
                    <SearchIcon />
                    <p>Search</p>
                </div>
                <div className="header__icon">
                    <PersonOutlinedIcon />
                    <p>Account</p>
                </div>
            </div> */}
            
        </div>
    )
}

export default Header
