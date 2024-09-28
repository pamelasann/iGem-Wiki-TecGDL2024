import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { Footer, Navbar, NotFound } from "../../components";
import { getPathMapping, stringToSlug } from "../../utils";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading"; // Import the Loading component

const App = () => {
  const pathMapping = getPathMapping();
  const location = useLocation(); // Get the current location
  const currentPath =
    location.pathname
      .split(`${stringToSlug(import.meta.env.VITE_TEAM_NAME)}`)
      .pop() || "/";

  // Set Page Title
  const title =
    currentPath in pathMapping ? pathMapping[currentPath].title : "Not Found";

  const [loading, setLoading] = useState(false); // Loading state

  // Update the title and loading state on route change
  useEffect(() => {
    document.title = `${title || ""} | ${import.meta.env.VITE_TEAM_NAME} - iGEM ${import.meta.env.VITE_TEAM_YEAR}`;
    setLoading(true); // Set loading to true when the route changes

    const handleRouteChange = () => {
      setLoading(false); // Set loading to false after a short delay
    };

    // Simulate loading time (you can adjust the timeout)
    const timeoutId = setTimeout(handleRouteChange, 500);

    return () => clearTimeout(timeoutId); // Clear timeout on unmount
  }, [location, title]);

  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Layout for PageContent (no automatic Header) */}
      <Layout>
        {loading ? (
          <Loading className={loading ? "show" : ""} /> // Show loading screen while loading
        ) : (
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
        )}
      </Layout>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
