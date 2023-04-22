import { NextPage } from "next";
import { useRouter } from "next/router";
import { useGetCommentsByPostId } from "../../api/services/jsonPlaceholder/Comments/CommentsService.hooks";

const HomePage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: CommentsData, isLoading: loadingComments } =
    useGetCommentsByPostId({
      postId: Number(id),
      enabled: router.isReady,
      getCommentsId: `getCommentsId${typeof id === "string" ? id : ""}`,
    });
  return (
    <div>
      <p>Página de comentários do Post: {id}</p>
      <br />
      {loadingComments && <h2>Carregando posts</h2>}
      {CommentsData && (
        <>
          {CommentsData.map((comment) => (
            <div key={comment.id}>
              <h2>{comment.name}</h2>
              <h3 style={{ color: "blue" }}>{comment.email}</h3>
              <p>{comment.body}</p>
              <br />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default HomePage;
