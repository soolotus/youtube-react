import axios from "axios";

export default class FakeYoutubeClient {
  async search({ params }) {
    return params.videoId
      ? axios.get("/videos/related.json")
      : axios.get("/videos/search.json");
  }
  async videos() {
    return axios.get("/videos/popular.json");
  }
  async channels() {
    return axios.get("/videos/live_event.json");
  }
}
