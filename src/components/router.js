import LandingPage from "../pages/LandingPage";
import ProjectDetails from "../pages/ProjectDetails";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Carte from "../pages/Carte";

export default function Router() {
  const Layout = () => {
    return (
      <>
        <div className="">
          <Outlet />
        </div>
      </>
    );
  };

  const BrowserRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/carte" element={<Carte />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };

  
return <BrowserRoutes />;
}

