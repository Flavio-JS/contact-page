import { AxiosJSONPlaceholderClient } from "../../../clients/axiosJSONPlaceholderClient";
import { exportData } from "../../../handlers/ApiHandler";
import { IPost } from "./PostsService.types";

export const getPosts = () =>
  AxiosJSONPlaceholderClient.get<IPost[]>("/posts").then(exportData);
