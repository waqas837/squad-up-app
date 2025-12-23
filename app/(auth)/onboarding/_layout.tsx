import { Stack } from 'expo-router';

export default function OnboardingLayout() {
  return (
    <Stack>
      <Stack.Screen name="splash" options={{ headerShown: false }} />
      <Stack.Screen name="onboarding-1" options={{ headerShown: false }} />
      <Stack.Screen name="onboarding-2" options={{ headerShown: false }} />
      <Stack.Screen name="onboarding-3" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
