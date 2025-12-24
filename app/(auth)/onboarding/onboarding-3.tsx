import { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { colors } from '@/constants/colors';
import { theme } from '@/constants/theme';

export default function OnboardingScreen3() {
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <LinearGradient
      colors={['#2A1A3D', '#0A0D12']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      {/* Blur glow effects */}
      <View style={styles.blurFrame1} />
      <View style={styles.blurFrame2} />

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View
          style={[
            styles.animatedContainer,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          {/* Phone mockup image */}
          <Image 
            source={require('@/assets/images/onboarding-3.png')}
            style={styles.phoneMockup}
            resizeMode="contain"
          />

          {/* Content container with background */}
          <View style={styles.contentCard}>
            {/* Content below phone */}
            <View style={styles.textContainer}>
              <Text style={styles.title}>
                Turn Habits{'\n'}
                <Text style={styles.highlight}>into Progress</Text>
              </Text>
              <Text style={styles.subtitle}>
                Build consistency that transforms efforts into results.
              </Text>
            </View>

            {/* Pagination dots */}
            <View style={styles.pagination}>
              <View style={styles.dot} />
              <View style={styles.dot} />
              <View style={[styles.dot, styles.dotActive]} />
            </View>

            {/* Buttons */}
            <View style={styles.buttonsContainer}>
              <TouchableOpacity 
                style={styles.primaryButton}
                onPress={() => router.push('/(auth)/signup')}
              >
                <Text style={styles.primaryButtonText}>Create an Account</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.secondaryButton}
                onPress={() => router.push('/(auth)/login')}
              >
                <Text style={styles.secondaryButtonText}>Log In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  blurFrame1: {
    position: 'absolute',
    width: 262,
    height: 262,
    left: 250,
    top: -25,
    backgroundColor: 'rgba(255, 104, 77, 0.2)',
    borderRadius: 1567.293,
    shadowColor: 'rgba(255, 104, 77, 0.5)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 33.025,
    elevation: 0,
  },
  blurFrame2: {
    position: 'absolute',
    width: 219,
    height: 177,
    left: -49,
    top: 237,
    backgroundColor: 'rgba(255, 98, 249, 0.2)',
    borderRadius: 1567.293,
    shadowColor: 'rgba(255, 98, 249, 0.5)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 33.025,
    elevation: 0,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingTop: 60,
  },
  animatedContainer: {
    flex: 1,
  },
  phoneMockup: {
    width: '85%',
    height: 450,
    alignSelf: 'center',
    marginBottom: -100,
    zIndex: 1,
  },
  contentCard: {
    backgroundColor: 'rgba(50, 40, 55, 0.95)',
    marginHorizontal: 0,
    borderRadius: 0,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 120,
    paddingBottom: 40,
    paddingHorizontal: 24,
    alignItems: 'center',
    flex: 1,
  },
  textContainer: {
    marginBottom: 24,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 42,
    color: '#FCFCFD',
    marginBottom: 12,
    textAlign: 'center',
  },
  highlight: {
    color: '#FF684D',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 20,
    color: '#D5D7DA',
    textAlign: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
    marginBottom: 32,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  dotActive: {
    backgroundColor: '#FF684D',
    width: 25,
    height: 8,
    borderRadius: 4,
  },
  buttonsContainer: {
    gap: 12,
    width: '100%',
  },
  primaryButton: {
    backgroundColor: '#FF684D',
    borderRadius: 28,
    paddingVertical: 16,
    alignItems: 'center',
    width: '100%',
  },
  primaryButtonText: {
    color: '#121926',
    fontSize: 17,
    fontWeight: '700',
  },
  secondaryButton: {
    backgroundColor: 'rgba(255, 104, 77, 0.15)',
    borderRadius: 28,
    paddingVertical: 16,
    alignItems: 'center',
    width: '100%',
  },
  secondaryButtonText: {
    color: '#FCFCFD',
    fontSize: 17,
    fontWeight: '700',
  },
});

