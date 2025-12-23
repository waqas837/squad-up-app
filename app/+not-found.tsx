import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function NotFound() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>404 - Page Not Found</Text>
      <Link href="/">
        <Text>Go to Home</Text>
      </Link>
    </View>
  );
}
