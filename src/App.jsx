import { RouterProvider } from "react-router-dom";
import "./App.scss";
import router from "./routers/routers";
import { ToastContainer } from "react-toastify";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

function App() {
  const [progress, setProgress] = useState(100);
  return (
    <>
      <LoadingBar
        color="#0089ec"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        style={{ padding: "2px 0px" }}
      />
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        theme="light"
      />
    </>
  );
}

export default App;
