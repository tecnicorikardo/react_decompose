// import a css file containig article styles

// Create an Article function returning the HTML of article block

// Add a default export statement for Article component to use it in the other files
// Article.jsx
import React from 'react';
import './Article.css'; // Importa o arquivo CSS contendo os estilos do artigo

// Cria o componente Article que retorna o HTML do bloco do artigo
const Article = () => {
  return (
    <div className="article">
      <h1>Headline</h1>
      <p className="article__paragraph">Paragraph 1</p>
      <p className="article__paragraph">Paragraph 2</p>
      <p className="article__paragraph">Paragraph 3</p>
      <p className="article__paragraph">Paragraph 4</p>
      <p className="article__paragraph">Paragraph 5</p>
    </div>
  );
};

// Adiciona uma declaração de exportação padrão para o componente Article
export default Article;
