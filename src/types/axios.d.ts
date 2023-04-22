import "axios";

declare module "axios" {
  import { RawAxiosRequestConfig } from "axios";

  export interface AxiosRequestConfig extends RawAxiosRequestConfig {
    retry?: boolean;
  }
}
