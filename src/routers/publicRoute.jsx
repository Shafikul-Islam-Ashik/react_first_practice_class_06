import Home from "../pages/home/Home";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import Layouts from "../components/layouts/Layouts";

export const publlicRoute = [
  {
    element: <Layouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
];
