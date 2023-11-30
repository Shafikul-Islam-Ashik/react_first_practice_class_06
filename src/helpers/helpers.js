import { toast } from "react-toastify";

/**
 * check routes
 * @param {*} path
 * @param {*} route
 * @returns
 */
export const checkRoutes = (path, route) => {
  const pathArr = path.split("/");
  return pathArr.includes(route);
};

/**Create toast message
 * @param {*} msg
 * @param {*} type
 * @returns
 */
export const createToast = (msg, type = "error") => {
  return toast[type](msg);
};
