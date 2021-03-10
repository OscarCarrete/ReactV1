import axios from 'axios';
const KEY = 'AIzaSyAJ2uKtHRMLDigtWzd93EsWj4LFRNRPhmc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: KEY
  }
});