import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { Footer, Header, Navbar, NotFound } from "../../components";
import { getPathMapping, stringToSlug } from "../../utils";
import { useEffect } from "react";
import Layout from "../../components/Layout";
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
      {/* Navigation */}
      <Navbar />

      {/* Layout for PageContent (no automatic Header) */}
      <Layout>
        <Routes>
          {Object.entries(pathMapping).map(
            ([path, { title, backgroundImage, component: Component }]) => (
              <Route
                key={path}
                path={path}
                element={
                  <>
                    <Header 
                      title={title || ""} 
                      backgroundImage={backgroundImage || undefined} 
                    />
                    <div className="container main-container">
                      <Component />
                    </div>
                  </>
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
                <Header
                  title="Not Found"
                  backgroundImage=""
                />
                <NotFound />
              </>
            }
          />
        </Routes>
      </Layout>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
