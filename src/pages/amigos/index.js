import React, { Component } from "react";
import Footer from "../../components/Footer/index";
import Header from "../../components/Header/index";
import Lista from "../../components/Lista/index";
// import Footer from "../../components/Lista/Footer/footer";
import "./home.css";
import Api from "../../services/api";

class Home extends Component {
  state = {
    friends: "",
    loading: false,
    items: [],
    itemsTotal: [],
    pessoasFiltradas: [],
    indexInicial: 0,
    indexFinal: 20,
    totalPage: 0,
    pageNext: 0,
    pagePrev: 0,
    messagemErro: ""
  };

  componentDidMount() {
    this.carregarAmigos();
  }

  async carregarAmigos() {
    let messagemErro = "";
    let response = await Api.get("/?results=5000").catch(function (error) {
      messagemErro =
        "Uau, calma coleguinha. Sistema fora do ar, tenta mais tarde! ;)";
    });

    if (response && response.data && response.data.results) {
      this.setState({
        itemsTotal: response.data.results,
        loading: true,
        pessoasFiltradas: [],
        totalPage: response.data.results / 20,
        pageNext: 2,
        pagePrev: 1,
        messagemErro: ""
      });

      let { itemsTotal, indexInicial, indexFinal } = this.state;
      this.setState({
        items: itemsTotal.slice(indexInicial, indexFinal)
      });
      this.setState({
        indexInicial: indexFinal + 1,
        indexFinal: indexFinal + 20
      });
    } else {
      this.setState({
        items: [],
        loading: false,
        messagemErro: messagemErro
      });
    }
  }

  searchFriends = (event) => {
    this.setState({ friends: event.target.value });
    if (!event.target.value) {
      this.setState({
        pessoasFiltradas: []
      });
    }
  };

  buttonEntrar = (event) => {
    event.preventDefault();

    const { friends } = this.state;

    if (friends === "") {
      alert("Dados inválidos");
      this.setState({
        pessoasFiltradas: []
      });
    } else {
      let itemsFiltrados = this.state.itemsTotal.filter(
        (pessoa) =>
          pessoa.name.first.toLowerCase().indexOf(friends.toLowerCase()) > -1
      );
      this.setState({
        pessoasFiltradas: itemsFiltrados
      });
    }
  };
  pagePrev = (event) => {
    let { itemsTotal, indexInicial, indexFinal, pagePrev } = this.state;

    this.setState({
      items: itemsTotal.slice(indexInicial, indexFinal)
    });

    this.setState({
      pageNext: pagePrev,
      pagePrev: pagePrev - 1,
      indexInicial: indexFinal + 1,
      indexFinal: indexFinal + 20
    });
  };
  pageNext = (event) => {
    let { itemsTotal, indexInicial, indexFinal, pageNext } = this.state;

    this.setState({
      items: itemsTotal.slice(indexInicial, indexFinal)
    });

    this.setState({
      pageNext: pageNext + 1,
      pagePrev: pageNext,
      indexInicial: indexFinal + 1,
      indexFinal: indexFinal + 20
    });
  };

  render() {
    const {
      friends,
      items,
      loading,
      pessoasFiltradas,
      messagemErro
    } = this.state;

    return (
      <div id="div-geral">
        <Header />
        <div id="pesquisa">
          <label>Pesquisar amigos</label>
          <input
            type="search"
            autoComplete="off"
            onChange={this.searchFriends}
            value={friends}
            placeholder="Pesquisar"
            id="inputPesquisar"
          />
          <button id="search" onClick={this.buttonEntrar}>
            Buscar
          </button>
        </div>
        <div id="conteudo">
          <h2 id="tituloConteudo">Lista de amigos</h2>
          {friends && (
            <Lista
              items={pessoasFiltradas}
              loading={loading}
              messagemErro={messagemErro}
            />
          )}
          {!friends && (
            <Lista
              items={items}
              loading={loading}
              messagemErro={messagemErro}
            />
          )}
        </div>
        <button
          id="searchPagePrev"
          disabled={this.state.pagePrev <= 1}
          onClick={this.pagePrev}
        >
          Anterior
        </button>
        <button
          id="searchPageNext"
          disabled={this.state.pageNext >= this.state.totalPage}
          onClick={this.pageNext}
        >
          Próxima
        </button>
        <Footer />
      </div>
    );
  }
}

export default Home;
