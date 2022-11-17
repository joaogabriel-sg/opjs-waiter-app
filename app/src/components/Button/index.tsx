import { Text } from '../Text';

import { Container } from './styles';

interface ButtonProps {
  children: string
  disabled?: boolean
  onPress: () => void;
}

export function Button({ children, disabled = false, onPress }: ButtonProps) {
  return (
    <Container onPress={onPress} disabled={disabled}>
      <Text weight='700' color="#ffffff">{children}</Text>
    </Container>
  );
}
