// import { FaUserSecret } from "react-icons/fa";
import Layouts from "../components/layouts/Layouts";
import Admin from "../pages/admin/Admin";
import Category from "../pages/admin/pages/Category";
import Posts from "../pages/admin/pages/Posts";
import Roles from "../pages/admin/pages/Roles";
import Users from "../pages/admin/pages/users";

export const privateRoute = [
  {
    element: <Layouts />,
    children: [
      {
        path: "/admin",
        element: <Admin />,
        children: [
          {
            path: "users",
            element: <Users />,
          },
          {
            path: "posts",
            element: <Posts />,
          },
          {
            path: "roles",
            element: <Roles />,
          },
          {
            path: "category",
            element: <Category />,
          },
        ],
      },
    ],
  },
];
