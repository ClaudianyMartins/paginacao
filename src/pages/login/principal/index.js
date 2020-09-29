import React from "react";

import grupo from "../../../image/group-filled-persons.svg";
import "./style.css";

const Info = () => {
  function logar() {
    document.getElementById("minhaInformacao").style.filter = "blur(3px)";
    document.querySelector("footer").style.filter = "blur(3px)";
    document.getElementById("meuLogin").style.display = "block";
  }

  function cadastro() {
    document.getElementById("minhaInformacao").style.filter = "blur(3px)";
    document.getElementById("telaCadastro").style.display = "block";
  }

  return (
    <div id="minhaInformacao">
      <h1 id="logo">FriendsBook</h1>
      <p id="texto">
        Conecte-se com amigos e com o mundo ao seu redor no FriendsBook.
      </p>
      <img src={grupo} alt="grupo de pessoas" id="grupoPessoas" />
      <button id="botaoParaLogin" onClick={logar}>
        Logar
      </button>
      <button id="botaoCadastrar" onClick={cadastro}>
        Cadastre-se
      </button>
    </div>
  );
};
export default Info;
