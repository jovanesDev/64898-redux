import usePosts from "../hook/usePosts";
import useUser from "../hook/useUser";

const User = () => {
  const user = useUser();
  const posts = usePosts(user.id);

  return (
    <>
      <button onClick={() => user.navigate(-1)}>Volver</button>
      {user.loading && !user.error && <h1>Cargando...</h1>}
      {!user.loading && user.user && (
        <div>
          <h1>{user.user?.name}</h1>
          <h3>{user.user?.email}</h3>
          <h3>{user.user?.phone}</h3>
          <button
            onClick={() =>
              window.open(`https://www.${user.user.website}`, "_blank")
            }
          >
            {user.user.website}
          </button>
          <div style={{ margin: "20px auto" }}>
            <button
              onClick={
                posts.posts.length < 1
                  ? posts.handleShowPosts
                  : posts.handleClear
              }
            >
              {posts.loading
                ? "cargando..."
                : posts.posts.length < 1
                ? "ver los posts"
                : "ocultar los posts"}
            </button>
          </div>
          {posts.posts.length > 0 && (
            <div>
              {posts.posts.map((post, index) => (
                <div key={index}>
                  <h4>{post.title}</h4>
                  <p>{post.body}</p>
                  <button>ver los comentarios</button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default User;
