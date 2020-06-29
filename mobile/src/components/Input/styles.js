import styled from 'styled-components/native';

export const StyledInput = styled.TextInput`
  width: 100%;
  margin: 5px auto 0;
  border: 1px solid ${(props) => (props.error ? '#FB4C4D' : '#0279db')};
  padding: 5px 20px;
  text-align: left;
`;

export const ErrorText = styled.Text`
  color: #fb4c4d;
  font-family: Comfortaa;
  text-align: center;
  margin-top: 5px;
`;
