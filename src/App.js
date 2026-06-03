import React, { useEffect, useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';

const homeSections = ['home', 'experience', 'about', 'contact'];

function getCurrentPage() {
  const hash = window.location.hash.replace('#', '');
  return [...homeSections, 'work'].includes(hash) ? hash : 'home';
}

function App() {
  const [page, setPage] = useState(getCurrentPage());

  useEffect(() => {
    const handleHashChange = () => {
      setPage(getCurrentPage());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (page) {
      case 'work':
        return <WorkPage />;
      default:
        return <HomePage onSectionChange={setPage} />;
    }
  };

  return (
    <div className="App">
      <Navigation currentPage={page} />
      <main className={`main-content ${homeSections.includes(page) ? 'home-scroll' : ''}`}>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
