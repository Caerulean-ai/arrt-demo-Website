import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Security } from "./pages/Security";
import { Solutions } from "./pages/Solutions";
import { SystemRequirements } from "./pages/SystemRequirements";
import { Testing } from "./pages/Testing";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "product", Component: Product },
      { path: "security", Component: Security },
      { path: "solutions", Component: Solutions },
      { path: "system-requirements", Component: SystemRequirements },
      { path: "testing", Component: Testing },
      { path: "contact", Component: Contact },
    ],
  },
]);
