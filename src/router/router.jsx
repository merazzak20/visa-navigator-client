import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../pages/Home";
import Allvisas from "../pages/Allvisas";
import Addvisas from "../pages/Addvisas";
import Application from "../pages/Application";
import Error from "../pages/Error";
import VisaDetail from "../components/VisaDetail";
import MyAddedVisa from "../pages/MyAddedVisa";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(`https://assignment10-server-two.vercel.app/visas/limited`),
      },
      {
        path: "/allvisas",
        element: <Allvisas></Allvisas>,
        loader: () => fetch(`https://assignment10-server-two.vercel.app/visas`),
      },
      {
        path: "/allvisas/:id",
        element: <VisaDetail></VisaDetail>,
        loader: ({ params }) =>
          fetch(
            `https://assignment10-server-two.vercel.app/visas/${params.id}`
          ),
      },
      {
        path: "/addvisas",
        element: (
          <PrivateRouter>
            <Addvisas></Addvisas>
          </PrivateRouter>
        ),
      },
      {
        path: "/myAddVisas",
        element: (
          <PrivateRouter>
            <MyAddedVisa></MyAddedVisa>
          </PrivateRouter>
        ),
        loader: () => fetch(`https://assignment10-server-two.vercel.app/visas`),
      },
      {
        path: "/application",
        element: (
          <PrivateRouter>
            <Application></Application>
          </PrivateRouter>
        ),
        loader: async () => {
          const [visas, applications] = await Promise.all([
            fetch(`https://assignment10-server-two.vercel.app/visas`).then(
              (res) => res.json()
            ),
            fetch(
              `https://assignment10-server-two.vercel.app/applications`
            ).then((res) => res.json()),
          ]);
          return { visas, applications };
        },
        // loader: () => fetch("https://assignment10-server-two.vercel.app/applications"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
