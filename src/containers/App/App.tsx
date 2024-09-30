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

  useEffect(() => {
    document.title = `${title || ""} | ${import.meta.env.VITE_TEAM_NAME} - iGEM ${import.meta.env.VITE_TEAM_YEAR}`;
  }, [title]);

  useEffect(() => {
    // Set loading to true when the component mounts
    setLoading(true);

    // Hide loading after a brief timeout to simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust this timeout as needed

    return () => clearTimeout(timer);
  }, [location.pathname]); // Run this effect on location changes

  return (
    <>
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Navigation */}
      <Navbar />

      {/* Loading Screen */}
      {loading && <Loading />}

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
