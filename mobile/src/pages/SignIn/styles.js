import styled from 'styled-components/native';

import Input from '~/components/Input';

export const Container = styled.ScrollView.attrs({})`
  flex: 1;
  background: #f2f5ff;
  padding: 100px 40px;
`;

export const Title = styled.Text`
  font-size: 50px;
  color: #0279db;
  font-family: Comfortaa;
  align-self: center;
`;

export const Logo = styled.Image`
  margin-top: 15px;
  width: 200px;
  align-self: center;
  height: 194px;
`;

export const Login = styled.KeyboardAvoidingView`
  margin-top: 15px;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  color: #0279db;
  font-family: Comfortaa;
  align-self: center;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 25px;
  background: #0279db;
  padding: 10px;
  width: 180px;
  border-radius: 4px;
  align-self: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #f2f5ff;
  font-family: ComfortaaBold;
  font-size: 18px;
`;

export const StyledInput = styled(Input)`
  border-bottom-width: 1px;
  border-width: 0;
  padding-left: 30px;
  font-family: Comfortaa;
  letter-spacing: 1px;
  font-size: 16px;
  width: 100%;
`;

export const IconInput = styled.View`
  position: relative;
  bottom: -34px;
`;
