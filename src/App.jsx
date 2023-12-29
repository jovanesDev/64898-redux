// import './App.css'
import { Provider } from "react-redux";
import Navigation from "./routes/Navigation";
import store from "./app/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </>
  );
}

export default App;
