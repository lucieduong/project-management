import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { GetInvolved } from "./pages/GetInvolved";
import { Policy } from "./pages/Policy";
import { Resources } from "./pages/Resources";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "get-involved", Component: GetInvolved },
      { path: "policy", Component: Policy },
      { path: "resources", Component: Resources },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
