import { Entypo, Ionicons } from '@expo/vector-icons';
import { Form } from '@unform/core';
import React, { useRef } from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import * as Yup from 'yup';

import {
  Container,
  Title,
  Logo,
  Login,
  SubTitle,
  ButtonText,
  StyledInput,
  IconInput,
  Button,
} from './styles';
import { useAuth } from '~/contexts/auth';

const SignIn = () => {
  const formRef = useRef(null);
  const { signIn, loading } = useAuth();

  async function handleSubmit(data, { reset }) {
    formRef.current.setErrors({});
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um email válido')
          .required('O email é obrigatório'),
        password: Yup.string().min(6).required('A senha é obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      signIn(data, reset);
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });

        formRef.current.setErrors(validationErrors);
      }
    }
  }

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
            keyboardType="email-address"
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
        <Button onPress={() => formRef.current.submitForm()}>
          {loading ? (
            <ActivityIndicator size={26} color="#f2f5ff" />
          ) : (
              <ButtonText>Entrar</ButtonText>
            )}
        </Button>
      </Login>
    </Container>
  );
};

export default SignIn;
