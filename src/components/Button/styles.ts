import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  width: 90%;
  height: 56px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-top: 15px;
  background-color: ${({ theme }) => theme.colors.success};
`;

export const Label = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
`;
