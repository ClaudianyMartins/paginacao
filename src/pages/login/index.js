import React, { Component } from "react";
import "./style.css";
import Footer from "../../components/Footer/index";
import Cadastro from "./cadastro/index";
import Info from "./principal/index";

export default class TelaLogin extends Component {
  state = {
    usuario: "",
    senha: "",
    erro: ""
  };

  componentDidMount() {
    this.setState({ usuario: "", senha: "", erro: "" });
  }

  setUsuario = (event) => {
    this.setState({ usuario: event.target.value });
  };
  setSenha = (event) => {
    this.setState({ senha: event.target.value });
  };

  validacao = (event) => {
    event.preventDefault();

    if (this.state.usuario === "aaa" && this.state.senha === "123") {
      this.setState({ erro: "" });
      this.props.history.push("/home");
      // Desta forma ele funciona ->// window.location.replace("/amigos");
    } else {
      this.setState({ erro: "usuario e senha são inválidos!" });
    }
  };

  fecharLogin = () => {
    this.setState({ usuario: "", senha: "", erro: "" });

    document.getElementById("meuLogin").style.display = "none";
    document.getElementById("minhaInformacao").style.filter = "blur(0px)";
    document.querySelector("footer").style.filter = "blur(0px)";
  };

  render() {
    return (
      <div id="container">
        <Info />
        <div id="meuLogin">
          <div id="fecharLogin" onClick={this.fecharLogin}>
            <div id="one"></div>
            <div id="two"></div>
          </div>
          <p id="nomeLogin">Login</p>
          {this.state.erro && <p id="error"> {this.state.erro}</p>}
          <div>
            <input
              type="text"
              placeholder="Usuário"
              className="input"
              id="usuario"
              value={this.state.usuario}
              onChange={this.setUsuario}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Senha"
              className="input"
              id="senha"
              value={this.state.senha}
              onChange={this.setSenha}
            />
          </div>

          <input
            type="submit"
            value="Entrar"
            id="botao"
            onClick={this.validacao}
          />
        </div>
        <Cadastro />
        <Footer />
      </div>
    );
  }
}
