import { createBrowserRouter } from "react-router";
import Home from "../Pagelayout/Home";
import CategoriesNews from "../Components/CategoriesNews.jsx/CategoriesNews";
import Authlayout from "../Pagelayout/Authlayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import SingleNews from "../Pages/SingleNews/SingleNews";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      {
        path: "cat/:id",
        loader: () => fetch("/news.json"),
        element: <CategoriesNews></CategoriesNews>,
      },
    ],
  },
  {
    path: "about",
    element: <h1>about page</h1>,
  },
  {
    path: "auth",
    element: <Authlayout></Authlayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "news-details/:id",
    loader: () => fetch("/news.json"),
    element: <SingleNews></SingleNews>,
  },
]);

export default router;
