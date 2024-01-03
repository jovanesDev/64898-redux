import { useDispatch, useSelector } from "react-redux";
import { getPostsByUser } from "../services/posts";
import { useEffect } from "react";
import { clearPosts } from "../slice/postsSlice";

const usePosts = (userId) => {
  const { posts, loading, error } = useSelector((store) => store.posts);
  const dispatch = useDispatch();
  const handleShowPosts = () => dispatch(getPostsByUser(userId));
  const handleClear = () => dispatch(clearPosts())

  useEffect(() => {
    return () => {
        handleClear()
    };
  }, []);

  return {
    posts,
    loading,
    error,
    handleShowPosts,
    handleClear
  };
};

export default usePosts;
