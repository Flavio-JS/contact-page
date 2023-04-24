import axios from "axios";

const AxiosRandomUserClientClient = axios.create({
  baseURL: "https://randomuser.me/api/?results=",
});

export { AxiosRandomUserClientClient };
