import styled from 'styled-components';
import { darken } from 'polished';
export const Filter = styled.div``;

export const DispenserList = styled.ul`
  padding: 20px 0;
  li {
    display: flex;
    background: #fff;
    margin-bottom: 15px;
    justify-content: space-between;
    padding: 15px 10px;
    border-radius: 5px;

    div {
      h4 {
        color: #0279db;
      }
      p {
        color: #12243ee6;
        margin-top: 10px;

        span {
          color: green;
        }
      }
    }

    div {
      p {
        color: #12243ee6;
      }
      strong {
        color: #12243ee6;
        margin-top: 10px;
      }
    }

    button {
      background: #0279db;
      padding: 10px;
      border: none;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;
      &:hover {
        background: ${darken(0.05, '#0279db')};
      }
    }
  }
`;
