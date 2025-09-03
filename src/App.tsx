import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LiveChat from "./components/LiveChat";

import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/programs";
import ProgramYDP from "./pages/programs/YDP";
import ProgramSSP from "./pages/programs/SSP";
import ProgramEPC from "./pages/programs/EPC";
import ProgramERWA from "./pages/programs/ERWA";
import ProgramECP from "./pages/programs/ECP";
import Schools from "./pages/Schools";
import Mentors from "./pages/Mentors";
import MentorSpotlight from "./pages/MentorSpotlight";
import Success from "./pages/Success";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Join from "./pages/Join";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import Verify from "./pages/Verify";
import Legal from "./pages/Legal";
import FormSuccess from "./pages/FormSuccess";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";

function App() {
  return (
    <Router>
      <Layout>
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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/form-success" element={<FormSuccess />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/admin-login-secure" element={<AdminLogin />} />
          <Route path="/ethicbizz-admin-dashboard-2025-secure" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      <LiveChat />
    </Router>
  );
}

export default App;
