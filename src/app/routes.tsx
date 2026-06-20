import { createBrowserRouter } from "react-router-dom";
import { SiteLayout } from "../components/layout/SiteLayout";
import { AboutPage } from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { ProjectDetailPage } from "../pages/ProjectDetailPage";
import { ProjectsPage } from "../pages/ProjectsPage";
import { ServicesPage } from "../pages/ServicesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "projects",
        element: <ProjectsPage />
      },
      {
        path: "projects/:slug",
        element: <ProjectDetailPage />
      },
      {
        path: "services",
        element: <ServicesPage />
      },
      {
        path: "about",
        element: <AboutPage />
      },
      {
        path: "contact",
        element: <ContactPage />
      },
      {
        path: "not-found",
        element: <NotFoundPage />
      },
      {
        path: "*",
        element: <NotFoundPage />
      }
    ]
  }
]);
