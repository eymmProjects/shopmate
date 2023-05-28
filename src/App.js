import { Header2 } from "./components/Header2";
import { Routes } from "react-router-dom";
import "./App.css";
import { AllRoutes } from "./routes/AllRoutes";
import { ItemList } from "./Pages";
function App() {
  return (
    <div className="App">
      <Header2 />
      <AllRoutes />
    </div>
  );
}

export default App;
