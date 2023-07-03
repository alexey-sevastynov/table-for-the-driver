import { Route, Routes } from "react-router-dom";

import { ROUTES } from "./constants";

import Home from "./pages/home/Home";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
