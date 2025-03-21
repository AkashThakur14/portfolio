import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './App.css';
import { AppLayout } from "./components/layout/AppLayout";

//imports pages 
import {Home} from "../src/pages/Home";
import {About} from "../src/pages/About";
import {Projects} from "../src/pages/Projects";
import {Services} from "../src/pages/Services";
import {Contact} from "../src/pages/Contact";

const router = createBrowserRouter([{
  path: "/",
  element: <AppLayout />,
  children: [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/services",
      element: <Services />
    },
    {
      path: "/projects",
      element: <Projects />
    },
    {
      path: "contact",
      element: <Contact />
    }
  ]

}]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
