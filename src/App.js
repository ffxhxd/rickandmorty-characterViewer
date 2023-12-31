import React from "react";

import { Outlet } from "react-router";
import "./App.scss";

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <Outlet />
    </>
  );
};

export default App;
