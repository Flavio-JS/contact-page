import { AxiosResponse } from "axios";

export const exportData = <T>(e: AxiosResponse<T>) => e.data;
