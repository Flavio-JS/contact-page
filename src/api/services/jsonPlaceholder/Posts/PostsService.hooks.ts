import { useMutation } from "@tanstack/react-query";
import { getPosts } from "./PostsService.requests";

export const useMutationGetPosts = () =>
  useMutation({
    mutationFn: () => getPosts(),
  });
