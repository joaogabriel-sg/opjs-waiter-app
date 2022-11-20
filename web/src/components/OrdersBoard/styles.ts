import styled from 'styled-components';

export const Board = styled.div`
  padding: 16px;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 16px;

  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  > header {
    padding: 8px;
    font-size: 14px;

    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const OrdersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 24px;

  button {
    background: #ffffff;
    width: 100%;
    height: 128px;
    border: 1px solid rgba(204, 204, 204, 0.4);
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;

    strong {
      font-weight: 500;
      color: #666
    }

    & + button {
      margin-top: 24px;
    }
  }
`;
