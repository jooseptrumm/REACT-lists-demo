// Import the axios framework.

import axios from 'axios';

// The key for the Youtube API.

const KEY = 'AIzaSyAsJKC8T_jVS_Ct2A6ZpW28KbeSR5VtN0w';

// Create an instance of an axios request and export it.

export const instance = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: KEY
  }
});
