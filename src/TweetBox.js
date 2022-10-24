import React, { useState } from "react";
import db from "./firebase.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import "./TweetBox.css";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = async (e) => {
    e.preventDefault();

    const docRef = await addDoc(collection(db, "posts"), {
      username: "hpatel_30",
      displayName: "Himanshu Patel",
      avatar: "",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      timestamp: serverTimestamp()
    });
    console.log("Document written with ID: ", docRef.id);

    setTweetMessage("");
    setTweetImage("");
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
