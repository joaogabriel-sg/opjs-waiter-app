import { ActivityIndicator } from 'react-native';

import { Text } from '../Text';

import { Container } from './styles';

interface ButtonProps {
  children: string
  disabled?: boolean
  loading?: boolean
  onPress: () => void;
}

export function Button({
  children,
  disabled = false,
  loading = false,
  onPress
}: ButtonProps) {
  return (
    <Container onPress={onPress} disabled={disabled || loading}>
      {!loading && (
        <Text weight='700' color="#ffffff">{children}</Text>
      )}

      {loading && (
        <ActivityIndicator color="#ffffff" />
      )}
    </Container>
  );
}
