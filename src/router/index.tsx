import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home, { RootLoader } from "./home";
import Conectate from "./conectate";
import Contacto from "./contacto";
import Nosotros from "./nosotros";

import { Outlet } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";

const Layout = () => (
  <>
    <Header />

    <main className="min-h-[100vh]">
      <Outlet />{" "}
    </main>

    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    loader: RootLoader,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "conectate",
        element: <Conectate />,
      },
      {
        path: "contacto",
        element: <Contacto />,
      },
      {
        path: "nosotros",
        element: <Nosotros />,
      },
    ],
  },

  {
    path: "*",
    element: <Home />,
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
