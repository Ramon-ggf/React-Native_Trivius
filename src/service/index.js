import axios from "axios";

class ContentService {
  constructor() {
    this.apiHandler = axios.create({
      baseURL: "https://opentdb.com",
    });
  }

  getAll = () => this.apiHandler.get("/api.php?amount=50");
}

export default ContentService;
