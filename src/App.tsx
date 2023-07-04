import { Route, Routes } from "react-router-dom";

import { ROUTES } from "./constants";

import Home from "./pages/home/Home";
import Mounths from "./pages/mounths/Mounths";
import Add from "./pages/add/Add";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.MOUNTHS} element={<Mounths />} />
        <Route path={ROUTES.ADD} element={<Add />} />
      </Routes>
    </div>
  );
}

export default App;
