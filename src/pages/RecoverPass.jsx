import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import DefaultInput from '../components/DefaultInput';
import DefaultButton from '../components/DefaultButton';
import LoginBox from '../components/LoginBox';
import { fireAuth } from '../config/firebase';
import { createAlert } from '../config/CreateAlert';
import DefaultTitle from '../components/DefaultTitle';
import { Alert } from 'reactstrap';
import { getEmailToVerify } from '../database/user';

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

const RecoverPass = () => {
  const [user, setUser] = useState('');
  const history = useHistory();

  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [userFromEmail, setUserFromEmail] = useState('');

  const verifyEmail = () => {
    getEmailToVerify(user).then((data) => {
      if(data !== false) {
        setUserFromEmail(data);
        setShowError(false);
        setShowSuccess(true);
        fireAuth
          .sendPasswordResetEmail(user)
          .then(() => {
            // createAlert('Recuperação enviada para seu e-mail');
            setTimeout(() => {
              history.replace('/');
              setShowSuccess(false);
            }, 3000)
          })
          .catch((e) => {
            createAlert(e.message);
          })
      }
      else {
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 4000);
      }
    });
    return true;
  }

  return (
    <Container>
      <DefaultTitle style={{ marginTop: 70, marginBottom: 40 }}>
        Recupere seu acesso a <strong>Woke</strong>
      </DefaultTitle>
      <LoginBox>
      <Alert color="danger" isOpen={showError}>
        Este e-mail não esta cadastrado em nosso sistema !
      </Alert>
      <Alert color="success" isOpen={showSuccess}>
        {userFromEmail}, verifique sua caixa de entrada !
      </Alert>
        <DefaultInput
          value={user}
          label='Usuário'
          type='email'
          onChange={(event) => setUser(event.target.value)}
        />
        <DefaultButton
          onClick={() => verifyEmail()}
          label='Enviar E-Mail'
        />
        <BottomLinks to='/first-access'>Primeiro Acesso?</BottomLinks>
        <BottomLinks to='/login'>Já é registado ?</BottomLinks>
      </LoginBox>
    </Container>
  );
};

export default RecoverPass;
