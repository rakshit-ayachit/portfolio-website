import { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

// Components
import Loader from "./pages/loader/loader";
import Header from "./components/Header";
import Landing from "./pages/landing/Landing";
import Portfolio from "./pages/portfolio/Portfolio";
import ProjectDetails from "./pages/portfolio/[project]/ProjectDetails";
import Resume from "./pages/resume/Resume";
import Contact from "./pages/contact/Contact";
import PageNotFound from "./pages/404/PageNotFound";

/**
 * Main Application Component
 *
 * @component
 */

function App() {
  // Personal details for the user
  const personalDetails = {
    name: "Rakshit Ayachit",
    location: "Bangalore",
    email: "rakshit.ayachit@gmail.com",
    brand:
"I specialize in advanced data engineering and machine learning, with practical expertise in OCR, ML, DL, and NLP. Through internships, I've engineered precise document classification systems and automated data processes. Proficient in Python, HTML, CSS, Java, and key Big Data tools like Hadoop, Spark, TensorFlow, and Keras, I excel in predictive modeling and process optimization, dedicated to ongoing learning and collaborative growth."
  }
  const location = useLocation();

  // State to manage loader visibility
  const [showLoader, setShowLoader] = useState(true);

  const [originalTitle, setOriginalTitle] = useState();

  useEffect(() => {
    // Hide loader when initial route is loaded
    if (location.pathname !== "/") {
      setShowLoader(false);
    }

    // Store the original document title
    if (!originalTitle) {
      setOriginalTitle(document.title);
    }

    // Handle document title change when tab visibility changes
    const handleTabChange = () => {
      if (document.hidden) {
        document.title = "👋🏻 Git pulling you back in!";
      } else {
        document.title = originalTitle;
      }
    };

    // Listen for visibility change events
    window.addEventListener("visibilitychange", handleTabChange);
    return () => window.removeEventListener("visibilitychange", handleTabChange);
  }, [location, originalTitle]);

  return (
    <>
      {showLoader ? (
        // Show loader until initial route is loaded
        <Loader setShowLoader={setShowLoader} />
      ) : (
        <>
          {/* Header */}
          <Header />
          {/* Define routes */}
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Landing name={personalDetails.name} tagline={personalDetails.tagline} />} />
            <Route path="/resume" element={<Resume personalDetails={personalDetails} />} />

            <Route path="/portfolio" element={<Portfolio />} />
            <Route
              path="/contact"
              element={
                <Contact
                  name={personalDetails.name}
                  location={personalDetails.location}
                  email={personalDetails.email}
                />
              }
            />
            <Route path="/page-not-found" element={<PageNotFound />} />
            <Route path="/portfolio/:projectTitle" element={<ProjectDetails />} />
            {/* Fallback route for unknown paths */}
            <Route path="*" element={<Navigate to="/page-not-found" />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
