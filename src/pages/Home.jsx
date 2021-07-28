import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { fireAuth } from '../config/firebase';

import { getUser } from '../database/user';

import DefaultTitle from '../components/DefaultTitle';
import DefaultText from '../components/DefaultText';
import DefaultButton from '../components/DefaultButton';
import Logo from '../assets/images/WokeLogo.png';
import reactDom from 'react-dom';

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Spacer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 80px;
`;

const HeaderContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: inset 10px 0 20px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  padding: 0 20%;

  @media (max-width: 1200px) {
    padding: 0 3%;
    height: 80px;
  }
`;

const HeaderContainerMain = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 10px 0 20px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  padding: 0 20%;

  @media (max-width: 1200px) {
    padding: 0 3%;
    height: 80px;
  }
`;

const Mailto = ({ email, subject, body, children }) => {
    return (
      <a  style={{ border: '1px solid', padding: 20, color: 'white', backgroundColor: '#f05623', borderRadius: 15, fontWeight: 600, textDecoration: 'none'}}
       href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`} >{children}</a>
    );
  };

const Home = () => {
  const [ user, setUser ] = useState({});

  useEffect(() => {
    getUser().then((data) => setUser(data));
  }, [])

  return (
    <Container>
        <HeaderContainerMain>
            <HeaderContainer>
                <img src={Logo} style={{ height: 40 }} />
                <DefaultButton label='Desconectar' onClick={() => fireAuth.signOut()} />
            </HeaderContainer>
        </HeaderContainerMain>
      <DefaultTitle style={{ marginTop: 70 }}>
        Área restrita do usuário <strong>{user?.nome}</strong>
      </DefaultTitle>
      <Spacer />
      <DefaultText>
        Telefone <strong>{user?.telefone}</strong>
      </DefaultText>
      <DefaultText>
        Data De Nascimento <strong>{user?.nascimento}</strong>
      </DefaultText>
      <DefaultText>
        E-mail <strong>{user?.email}</strong>
      </DefaultText>
      <Spacer />
      <Mailto email={user?.email} 
        children='Enviar dados para as empresas ( Sera enviado em seu e-mail cadastrado ) !'
        subject='Dados do profissional' 
        body={`
        Olá, seguem as informações sobre o profissional !

        Nome ${user?.nome}, 
        Telefone: ${user?.telefone},
        Data De Nascimento: ${user?.nascimento}
        E-mail: ${user?.email} 
        `}
        />
    </Container>
  );
};

export default Home;

