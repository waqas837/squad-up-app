import { Tabs } from 'expo-router';
import { Text } from 'react-native';

export default function TabsLayout() {
  return (
    <Tabs 
      screenOptions={{ 
        headerShown: false,
        tabBarActiveTintColor: '#FF7C64',
        tabBarInactiveTintColor: '#666666',
        tabBarStyle: {
          backgroundColor: '#1A1A1A',
          borderTopColor: '#333333',
        },
      }}
    >
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: 'Home',
          tabBarIcon: () => <Text style={{ fontSize: 20 }}>🏠</Text>,
        }} 
      />
      <Tabs.Screen 
        name="events/index" 
        options={{ 
          title: 'Events',
          tabBarIcon: () => <Text style={{ fontSize: 20 }}>📅</Text>,
        }} 
      />
    </Tabs>
  );
}
