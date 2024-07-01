// src/components/SpotifyAuth.js

import React, { useEffect } from 'react';
import { authenticateSpotify, setAccessToken } from '../services/spotify';

const SpotifyAuth = ({ clientId, redirectUri, onAccessToken }) => {
  useEffect(() => {
    const hash = window.location.hash.substring(1).split('&').reduce((acc, item) => {
      const parts = item.split('=');
console.log(parts);
      acc[parts[0]] = parts[1];
      return acc;
    }, {});

    const token = hash.access_token;
    console.log(hash);
    if (token) {
      setAccessToken(token);
      onAccessToken(token);
    } else {
      authenticateSpotify(clientId, redirectUri);
    }
  }, [clientId, redirectUri, onAccessToken]);

  return null;
};

export default SpotifyAuth;
