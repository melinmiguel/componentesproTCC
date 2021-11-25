import React from 'react';
import './ListagemMotoristasApprove.css';
import api from '../../api'


const ListagemMotoristasApprove = (props) => {

  async function Approve(id){
    await api.post(`api/v1/resources/admin/drivers/${id}/approve`);
    window.alert(`Anuncio ${id} bloqueado`);
  }

  return (
    <div className="container">
        <div className="containerName">
          <label className="title">ID</label>
          <label className="title">{props.id}</label>
        </div>
        <div className="containerName">
          <label className="title">Email</label>
          <label className="name">{props.email}</label>
        </div>
        {console.log(props)}
    <div className="containerBotoes">
        <button className="ButtonList" onClick={() => {Approve(props.id)}}>Aprovar</button>
    </div>
    </div>
  );
};

export default ListagemMotoristasApprove;
