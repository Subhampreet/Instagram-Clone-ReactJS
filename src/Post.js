import React from "react";
import { Avatar } from "@material-ui/core";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import "./Post.css";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';

import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';

function Post({username, caption, imageUrl}) {
  return (
    <div className="post">
      {/* header => avatar + username */}
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="subhampreet"
          src="/images/avatar.jpg"
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
