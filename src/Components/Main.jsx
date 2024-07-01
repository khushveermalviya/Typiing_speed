// src/Main.js

import React, { useState } from "react";
import { faker } from '@faker-js/faker';
import Timer from "./Timer";
import Generate from "./Generate";
import RestartButton from "./Restart";
import Result from "./Result";
import UserTyping from "./UserTyping";
import SpotifyAuth from "./SpotifyAuth.jsx";
import SpotifyPlayer from "./SpotifyPlayer.jsx";

const Main = () => {
  const generateWords = () => faker.lorem.words(100);
  const [word, setWord] = useState(generateWords());
  const [spotifyToken, setSpotifyToken] = useState(null);

  const handleRestart = () => {
    setWord(generateWords());
  };

  return (
    <div className="w-screen">
      <SpotifyAuth 
        clientId="09e5144a745547e3bfb14358e9c37c74" 
        redirectUri="http://localhost:5173/callback" 
        onAccessToken={setSpotifyToken} 
      />
      {spotifyToken && <SpotifyPlayer token={spotifyToken} />}
      <SpotifyPlayer />
      <Timer timeLeft={30} />
      {/* <UserTyping className="absolute text-yellow-500 z-1" userinput="Hello" /> */}
      <Generate words={word} />
      <RestartButton
        className="mx-auto mt-10 text-slate-500"
        onRestart={handleRestart}
      />
      <Result 
      error={0}
        total={100}
      accuracy={100}
      />
    </div>
  );
};

export default Main;
