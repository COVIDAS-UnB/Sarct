import { Entypo, Ionicons } from '@expo/vector-icons';
import { Form } from '@unform/core';
import React, { useRef } from 'react';
import { TouchableOpacity } from 'react-native';

import {
  Container,
  Title,
  Logo,
  Login,
  SubTitle,
  Button,
  StyledInput,
  IconInput,
} from './styles';

const SignIn = () => {
  const formRef = useRef(null);

  async function handleSubmit({ email, password }) { }

  return (
    <Container>
      <Title>AquiGel</Title>
      <Logo
        source={{ uri: 'https://i.ytimg.com/vi/sqa2Sfsqsow/maxresdefault.jpg' }}
      />
      <Login>
        <SubTitle>Faça seu login</SubTitle>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <IconInput>
            <Entypo name="email" size={20} color="#0279db" />
          </IconInput>
          <StyledInput
            name="email"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu email"
          />
          <IconInput>
            <Ionicons name="ios-key" size={20} color="#0279db" />
          </IconInput>
          <StyledInput
            name="password"
            autoCapitalize="none"
            secureTextEntry
            placeholder="Senha"
          />
        </Form>
        <TouchableOpacity onPress={() => formRef.current.submitForm()}>
          <Button>Entrar</Button>
        </TouchableOpacity>
      </Login>
    </Container>
  );
};

export default SignIn;
