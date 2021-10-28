import React, { useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import StoreContext from 'components/Store/Context';
import UIButton from 'components/UI/Button/Button';

import './Login.css';

function initialState() {
  return { user: '', password: '' };
}

function login({ user, password }) {
  let valorToken = "bcGVkcm6xMjNiJ2MyVnVhR0v4TWpNPScyMDIxLTA5LTAyIDAwOJE2OJIyLjY";
  if ((user === 'pedro123' && password === 'senha1231') || (user === 'admin' && password === 'admin')) {
 sessionStorage.setItem('token', valorToken)
    return { token: 'bcGVkcm6xMjNiJ2MyVnVhR0v4TWpNPScyMDIxLTA5LTAyIDAwOJE2OJIyLjY' };
  }
  return { error: 'Usuário ou senha inválido' };
}


const UserLogin = () => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value
    });
  }

  function onSubmit(event) {
    event.preventDefault();

    const { token, error } = login(values);

    if (token) {
      setToken(token);
      return history.push('/');
    }

    setError(error);
    setValues(initialState);
  }

  return (
    <div className="user-login">
      
      <div className="divEsquerda" >
      <div className="logo"/>
      <h1 className="user-login__title">Bem Vindo a área de administração.
      <h1 className="user-login__title">Faça seu login abaixo.</h1>
      </h1>


      <form onSubmit={onSubmit}>
        <div className="user-login__form-control">
          
          <input
            id="user"
            type="text"
            name="user"
            onChange={onChange}
            value={values.user}
            placeholder="Login"
          />
        </div>
        <div className="user-login__form-control">
          
          <input
            id="password"
            type="password"
            name="password"
            onChange={onChange}
            value={values.password}
            placeholder="Senha"
          />
        </div>
        {error && (
          <div className="user-login__error">{error}</div>
        )}
        <UIButton
          type="submit"
          theme="contained-green"
          className="user-login__submit-button"
          rounded
        >
          Entrar
        </UIButton>
      </form>
      <h1 className="user-login__title">2021™ Itools. Todos os direitos reservados.</h1>
      </div>
      <div className="divDireita" />
    </div>
  );
};

export default UserLogin;
