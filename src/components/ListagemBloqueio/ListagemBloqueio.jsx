import React from 'react';
import './ListagemBloqueio.css';
import api from '../../api'


const ListagemBloqueio = (props) => {

console.log(props.isDriver)
  async function block(id){
  if(!props.isDriver){
    await api.post(`api/v1/resources/admin/users/${id}/block`);
    window.alert(`Usuário ${id} bloqueado`);
   }
  else{
      await api.post(`api/v1/resources/admin/drivers/${id}/block`);
      window.alert(`Transportador ${id} bloqueado`);
    }
  }

  async function unBlock(id){
    if(!props.isDriver){
      await api.post(`api/v1/resources/admin/users/${id}/unblock`);
      window.alert(`Usuário ${id} desbloqueado`);
     }
    else{
        await api.post(`api/v1/resources/admin/drivers/${id}/unblock`);
        window.alert(`Transportador ${id} desbloqueado`);
      }
    }

  return (
    <div className="container">
        <div className="containerName">
          <label className="title">ID</label>
          <label className="title">{props.id}</label>
        </div>
        <div className="containerName">
          <label className="title">Nome</label>
          <label className="name">{props.name}</label>
        </div>
        <div className="containerName">
          <label className="title">E-mail</label>
          <label className="email">{props.email}</label>
        </div>
        <div className="containerName">
          <label className="title">Status</label>
          <label className="email">{(props.status)? props.status: 'Ok' }</label>
        </div>
        {console.log(props)}
    <div className="containerBotoes">
        <button className="ButtonList" onClick={() => {block(props.id)}}>Bloquear</button>
        <button className="ButtonList" onClick={() => {unBlock(props.id)}}>Desbloquear</button>
    </div>
    </div>
  );
};

export default ListagemBloqueio;
