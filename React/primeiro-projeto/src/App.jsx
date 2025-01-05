import React from "react";
import { Navbar } from "./components/Navbar/Navbar";

import "./styles/App.css";
import { Article } from "./components/Article/Article";

import article1e4Img from "./assets/images/article1e4.png";
import article2Img from "./assets/images/article2.png";
import article3Img from "./assets/images/article3.png";
import { Counter } from "./components/Counter/Counter";

// Componente em classe é uma classe que herda a classe Component do React, e retorna HTML dentro do método render(). 

class App extends React.Component {

  // Método render: responsável por renderizar o conteúdo HTML o nosso componente
  render () {
    return (
      <> 
      <Navbar />
      

      <section id="articles">
        <Article
          title="Designing Dashboards"
          provider="NASA"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          thumbnail={article1e4Img}
        />

        <Article
          title="Vibrant Portraits of 2020"
          provider="SpaceNews"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic temporibus necessitatibus dolorem porro. Tenetur enim non voluptas magni vel rem, doloribus soluta odio rerum adipisci animi. Veritatis dolores repellendus rem?"
          thumbnail={article2Img}
        />

        <Article
          title="36 Days of Malayalam type"
          provider="Spaceflight Now"
          description="ALorem ipsum, dolor sit amet consectetur adipisicing elit. Hic temporibus necessitatibus dolorem porro. Tenetur enim non voluptas magni vel rem, doloribus soluta odio rerum adipisci animi. Veritatis dolores repellendus rem?"
          thumbnail={article3Img}
        />

        <Article
          title="Designing Dashboards"
          provider="NASA"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          thumbnail={article1e4Img}
        />
      </section>
      </>
    );
  }
}

export default App;  // Exporta a função App
