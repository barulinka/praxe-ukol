import React, { useState } from 'react';
import './App.css';

// Komponenta pro přepínač tématu
const ThemeToggleButton = ({ toggleTheme }) => {
  return (
    <button onClick={toggleTheme}>Přepnout barvu</button>
  );
}

// Komponenta pro navbar
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>Domů</li>
        <li>Obecné</li>
        <li>Kontakt</li>
      </ul>
    </nav>
  );
}

// Komponenta pro footer
const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 My Website</p>
    </footer>
  );
}

// Komponenta pro obsah
const Content = () => {
  return (
    <div className="content">
      <h2>Vítejte na mých stránkách</h2>
      <p>Toto je zkouška stránky.</p>
    </div>
  );
}

// Hlavní komponenta aplikace
const App = () => {
  // Stav pro uchování aktuálního tématu
  const [theme, setTheme] = useState("light");

  // Funkce pro změnu tématu
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  }

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <ThemeToggleButton toggleTheme={toggleTheme} />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
