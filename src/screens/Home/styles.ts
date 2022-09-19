import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
`;

export const Header = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.colors.gradient,
  start: { x: 0.0, y: 0.4 },
  end: { x: 0, y: 1.3 },
}))`
  width: 100%;
  height: 25%;
  align-items: flex-start;
  padding: ${getStatusBarHeight() + 20}px 50px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  margin-top: -50px;
`;

export const CarsQuantityWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px 24px;
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;

export const Quantity = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
`;

export const FilterArea = styled.View`
  margin: 30px 0px;
`;

export const List = styled.View``;

export const Footer = styled.View`
  width: 100%;
  height: 100%;
  align-items: flex-end;
`;
