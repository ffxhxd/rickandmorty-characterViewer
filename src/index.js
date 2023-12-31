import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Character from "./Components/Characters/Characters";
import Episodes from "./Components/Episodes/Episodes";
import Locations from "./Components/Locations/Locations";
import Home from "./Components/Home/Home";
import CharacterDetails from "./Components/CharacterDetails/CharacterDetails";

//Defining Navigation Routes for the app
const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/characters",
        element: <Character />,
      },
      {
        path: "/episodes",
        element: <Episodes />,
      },
      {
        path: "/Locations",
        element: <Locations />,
      },
      {
        path: "/characterdetails/:id",
        element: <CharacterDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);
