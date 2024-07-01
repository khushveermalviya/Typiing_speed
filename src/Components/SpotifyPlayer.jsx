// src/components/SpotifyPlayer.js

import React, { useEffect, useState } from 'react';
import spotifyApi from '../services/spotify';

const SpotifyPlayer = ({ token }) => {
  const [deviceId, setDeviceId] = useState(null);

  useEffect(() => {
    if (window.Spotify) {
      const player = new window.Spotify.Player({
        name: 'Typing Clone Player',
        getOAuthToken: cb => { cb(token); },
      });

      player.addListener('ready', ({ device_id }) => {
        setDeviceId(device_id);
      });

      player.connect();
    }
  }, [token]);

  const play = () => {
    spotifyApi.play({
      device_id: deviceId,
      uris: ['spotify:track:21WGzPtMAh0JaU96gGsADC'] // Replace with your desired track URI
    });
  };

  return (
    <div>
      <button onClick={play}>Play</button>
    </div>
  );
};

export default SpotifyPlayer;
