import styled from 'styled-components/native';

import Input from '~/components/Input';

export const Container = styled.View`
  flex: 1;
  background: #f2f5ff;
  padding: 100px 40px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 50px;
  color: #0279db;
  font-family: Comfortaa;
`;

export const Logo = styled.Image`
  margin-top: 15px;
  width: 200px;
  height: 160px;
`;

export const Login = styled.View`
  margin-top: 15px;
  width: 100%;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  color: #0279db;
  font-family: Comfortaa;
  align-self: center;
`;

export const Button = styled.Text`
  margin-top: 25px;
  background: #0279db;
  padding: 10px 60px;
  border-radius: 4px;
  color: #fff;
  font-family: ComfortaaBold;
  font-size: 18px;
  align-self: center;
`;

export const StyledInput = styled(Input)`
  border-bottom-width: 1px;
  border-width: 0;
  padding-left: 30px;
  font-family: Comfortaa;
  letter-spacing: 1px;
  font-size: 16px;
`;

export const IconInput = styled.View`
  position: relative;
  bottom: -34px;
`;
