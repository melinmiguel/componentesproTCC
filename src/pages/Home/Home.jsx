import React, { useContext, useEffect, state, useState } from 'react';
import StoreContext from 'components/Store/Context';
import ListagemBloqueio from 'components/ListagemBloqueio/ListagemBloqueio';
import ListagemBloqueioAnuncio from 'components/ListagemBloqueioAnuncio/ListagemBloqueioAnuncio';

import './Home.css';
import api from '../../api'


const PagesHome = () => {
  const { setToken } = useContext(StoreContext);
  const [users, setUsers] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [anuncio, setAnuncio] = useState([]);


  async function getUsers() {
   await api.get('api/v1/resources/admin/users').then(
      (({data}) =>{
        setUsers(data);
      }))  
  }

  function getDrivers() {
    api.get('api/v1/resources/admin/drivers').then(
      (({data}) =>{
        setDrivers(data);
      }))  
  }

  function getAnnoucements() {
    api.get('api/v1/resources/admin/announcements').then(
      (({data}) =>{
        setAnuncio(data);
      }))  
  }

  useEffect(() => {
    getUsers();
    getDrivers();
    getAnnoucements();
     //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return(
    <div className="pages-home">
      <div className="menuLateral">
        <div className="logo2"/>

          <div className="submenus">
            <div className="menu">Home</div>
            <div className="menu"ListagemBloqueioAnuncio>Procurar</div>
            <div className="menu">Relatórios</div>
            <div className="menu">Mensagens</div>
            <div className="menu">Configurações</div>
          </div>

          <button className="button-sair" type="button" onClick={() => setToken(null)}>
          Sair
          </button>
      </div>
      <div className="containerOpcoes">
          <div className="tablesLaterais">
            <div className="tablesLaterais-titulo">Bloqueio de Usuários</div>
            {users?.map((user) => (<ListagemBloqueio key={user.id} id={user.id} name={user.name} email={user.email}/>))}
          </div>
          <div className="tablesLaterais">
            <div className="tablesLaterais-titulo">Bloqueio de Transportador</div>
            {drivers?.map((user) => 
            (<ListagemBloqueio isDriver key={user.id} id={user.id} name={user.name} email={user.email}/>))}
          </div>
          <div className="tablesLaterais">
            <div className="tablesLaterais-titulo">Bloqueio de Anuncio</div>
            {anuncio?.map((user) => 
            (<ListagemBloqueioAnuncio key={user.id} id={user.id} category={user.category} name={user.name} owner_id={user.owner_id} />))}
          </div>
      </div>    
    </div>
  );
};

export default PagesHome;
