import styled from 'styled-components';

const LoginBox = styled.div`
  border: 1px solid #f2f2f2;
  border-radius: 4px;
  background-color: #f9f9f9;
  width: 30%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1200px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export default LoginBox;
