import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {} from "../slice/userSlice";
import { getUsers } from "../services/users";

const useUsers = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((store) => store.users);
  useEffect(() => {
    dispatch(getUsers());
    return () => {};
  }, []);

  return {
    users,
    loading,
    error
  };
};

export default useUsers;
