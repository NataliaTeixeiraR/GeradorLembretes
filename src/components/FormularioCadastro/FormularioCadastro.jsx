import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {

  constructor(props){
    super(props);
    this.titulo ="";
    this.texto ="";
  }

  _handleMudancaTitulo(evento){
    this.titulo = evento.target.value;
    console.log(this.titulo);
  }

  _handleMudancaTexto(evento){
    this.texto = evento.target.value;
    console.log(this.texto);
  }

  _criarNota(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
  }

  render() {
    return (
      <form className="form-cadastro "
        onSubmit={this._criarNota.bind(this)}>        
        <input
          type="text"
          placeholder="Título da Nota"
          className="form-cadastro_input"
          onChange = {this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva seu lembrete..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;