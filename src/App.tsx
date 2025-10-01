import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Import pages directly (no lazy loading to avoid blank pages)
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/programs';
import YDP from './pages/programs/YDP';
import SSP from './pages/programs/SSP';
import EPC from './pages/programs/EPC';
import ERWA from './pages/programs/ERWA';
import ECP from './pages/programs/ECP';
import Schools from './pages/Schools';
import Mentors from './pages/Mentors';
import Success from './pages/Success';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Join from './pages/Join';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';
import FormSuccess from './pages/FormSuccess';
import Legal from './pages/Legal';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/ydp" element={<YDP />} />
          <Route path="/programs/ssp" element={<SSP />} />
          <Route path="/programs/epc" element={<EPC />} />
          <Route path="/programs/erwa" element={<ERWA />} />
          <Route path="/programs/ecp" element={<ECP />} />
          <Route path="/schools" element={<Schools />} />
          <Route path="/mentors" element={<Mentors />} />
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
      </Layout>
    </Router>
  );
}

export default App;