import { createBrowserRouter } from "react-router-dom";
import { publlicRoute } from "./publicRoute";
import { privateRoute } from "./privateRoute";

const router = createBrowserRouter([...publlicRoute, ...privateRoute]);

export default router;
