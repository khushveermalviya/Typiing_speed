// src/services/spotify.js

import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

export const authenticateSpotify = (clientId, redirectUri) => {
  const scopes = [
    'streaming',
    'user-read-email',
    'user-read-private',
    'user-modify-playback-state',
    'user-read-playback-state',
    'user-library-read',
    'user-library-modify',
  ];
  const authUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&scope=${scopes.join('%20')}&redirect_uri=${redirectUri}`;

  window.location = authUrl;
};

export const setAccessToken = (token) => {
  spotifyApi.setAccessToken(token);
};

export default spotifyApi;
