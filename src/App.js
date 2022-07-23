import React, { Component } from "react";
import imagem from "./img/arroz.jpg";

export default class App extends Component {
  state = {
    nome: "João felipe Rutowitsch Azevedo",
    idade: 16,
    comidafavorita: "arroz a piamontese",
    musica: ["só os loucos sabem", "dias de luta", "Wish You Were Here"]
  };

  render() {
    return (
      <>
        <hedaer>
          <p>meu nome todo</p>
          <h1>{this.state.nome}</h1>
          <p>minha idade</p>
          <h2>{this.state.idade}</h2>
          <p>comida favorita</p>
          <h3>{this.state.comidafavorita}</h3>
          <img
            src={imagem}
            title="arroz a piamontese"
            alt="arroz-a-piamontese-imagem"
          />
          <p>minha musica favorita</p>
          <ul>
            <li>{this.state.musica[0]}</li>
            <li>{this.state.musica[1]}</li>
            <li>{this.state.musica[2]}</li>
          </ul>
        </hedaer>
      </>
    );
  }
}
