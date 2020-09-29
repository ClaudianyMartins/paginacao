import React, { Component } from "react";
import "./styles.css";
import perfil from "../../image/do-utilizador.svg";
import { Link } from "react-router-dom";

class Header extends Component {
  clicar = () => {
    document.getElementById("div__opcoes").style.display = "block";
    document.querySelector("#fechar").style.display = "block";
  };
  fechar = () => {
    document.getElementById("div__opcoes").style.display = "none";
    document.querySelector("#mostrar").style.display = "block";
    document.querySelector("#fechar").style.display = "none";
  };

  state = {
    opcao: ""
  };

  componentDidMount() {
    const { opcao } = this.state;

    switch (opcao) {
      case 1:
        break;

      case 2:
        break;

      default:
        break;
    }
  }

  render() {
    // const { opcao } = this.state;

    return (
      <header>
        <div>
          <button onClick={this.clicar} id="mostrar">
            ↓
          </button>

          <button onClick={this.fechar} id="fechar">
            X
          </button>
          <div id="div__opcoes">
            <button className="buttonChoose" onClick={this.buttonOne}>
              botão 1
            </button>
            <button className="buttonChoose" onClick={this.buttonTwo}>
              botão 2
            </button>
            <Link id="link-login" to="/login">
              Sair
            </Link>
            {/* <select onChange={this.opcoes} >
              <opcao value=''>--Selectione uma opção--</opcao>
              <opcao value='botao1'>op1</opcao>
              <opcao value='botao2'>op2</opcao>
            </select> */}
          </div>
        </div>
        <img src={perfil} alt="icone-perfil" id="icone-perfil" />
        <h1>Friendsbook</h1>
      </header>
    );
  }
}

export default Header;
