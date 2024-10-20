import React from 'react';
import './App.css';
// Importando os componentes
import Header from './components/Header/Header';
import Article from './components/Article/Article';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
    <main className="app">
      <section className="welcome">
        <span className="welcome__text">Sticky Header!</span>
      </section>
      <Header /> {/* Chamando o componente Header aqui */}
      <Article /> {/* Chamando o componente Article aqui */}
      <Welcome /> {/* Chamando o componente Welcome aqui */}
    </main>
  );
}

export default App;
