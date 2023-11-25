import { Link, Outlet, useLocation } from "react-router-dom";
import PageHeader from "../../components/pageHeader/PageHeader";

import "./Admin.scss";
import { checkRoutes } from "../../helpers/helpers";

const Admin = () => {
  const location = useLocation();

  return (
    <>
      <PageHeader title="Admin" />

      <div className="panel">
        <div className="container panel-container">
          <div className="left">
            <ul>
              <li>
                <Link
                  to="users"
                  className={
                    checkRoutes(location.pathname, "users") ? "active" : ""
                  }
                >
                  Users
                </Link>
              </li>
              <li>
                <Link
                  to="posts"
                  className={
                    checkRoutes(location.pathname, "posts") ? "active" : ""
                  }
                >
                  Posts
                </Link>
              </li>
              <li>
                <Link
                  to="category"
                  className={
                    checkRoutes(location.pathname, "category") ? "active" : ""
                  }
                >
                  Category
                </Link>
              </li>
              <li>
                <Link
                  to="roles"
                  className={
                    checkRoutes(location.pathname, "roles") ? "active" : ""
                  }
                >
                  Roles
                </Link>
              </li>
            </ul>
          </div>
          <div className="right">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
