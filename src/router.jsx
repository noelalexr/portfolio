import { createBrowserRouter } from "react-router";

//LAYOUTS
import Layout from "./components/Layout";

//PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "about",
                    element: <About />,
                },
                {
                    path: "projects",
                    element: <Projects />,
                },
                {
                    path: "contact",
                    element: <Contact />,
                },
            ]
        },
    ]
)

export default router;