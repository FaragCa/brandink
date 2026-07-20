import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { ProjectDetails } from "./pages/ProjectDetails";
import { Contact } from "./pages/Contact";
import { Services } from "./pages/Services";
import { PackageDetails } from "./pages/PackageDetails";
import { Login } from "./pages/Login";

import { DashboardLayout } from "./dashboard/DashboardLayout";
import { Overview } from "./dashboard/Overview";
import { Project } from "./dashboard/Project";
import { Approvals } from "./dashboard/Approvals";
import { Files } from "./dashboard/Files";
import { Messages } from "./dashboard/Messages";
import { Billing } from "./dashboard/Billing";
import { SectionPage } from "./dashboard/SectionPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "projects", Component: Projects },
      { path: "projects/:id", Component: ProjectDetails },
      { path: "contact", Component: Contact },
      { path: "services", Component: Services },
      { path: "packages/:id", Component: PackageDetails },
    ],
  },
  { path: "/login", Component: Login },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      { index: true, Component: Overview },
      { path: "project", Component: Project },
      { path: "approvals", Component: Approvals },
      { path: "files", Component: Files },
      { path: "messages", Component: Messages },
      { path: "billing", Component: Billing },
      { path: ":section", Component: SectionPage },
    ],
  },
]);
