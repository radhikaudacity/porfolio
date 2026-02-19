import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects.jsx';
import ThankYou from './pages/ThankYou.jsx';
import { Route, Routes } from 'react-router-dom';

import CaseStudy from './pages/CaseStudy.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/thank-you' element={<ThankYou />} />
        <Route path='/case-study/:slug' element={<CaseStudy />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
