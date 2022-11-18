import styled from 'styled-components/native';

export const Image = styled.ImageBackground`
  width: 100%;
  height: 200px;
  align-items: flex-end;
`;

export const CloseButton = styled.TouchableOpacity`
  background: rgba(0, 0, 0, 0.5);
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin: 24px;

  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.View`
  background: #fafafa;
  flex: 1;
  padding: 32px 24px 0;
`;

export const Header = styled.View``;

export const IngredientsContainer = styled.View`
  margin-top: 32px;
  flex: 1;
`;

export const Ingredient = styled.View`
  padding: 16px;
  border-radius: 8px;
  border: 1px solid rgba(204, 204, 204, 0.3);
  margin-bottom: 4px;

  flex-direction: row;
  align-items: center;
`;

export const Footer = styled.View`
  background: #ffffff;
  min-height: 110px;
  padding: 16px 24px;
`;

export const FooterContainer = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PriceContainer = styled.View``;
