import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignInPage from "./components/SignInPage";
import AdminPanel from "./components/AdminPanel";
import Body from "./components/Body";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <SignInPage />,
      },
      {
        path: "adminpanel",
        element: <AdminPanel />,
      },
    ],
  },
]);
function App() {
  return (
    <div>
     <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;

/** <ApiKeyForm /> */
