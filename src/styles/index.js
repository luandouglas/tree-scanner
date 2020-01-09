import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  flex-direction: column;
`;
export const Row = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #aaa;
  height: 50px;
  flex-direction: row;
  align-items: center;
`;
export const Header = styled.View`
  background: #2caf1e;
  height: 60px;
  flex-direction: row;
  align-items: center;
`;
export const Field = styled.View`
  flex-direction: column;
  justify-content: center;
  margin: 0 15px;
`;
export const Label = styled.Text`
  font-weight: 500;
  font-size: 15px;
`;
export const Text = styled.Text``;
export const Input = styled.TextInput`
  border-bottom-width: 1px;
  border-color: #ccc;
`;
export const Button = styled.TouchableOpacity``;
