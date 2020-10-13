import React, {useState} from "react";
import { Avatar } from "@material-ui/core";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import "./Post.css";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';

import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';

function Post({username, caption, imageUrl}) {

  const avatars = [
    {
      ava: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      ava: "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    },
    {
      ava: "https://meetanentrepreneur.lu/wp-content/uploads/2019/08/profil-linkedin.jpg"
    },
    {
      ava: "https://i.pinimg.com/originals/76/80/4f/76804f67ba38f85e4802d250e5b15504.jpg"
    },
    {
      ava: "https://i.pinimg.com/originals/34/f2/50/34f250635ed02218356595ea6d730518.jpg"
    },
  ];

  const [avatar, setAvatar] = useState(0);

  const randomAvatar = e => {
    const len = avatars.length;
    setAvatar(Math.floor(Math.random() * len));
  };
  

  return (
    
    <div className="post">

      {/* header => avatar + username */}
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="subhampreet"
          src={avatars[avatar].ava}
        />

        <h3>{username}</h3>
        <div className="MoreHorizIcon" ><MoreHorizIcon /></div>
        
        

      </div>


      {/* Image */}
      <img className="post__image" src={imageUrl} />

      <div className="likeShare" >
            <FavoriteBorderIcon className="likeShare-item" fontSize="medium"/>
            <ModeCommentOutlinedIcon className="likeShare-item"  fontSize="medium"/>
            <NearMeOutlinedIcon className="likeShare-item"   fontSize="medium"/>
            <TurnedInNotOutlinedIcon className="likeShare-item-save" fontSize="medium" />

      </div>

      {/* username + caption */}
      <h5 className="post__text">
        {" "}
        <strong>{username} </strong>{caption}
      </h5>
    </div>
  );
}

export default Post;
