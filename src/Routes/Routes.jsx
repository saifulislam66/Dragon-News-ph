import { createBrowserRouter } from "react-router";
import Home from "../Pagelayout/Home";
import CategoriesNews from "../Components/CategoriesNews.jsx/CategoriesNews";

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
]);

export default router;
