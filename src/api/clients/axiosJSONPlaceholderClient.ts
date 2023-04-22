import axios from "axios";

const AxiosJSONPlaceholderClient = axios.create({
  baseURL:
    process.env.JSON_PLACEHOLDER_BASE_URL ||
    "https://jsonplaceholder.typicode.com/",
});

export { AxiosJSONPlaceholderClient };
