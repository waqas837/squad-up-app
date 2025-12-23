import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { colors } from '@/constants/colors';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/(auth)/onboarding/onboarding-1');
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {/* Infinity symbol logo - simplified representation */}
        <View style={styles.logoWrapper}>
          <View style={styles.infinityShape}>
            <View style={styles.infinityLoop1} />
            <View style={styles.infinityLoop2} />
          </View>
        </View>
        <Text style={styles.logoText}>Momentum</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logoWrapper: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infinityShape: {
    width: 32,
    height: 20,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infinityLoop1: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: colors.gradientStart,
    position: 'absolute',
    left: 0,
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  infinityLoop2: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: colors.gradientEnd,
    position: 'absolute',
    right: 0,
    borderLeftColor: 'transparent',
    borderTopColor: 'transparent',
  },
  logoText: {
    fontSize: 28,
    fontWeight: '600',
    color: colors.gradientStart,
  },
});

