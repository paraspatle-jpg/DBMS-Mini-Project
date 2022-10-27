import axios from "axios";

const instance = axios.create({
  baseURL: "https://shazam.p.rapidapi.com",
});

instance.defaults.headers.common["X-RapidAPI-Key"] =
  "9762fb6565msh6d0e62398674ae2p19a293jsn2458c6544c8f";
instance.defaults.headers.common["X-RapidAPI-Host"] = "shazam.p.rapidapi.com";

export default instance;