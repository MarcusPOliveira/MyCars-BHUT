import styled from 'styled-components/native';
import { RFValue } from "react-native-responsive-fontsize";


export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 120%;
  height: 22%;
  margin-top: -50px;
  margin-left: -20px;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: flex-start;
  justify-content: center;
  transform: skewY(-10deg);
  padding: 40px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  transform: skewY(10deg);
  margin-top: 20px;
`;

export const Content = styled.View`
  height: 100%;
`;

export const CarsQuantityWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 40px 24px;
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

export const Footer = styled.View`
  background-color: red;
  align-items: center;
`;
