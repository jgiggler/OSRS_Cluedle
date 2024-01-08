import React, { useState } from 'react'
import cluedleLogo from './assets/osrs logo.png'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ItemsPage from './pages/ItemsPage';
import Nav from './components/Nav.jsx';
function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <BrowserRouter>
      <header>
      <div>
          <img id='dropDown' src={cluedleLogo} onClick={() => setIsOpen(!isOpen)} 
          className="osrs-logo" alt="osrs-logo" />
          {isOpen && <Nav isOpen={isOpen}/>}
      </div>
      </header>

      <main>
        
        <section>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/item' element={<ItemsPage/>}/>
          </Routes>
        </section>
      
      </main>
      <footer>
        &copy; The Giggler
        <p>Created using intellectual property belonging to Jagex Limited under the terms of <a href='https://www.jagex.com/en-GB/terms/fancontentpolicy'>Jagex's Fan Content Policy</a>. This content is not endorsed by or affiliated with Jagex.
        </p>
        
      </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
