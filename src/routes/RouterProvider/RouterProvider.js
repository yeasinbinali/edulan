import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Courses from "../../components/Courses/Courses";
import About from "../../components/About/About";
import Blogs from "../../components/Blogs/Blogs";
import Register from "../../components/Register/Register";
import Login from "../../components/Login/Login";
import Home from "../../components/Home/Home";
import CourseDetail from "../../components/Courses/CourseDetail/CourseDetail";
import TermsAndConditions from "../../components/TermsAndConditions/TermsAndConditions";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import BlogDetails from "../../components/Blogs/BlogDetails/BlogDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          return fetch("https://edulan-server.vercel.app/subjects");
        },
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: async () => {
          return fetch("https://edulan-server.vercel.app/courses");
        },
      },
      {
        path: "/courses/:id",
        element: (
          <PrivateRoute>
            <CourseDetail></CourseDetail>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          return fetch(`https://edulan-server.vercel.app/courses/${params.id}`);
        },
      },
      {
        path: "/about",
        element: <About></About>,
        loader: async () => {
          return fetch("https://edulan-server.vercel.app/instructors");
        },
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
        loader: async () => {
          return fetch("https://edulan-server.vercel.app/blogs");
        },
      },
      {
        path: "/blogs/:id",
        element: (
          <PrivateRoute>
            <BlogDetails></BlogDetails>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          return fetch(`https://edulan-server.vercel.app/blogs/${params.id}`);
        },
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/terms",
        element: <TermsAndConditions></TermsAndConditions>,
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
