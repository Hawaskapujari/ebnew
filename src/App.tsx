import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LiveChat from "./components/LiveChat";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy load components for better performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Programs = lazy(() => import("./pages/programs"));
const ProgramYDP = lazy(() => import("./pages/programs/YDP"));
const ProgramSSP = lazy(() => import("./pages/programs/SSP"));
const ProgramEPC = lazy(() => import("./pages/programs/EPC"));
const ProgramERWA = lazy(() => import("./pages/programs/ERWA"));
const ProgramECP = lazy(() => import("./pages/programs/ECP"));
const Schools = lazy(() => import("./pages/Schools"));
const Mentors = lazy(() => import("./pages/Mentors"));
const MentorSpotlight = lazy(() => import("./pages/MentorSpotlight"));
const Success = lazy(() => import("./pages/Success"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const Join = lazy(() => import("./pages/Join"));
const Contact = lazy(() => import("./pages/Contact"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const Legal = lazy(() => import("./pages/Legal"));
const FormSuccess = lazy(() => import("./pages/FormSuccess"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/ydp" element={<ProgramYDP />} />
            <Route path="/programs/ssp" element={<ProgramSSP />} />
            <Route path="/programs/epc" element={<ProgramEPC />} />
            <Route path="/programs/erwa" element={<ProgramERWA />} />
            <Route path="/programs/ecp" element={<ProgramECP />} />
            <Route path="/schools" element={<Schools />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/mentors/spotlight" element={<MentorSpotlight />} />
            <Route path="/success" element={<Success />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/join" element={<Join />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/form-success" element={<FormSuccess />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
      <LiveChat />
    </Router>
  );
}

export default App;