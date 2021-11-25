import React from 'react';
import './ListagemBloqueioAnuncio.css';
import api from '../../api'


const ListagemBloqueioAnuncio = (props) => {

  async function block(id){
    await api.post(`api/v1/resources/admin/users/${id}/block`);
    window.alert(`Anuncio ${id} bloqueado`);
  }

  async function unblock(id){
    await api.post(`api/v1/resources/admin/users/${id}/unblock`);
    window.alert(`Anuncio ${id} desbloqueado`);
  }

  return (
    <div className="container">
        <div className="containerName">
          <label className="title">ID</label>
          <label className="title">{props.id}</label>
        </div>
        <div className="containerName">
          <label className="title">Categoria</label>
          <label className="name">{props.category}</label>
        </div>
        <div className="containerName">
          <label className="title">Nome </label>
          <label className="email">{props.name}</label>
        </div>
        <div className="containerName">
          <label className="title">ID proprietário </label>
          <label className="email">{props.owner_id}</label>
        </div>
        <div className="containerName">
          <label className="title">Status</label>
          <label className="email">{(props.status)? props.status: 'Ok' }</label>
        </div>
        {console.log(props)}
    <div className="containerBotoes">
        <button className="ButtonList" onClick={() => {block(props.id)}}>Bloquear</button>
        <button className="ButtonList" onClick={() => {unblock(props.id)}}>Desbloquear</button>
    </div>
    </div>
  );
};

export default ListagemBloqueioAnuncio;
