import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { Footer, Header, Navbar, NotFound } from "../../components";
import { getPathMapping, stringToSlug } from "../../utils";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import ScrollProgressBar from "../../components/Scrolling";
import BackToTop from "../../components/Top";
import Loading from "../../components/Loading"; // Import the Loading component

const App = () => {
  const pathMapping = getPathMapping();
  const location = useLocation();

  const currentPath =
    location.pathname
      .split(`${stringToSlug(import.meta.env.VITE_TEAM_NAME)}`)
      .pop() || "/";

  // Set Page Title
  const title =
    currentPath in pathMapping ? pathMapping[currentPath].title : "Not Found";

  const [loading, setLoading] = useState(false); // State to manage loading
  const [fadeClass, setFadeClass] = useState(""); // State for fade effect

  useEffect(() => {
    document.title = `${title || ""} | ${import.meta.env.VITE_TEAM_NAME} - iGEM ${import.meta.env.VITE_TEAM_YEAR}`;
  }, [title]);

  useEffect(() => {
    // Start loading and fade in
    setLoading(true);
    setFadeClass("fade-in");
    document.body.classList.add("no-scroll"); // Add class to prevent scrolling

    // Fade out after a brief timeout
    const timer = setTimeout(() => {
      setFadeClass("fade-out");
      setTimeout(() => {
        setLoading(false);
        document.body.classList.remove("no-scroll"); // Remove class to allow scrolling
      }, 500); // Wait for fade-out to finish
    }, 1000); // Adjust this timeout as needed

    return () => {
      clearTimeout(timer);
      document.body.classList.remove("no-scroll"); // Ensure class is removed if component unmounts
    };
  }, [location.pathname]); // Run this effect on location changes

  return (
    <>
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Navigation */}
      <Navbar />

      {/* Loading Screen */}
      {loading && <Loading className={fadeClass} />}

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

      {/* Back to Top Button */}
      <BackToTop />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
