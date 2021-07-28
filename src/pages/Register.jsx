import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

import { fireAuth } from '../config/firebase';

import LoginBox from '../components/LoginBox';
import { createAlert } from '../config/CreateAlert';
import DefaultInput from '../components/DefaultInput';
import DefaultButton from '../components/DefaultButton';
import DefaultTitle from '../components/DefaultTitle';
import { createUser } from '../database/user';
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

const Register = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();
  
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const verifyFields = () => {
    if(user === '' || birthDay === '' || name === '' || phone === '' || password !== confirmPassword) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 4000);
    }
    else {
      setShowError(false);
      setShowSuccess(true);
      fireAuth
      .createUserWithEmailAndPassword(user, password)
      .then(() => {
        fireAuth.signInWithEmailAndPassword(user, password).then((data) => {
          const dataAll = {
            nome: name,
            telefone: phone,
            email: user,
            nascimento: birthDay,
          }
          createUser(data.user, dataAll);
          setTimeout(() => {
                  setShowSuccess(false);
                  history.replace('/');
                }, 4000);
              });
            })
            .catch((e) => {
              createAlert(e.message);
            })
    }
  }

  return (
    <Container>
      <DefaultTitle style={{ marginTop: 20, marginBottom: 20 }} >
        Realize seu cadastro na <strong>Woke</strong>
      </DefaultTitle>
      <LoginBox>
      <Alert color="danger" isOpen={showError}>
        Ocorreu algum erro, você precisa preencher todos os dados e verificar se a senha esta igual à confirmação !
      </Alert>
      <Alert color="success" isOpen={showSuccess}>
        Cadastro realizado, iremos te redirecionar !
      </Alert>
        <DefaultInput
          value={name}
          label='Nome'
          type='text'
          onChange={(event) => setName(event.target.value)}
        />
        <DefaultInput
          value={phone}
          label='Telefone'
          type='text'
          onChange={(event) => setPhone(event.target.value)}
        />
        <DefaultInput
          value={birthDay}
          label='Data De Nascimento'
          type='date'
          onChange={(event) => setBirthDay(event.target.value)}
        />
        <DefaultInput
          value={user}
          type='email'
          label='Email'
          onChange={(event) => setUser(event.target.value)}
        />
        <DefaultInput
          value={password}
          label='Senha'
          type='password'
          onChange={(event) => setPassword(event.target.value)}
        />
        <DefaultInput
          value={confirmPassword}
          label='Confirme sua Senha'
          type='password'
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <DefaultButton
          onClick={() => verifyFields()}
          label='Registar Acesso'
        />
        <BottomLinks to='/login'>Já é registado ?</BottomLinks>
        <BottomLinks to='/recover-password'>Esqueceu sua senha?</BottomLinks>
      </LoginBox>
    </Container>
  );
};

export default Register;
