import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
  flex: 1;
  background: #fafafa;
`;

export const CategoriesContainer = styled.View`
  margin-top: 24px;
`;

export const MenuContainer = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  background: #ffffff;
  min-height: 110px;
  padding: 16px 24px;
`;

export const FooterContainer = styled.SafeAreaView``;

export const CenteredContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
