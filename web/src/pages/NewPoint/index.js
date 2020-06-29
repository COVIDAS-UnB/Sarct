import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';

function SignIn() {
  function handleSubmit(data) {}
  return (
    <Container>
      <p>AquiGel</p>

      <span>Cadastre um novo ponto de reabastecimento</span>
      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Digite o nome"></Input>
        <Input
          name="locale"
          placeholder="Digite um ponto de referencia"
        ></Input>

        <span>
          Clique num ponto do mapa que melhor representa a posição do dispenser
        </span>

        <button type="submit">Criar ponto</button>
      </Form>
    </Container>
  );
}

export default SignIn;
