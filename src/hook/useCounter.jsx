import { useDispatch, useSelector } from "react-redux";
import { sumar, reset, restar } from "../slice/counterSlice";

const useCounter = () => {
  const { value } = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  const handleSumar = () => dispatch(sumar(5))
  const handleRestar = () => dispatch(restar(5))
  const handleReset = () => dispatch(reset())

  return {
    value,
    handleSumar,
    handleRestar,
    handleReset,
  };
};

export default useCounter;
