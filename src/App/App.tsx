import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Home } from "../pages/Home/Home";
import { Signup } from "../pages/Signup/Signup";
import { Login } from "../pages/Login/Login";
import { Main } from "../pages/Main/Main";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/signup"} element={<Signup />} />
      <Route path={"/main"} element={<Main />} />
      <Route path={"/people"} element={<></>} />
      <Route path={"/starships"} element={<></>} />
    </Routes>
  );
}

export default App;