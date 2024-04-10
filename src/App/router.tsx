import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Home } from "../pages/Home/Home";
import { Signup } from "../pages/Signup/Signup";
import { Login } from "../pages/Login/Login";
import PeoplePage from "../pages/PeoplePage/PeoplePage";
import PersonDetails from "../pages/PersonDetail/PersonDetail";
import { PeopleTestpage } from "../pages/PeopleTestpage/PeopleTestpage";
import { PeopleDetails } from "../pages/PeopleTestpage/detailpeople/detail";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/signup"} element={<Signup />} />
      <Route path={"/people-page"} element={<PeoplePage />} />
      <Route path={"/peopletest"} element={<PeopleTestpage />} />
      <Route path="/people/:index" element={<PeopleDetails />} />
      <Route path="/person/:id" element={<PersonDetails />} />
      <Route path={"/starships"} element={<></>} />
    </Routes>
  );
}

export default App;
