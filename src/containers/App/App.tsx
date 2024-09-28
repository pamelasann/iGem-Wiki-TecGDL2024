import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { Footer, Navbar, NotFound } from "../../components";
import { getPathMapping, stringToSlug } from "../../utils";
import { useEffect } from "react";
import Layout from "../../components/Layout";
import ScrollProgressBar from "../../components/Scrolling";
import BackToTop from "../../components/Top";
//import { Team } from "./Team"; // Import the Team page

const App = () => {
  const pathMapping = getPathMapping();
  const currentPath =
    location.pathname
      .split(`${stringToSlug(import.meta.env.VITE_TEAM_NAME)}`)
      .pop() || "/";

  // Set Page Title
  const title =
    currentPath in pathMapping ? pathMapping[currentPath].title : "Not Found";

  useEffect(() => {
    document.title = `${title || ""} | ${import.meta.env.VITE_TEAM_NAME} - iGEM ${import.meta.env.VITE_TEAM_YEAR}`;
  }, [title]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Navigation */}
      <Navbar />

      {/* Layout for PageContent (no automatic Header) */}
      <Layout>
        <Routes>
          {Object.entries(pathMapping).map(
            ([path, { title, lead, component: Component }]) => (
              <Route
                key={path}
                path={path}
                element={
                  <div className="container main-container">
                    <Component />
                  </div>
                }
              />
            )
          )}
          {/* Special route for Team */}
          
          {/* Fallback route for Not Found */}
          <Route
            path="*"
            element={
              <>
                <NotFound />
              </>
            }
          />
        </Routes>
      </Layout>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <BackToTop />  
    </>
  );
};

export default App;
