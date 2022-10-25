import React, { useState } from "react";
import db from "./firebase.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import "./TweetBox.css";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import {GetUser} from "./firebase.js"

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const [tweetNumber, setTweetNumber] = useState(Math.random().toString(16).substr(2, 8));

  let user = GetUser();

  const sendTweet = async (e) => {
    e.preventDefault();

    // add tweet to database
    const docRef = await addDoc(collection(db, "posts"), {
      username: user[0],
      displayName: user[1] + " " + user[2],
      avatar: user[3],
      verified: user[4],
      text: tweetMessage,
      image: tweetImage,
      timestamp: serverTimestamp(),
      postId: tweetNumber
    });
    console.log("Document written with ID: ", docRef.id);

    setTweetMessage("");
    setTweetImage("");
    setTweetNumber(Math.random().toString(16).substr(2, 8));
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="" />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          placeholder="Optional: Enter image URL"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          type="text"
          className="tweetBox__imageInput"
        />
        <Button onClick={sendTweet} type="submit" className="tweetBox__button">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
