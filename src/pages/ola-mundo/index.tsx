import { NextPage } from "next";
import Link from "next/link";
import { useMutationGetPosts } from "../../api/services/jsonPlaceholder/Posts/PostsService.hooks";
import { BaseButton } from "../../components/BaseButton/BaseButton";

const ExamplePage: NextPage = () => {
  const {
    mutate,
    isLoading: loadingPosts,
    data: postsData,
  } = useMutationGetPosts();
  return (
    <div>
      <p>PÁGINA EXEMPLO</p>
      <BaseButton variant="filled" onClick={() => mutate()}>
        carregar posts
      </BaseButton>
      <br />
      {loadingPosts && <h2>Carregando posts</h2>}
      {postsData && (
        <>
          {postsData.map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <Link href={`/comentarios/${post.id}`}>
                <p style={{ color: "blue" }}>Comentários</p>
              </Link>
              <br />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ExamplePage;
