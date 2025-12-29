import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CV from './components/CV';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Optional: Create a 404 Component for better UX
const NotFound = () => <div className="text-center mt-20 text-2xl">404 - Page Not Found</div>;

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        {/* Navigation stays outside Routes so it's visible on every page */}
        <Navigation />

        <main className="flex-grow">
          <Routes>
            {/* The "index" or home route */}
            <Route path="/" element={<Hero />} />
            
            {/* Individual Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />

            {/* Edge Case: Catch-all for 404 errors */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer also stays visible on every page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;