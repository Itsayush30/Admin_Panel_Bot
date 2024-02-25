import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignInPage from "./SignInPage";
import AdminPanel from "./AdminPanel";
import Body from "./Body";

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
