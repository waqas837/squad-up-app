import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function EventDetail() {
  const { id } = useLocalSearchParams();
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Event Detail Screen</Text>
      <Text>Event ID: {id}</Text>
    </View>
  );
}
