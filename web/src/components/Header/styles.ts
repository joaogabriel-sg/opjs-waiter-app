import styled from 'styled-components';

export const Container = styled.header`
  background: #D73035;
  height: 198px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .page-details {
    h1 {
      font-size: 32px;
      color: #ffffff;
    }

    h2 {
      font-size: 16px;
      font-weight: 400;
      color: #ffffff;
      opacity: 0.9;
      margin-top: 6px;
    }
  }
`;
