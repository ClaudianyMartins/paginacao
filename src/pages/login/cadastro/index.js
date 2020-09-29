import React from "react";

import "./style.css";

const Cadastro = () => {
  var fecharCadastro = () => {
    document.getElementById("minhaInformacao").style.filter = "blur(0px)";
    document.getElementById("telaCadastro").style.display = "none";
  };
  return (
    <div id="telaCadastro">
      <p id="nomeCad">Cadastre-se</p>
      <form>
        <div onClick={fecharCadastro} id="botaoFechar">
          <div id="cadOne"></div>
          <div id="cadTwo"></div>
        </div>
        <input
          type="text"
          className="inputCadastro esquerda"
          placeholder="Nome"
        />
        <br />
        <input
          type="text"
          className="inputCadastr direita"
          placeholder="Sobrenome"
        />
        <br />
        <input
          type="email"
          className="inputCadastro emailSenha"
          placeholder="email"
        />
        <br />
        <input
          type="password"
          className="inputCadastro emailSenha"
          placeholder="senha"
        />
        <br />
        <label id="labelGenero">Gênero</label>
        <br />
        <br />
        <div className="genero">
          <label className="gender">Masculino</label>
          <input type="radio" name="gender" id="male" />
        </div>
        <div className="genero">
          <label className="gender">Feminino</label>
          <input type="radio" name="gender" id="female" />
        </div>
        <button id="botaoDeCadastrar">Cadastrar</button>
      </form>
    </div>
  );
};
export default Cadastro;
