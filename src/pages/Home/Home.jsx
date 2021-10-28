import React, { useContext } from 'react';
import StoreContext from 'components/Store/Context';
import './Home.css';

const PagesHome = () => {
  const { setToken } = useContext(StoreContext);
  return (
    <div className="pages-home">
      <div className="menuLateral">
        <div className="logo2"/>

          <div className="submenus">
            <div className="menu">Home</div>
            <div className="menu">Procurar</div>
            <div className="menu">Relatórios</div>
            <div className="menu">Mensagens</div>
            <div className="menu">Configurações</div>
          </div>

          <button className="button-sair" type="button" onClick={() => setToken(null)}>
          Sair
          </button>
      </div>    
        <div className="tablesLaterais">
          <div className="tablesLaterais-titulo">HOME</div>
        </div>
        <div className="tablesLaterais">
          <div className="tablesLaterais-titulo">HOME</div>
        </div>
        <div className="tablesLaterais">
          <div className="tablesLaterais-titulo">HOME</div>
        </div>
        <div className="tablesLaterais">
          <div className="tablesLaterais-titulo">HOME</div>
        </div>
    </div>
  );
};

export default PagesHome;
