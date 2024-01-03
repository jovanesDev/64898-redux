import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams} from "react-router-dom";
import { getUser } from "../services/users";

const useUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, loading, user } = useSelector((store) => store.users);
  useEffect(() => {
    dispatch(getUser(id));
    return () => {};
  }, []);
  return {
    navigate,
    error,
    loading,
    user,
    id
  };
};

export default useUser;
