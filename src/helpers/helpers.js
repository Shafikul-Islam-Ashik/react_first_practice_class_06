export const checkRoutes = (path, route) => {
  const pathArr = path.split("/");
  return pathArr.includes(route);
};
