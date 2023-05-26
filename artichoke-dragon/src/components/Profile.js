import React, { useState } from 'react';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Profile() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact/>;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <AboutMe />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <footer>
      <i class="bi bi-github" href="https://github.com/CarlyGallagher"></i>
        <p>© 2023 Artichoke Dragon 🐉</p>
      </footer>
    </div>
  );
}
