import useCounter from "../hook/useCounter";

const CounterCom = () => {
  const { value, handleSumar, handleRestar, handleReset } = useCounter();

  return (
    <div style={{ display: "flex", gap: 50, alignItems: "center" }}>
      <button onClick={handleSumar}>Sumar</button>
      <h4>Counter : {value}</h4>
      <button onClick={handleRestar}>Restar</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default CounterCom;
