import { Form, Input } from '@rocketseat/unform';
import React from 'react';

import logo from '../../assets/Logo.png';
import { Container } from './styles';

function SignIn() {
  function handleSubmit(data) { }
  return (
    <Container>
      <p>AquiGel</p>
      <img src={logo} alt="logo" />
      <span>Faça seu login</span>
      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Digite seu email" />
        <Input name="password" type="password" placeholder="Digite sua senha" />

        <button type="submit">Acessar</button>
      </Form>
    </Container>
  );
}

export default SignIn;
