import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;

  p {
    font-size: 50px;
    color: #0279db;
  }

  span {
    margin-top: 20px;
    font-size: 15px;
    color: #0279db;
    text-align: center;
  }

  form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    width: 400px;

    input {
      background: #fff;
      border: 0;
      border-radius: 5px;
      height: 40px;
      margin: 0 0 10px;
      padding: 0 15px;
    }

    button {
      margin: 20px 0;
      background: #0279db;
      border: 0;
      border-radius: 5px;
      height: 40px;
      color: #fff;
      font-weight: bold;
      transition: background 0.3s;

      &:hover {
        background: ${darken(0.05, '#0279db')};
      }
    }
  }
`;
