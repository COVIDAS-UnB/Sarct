import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';

function SignIn() {
  function handleSubmit(data) {}
  return (
    <Container>
      <p>AquiGel</p>
      <img
        src="https://i.ytimg.com/vi/sqa2Sfsqsow/maxresdefault.jpg"
        alt="logo"
      ></img>
      <span>Faça seu login</span>
      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Digite seu email"></Input>
        <Input
          name="password"
          type="password"
          placeholder="Digite sua senha"
        ></Input>

        <button type="submit">Acessar</button>
      </Form>
    </Container>
  );
}

export default SignIn;
