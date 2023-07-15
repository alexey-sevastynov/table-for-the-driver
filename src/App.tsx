import { Route, Routes } from "react-router-dom";

import { ROUTES } from "./constants";

import Home from "./pages/home/Home";
import Mounths from "./pages/mounths/Mounths";
import Add from "./pages/add/Add";
import Day from "./pages/day/Day";
import Edit from "./pages/edit/Edit";
import Setup from "./pages/setup/Setup";
import Statistics from "./pages/statistics/Statistics";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.MOUNTHS} element={<Mounths />} />
        <Route path={ROUTES.ADD} element={<Add />} />
        <Route path={ROUTES.DAY} element={<Day />} />
        <Route path={ROUTES.EDIT} element={<Edit />} />
        <Route path={ROUTES.SETUP} element={<Setup />} />
        <Route path={ROUTES.STATISTICS} element={<Statistics />} />
      </Routes>
    </div>
  );
}

export default App;
