import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonStyle = styled.button`
  display: inline-flex;
  align-items: center;
  border-radius: 21px;
  width: auto;
  height: 42px;
  line-height: 42px;
  padding: 0 32px;
  background-color: #f05623;
  color: #fff;
  box-shadow: none;
  border: none;
  outline: 0 !important;
  font-weight: 600;
  margin: 15px 0;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const DefaultButton = ({ label, onClick }) => <ButtonStyle onClick={onClick}>{label}</ButtonStyle>;

DefaultButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DefaultButton;
