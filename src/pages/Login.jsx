import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

import { fireAuth } from '../config/firebase';
import { createAlert } from '../config/CreateAlert';

import LoginBox from '../components/LoginBox';
import DefaultTitle from '../components/DefaultTitle';
import DefaultInput from '../components/DefaultInput';
import DefaultButton from '../components/DefaultButton';

import { Alert } from 'reactstrap';

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BottomLinks = styled(Link)`
  display: block;
  color: #333;
  font-weight: 600;
  text-align: center;
  margin-top: 8px;
  text-decoration: none;

  :hover {
    text-decoration: underline #f05623;
  }
`;

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const history = useHistory();

  const modalErro = () => {
    setShowError(true);
    setTimeout(() => {
      setShowError(false);
    }, 4000);
  }
  
  const modalSuccess = () => {
    setShowError(false);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 4000);
  }

  return (
    <Container>
      <DefaultTitle style={{ marginTop: 70, marginBottom: 40 }} >
        Acesse a <strong>Woke</strong>
      </DefaultTitle>
      <LoginBox>
      <Alert color="danger" isOpen={showError}>
        Ocorreu algum erro, verifique suas credenciais !
      </Alert>
      <Alert color="success" isOpen={showSuccess}>
        Tudo certo, iremos te redirecionar !
      </Alert>

        <DefaultInput
          value={user}
          label='Usuário'
          type='email'
          onChange={(event) => setUser(event.target.value)}
        />
        <DefaultInput
          value={password}
          label='Senha'
          type='password'
          onChange={(event) => setPassword(event.target.value)}
        />
        <DefaultButton
          onClick={() =>
            fireAuth
              .signInWithEmailAndPassword(user, password)
              .then(() => {
                modalSuccess();
                setTimeout(() => history.replace('/'), 4000);
              })
              .catch((e) => {
                modalErro();
              })
          }
          label='Login'
        />
        <BottomLinks to='/first-access'>Primeiro Acesso?</BottomLinks>
        <BottomLinks to='/recover-password'>Esqueceu sua senha?</BottomLinks>
      </LoginBox>

    </Container>
  );
};

export default Login;

