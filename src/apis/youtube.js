import axios from "axios";
const KEY = "AIzaSyDhQA9loMGDEtaeECw1eKkyiqjk95WF-Pg";

export const baseParams = {
  part: "snippet",
  maxResults: 5,
  key: KEY
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});
