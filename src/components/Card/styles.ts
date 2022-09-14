import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 90%;
  height: 40%;
  margin-top: ${RFValue(18)}px;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.colors.white};
  flex-direction: row;
  justify-content: space-between;
`;

export const Content = styled.View`
  padding: 10px 20px;
`;

export const VehicleName = styled.Text`
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
`;

export const VehicleBrand = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  margin-top: 5px;
`;

export const RowGroup = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;

export const Price = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
`;

export const ExpandCard = styled.TouchableOpacity`
  width: 45px;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.colors.primary};
`;
