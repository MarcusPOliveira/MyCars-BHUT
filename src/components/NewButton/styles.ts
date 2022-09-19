import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.success};
  margin: 70px 30px;
`;
