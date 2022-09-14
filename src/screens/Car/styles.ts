import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: space-between;
`;

export const Header = styled.View`
  height: 30%;
  justify-content: space-between;
`;

export const RowGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 50px 30px;
`;

export const DeleteButton = styled.TouchableOpacity``;

export const DeleteLabel = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const ImageWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

export const CarImage = styled.Image`
  width: 254px;
  height: 134px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 20,
  }
})`
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
`;

export const Wrapper = styled.View`
  padding-left: 40px;
`;

export const InputLabel = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-top: 10px;
`;

export const InputGroup = styled.View`
  width: 100%;
  align-items: center;
`;

export const Footer = styled.View`
  width: 100%;
  align-items: center;
`;
