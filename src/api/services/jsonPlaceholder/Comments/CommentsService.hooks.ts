import { useQuery } from "@tanstack/react-query";
import { getComments } from "./CommentsService.requests";

export const useGetCommentsByPostId = ({
  postId,
  getCommentsId,
  enabled,
}: {
  getCommentsId: string;
  enabled: boolean;
  postId: number;
}) =>
  useQuery(["getCommentsId", getCommentsId], () => getComments(), {
    enabled,
    select: (Comments) => {
      return Comments.filter((Comment) => Comment.postId === postId);
    },
  });
