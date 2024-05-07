import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./Component/Header/Header";

function App() {
  return (
    <>
      <h2>Simple CURD Oparetion with DataBase and Backend Technology </h2>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
}

export default App;
