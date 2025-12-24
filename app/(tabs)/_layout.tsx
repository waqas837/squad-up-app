import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs 
      screenOptions={{ 
        headerShown: false,
        tabBarStyle: {
          display: 'none',
        },
      }}
    >
      <Tabs.Screen 
        name="events/index" 
        options={{ 
          href: null,
        }} 
      />
      <Tabs.Screen 
        name="events/[id]" 
        options={{ 
          href: null,
        }} 
      />
    </Tabs>
  );
}
