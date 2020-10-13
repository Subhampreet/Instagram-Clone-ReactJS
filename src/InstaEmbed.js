import React from "react";
import "./InstaEmbed.css";
import CopyrightIcon from '@material-ui/icons/Copyright';
import { Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  
    large: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
  
   
  }));

function InstaEmbed() {

    const classes = useStyles();


  return (
    <div className="instaEmbed">
      <img src="/images/header2.png" className="embed_image" />
      <div className="embedText">
        <h4>Hello Peeps 👋 !!!</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat💖.
          <br />
          <br />
          <b>Features : </b>
          <ul>
            <li>nisi ut aliquip ex ea commodo consequat</li>
            <li>nisi ut aliquip ex ea commodo consequat</li>
            <li>nisi ut aliquip ex ea commodo consequat</li>
            <li>nisi ut aliquip ex ea commodo consequat</li>
          </ul>
          <br />
        </p>
      </div>

      <div className="footer">
        <Avatar
          className="avatar"
          alt="subhampreet"
          src="/images/avatar.jpg"
          className={classes.large}
        />

        <div className="footer_content" >
            <h5>Subhampreet Mohanty</h5>
            <a href="https://www.instagram.com/_the.odist_/"><Button variant="contained" color="secondary" className="footer_follow" >Follow</Button></a>
        </div>

        
      </div>
      <div className="copyright">
            <CopyrightIcon fontSize="small" className="copyright_icon" />2020 INSTAGRAM-CLONE BY SUBHAMPREET 
      </div>
    </div>
  );
}

export default InstaEmbed;
