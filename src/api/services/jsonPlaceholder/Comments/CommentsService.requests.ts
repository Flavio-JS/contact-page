import { AxiosJSONPlaceholderClient } from "../../../clients/axiosJSONPlaceholderClient";
import { exportData } from "../../../handlers/ApiHandler";
import { IComment } from "./CommentsService.types";

export const getComments = () =>
  AxiosJSONPlaceholderClient.get<IComment[]>("/comments").then(exportData);
