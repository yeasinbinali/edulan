import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Courses from "../../components/Courses/Courses";
import About from "../../components/About/About";
import Blogs from "../../components/Blogs/Blogs";
import Register from "../../components/Register/Register";
import Login from "../../components/Login/Login";
import Home from "../../components/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async() => {
          return fetch('http://localhost:5000/subjects');
        }
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "*",
    element: <div>This page is no route</div>,
  },
]);
