import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarTop from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';


function App() {
  return (
    <div className="App">
      <header>
        <NavbarTop />
      </header>
      <body>
        <Sidebar />
      </body>
    </div>
  );
}

export default App;
