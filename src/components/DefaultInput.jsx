import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputStyle = styled.input`
  height: 44px;
  padding-left: 16px;
  border: 1px solid ${({ error }) => (error ? '#ff0f0f' : '#e5e5e5')};
  border-radius: 4px;
  outline: 0;
  width: 100%;
  background-color: #fff;
  color: #333;
  transition: 0.2s;
`;

const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

const LabelStyle = styled.label`
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
  display: block;
  text-align: left;
  width: 100%;
`;

const ErrorMessage = styled.span`
  color: red;
  margin-top: 8px;
  font-size: 0.875rem;
  line-height: 1.125rem;
  width: 100%;
`;

const DefaultInput = ({ label, onChange, value, error, ...rest }) => (
  <InputWrapper>
    <LabelStyle>{label}</LabelStyle>
    <InputStyle error={error} onChange={onChange} value={value} {...rest} />
    {error && <ErrorMessage error={error}>{error}</ErrorMessage>}
  </InputWrapper>
);

DefaultInput.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DefaultInput.defaultProps = {
  label: '',
  error: '',
};

export default DefaultInput;
