import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Home } from "../pages/Home/Home";
import { Signup } from "../pages/Signup/Signup";
import { Login } from "../pages/Login/Login";

import { People } from "../pages/People/People";
import { PeopleDetails } from "../pages/People/detailpeople/detail-people";
import { Starship } from "../pages/Starship/Starship";
import { DetailShip } from "../pages/Starship/DetailShip/DetailShip";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/signup"} element={<Signup />} />

      <Route path={"/peopletest"} element={<People />} />
      <Route path="/people/:index" element={<PeopleDetails />} />

      <Route path={"/starship"} element={<Starship />} />
      <Route path="/starship/:index" element={<DetailShip />} />

      <Route path={"/starships"} element={<></>} />
    </Routes>
  );
}

export default App;
