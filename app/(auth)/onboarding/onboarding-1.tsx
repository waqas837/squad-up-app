import { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { colors } from '@/constants/colors';
import { theme } from '@/constants/theme';

export default function OnboardingScreen1() {
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
    <ScrollView 
      style={styles.container}
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
        {/* Phone mockup content */}
        <View style={styles.phoneMockup}>
          {/* Status bar */}
          <View style={styles.statusBar}>
            <Text style={styles.statusBarText}>9:41</Text>
            <View style={styles.statusBarIcons}>
              <View style={styles.signalIcon} />
              <View style={styles.wifiIcon} />
              <View style={styles.batteryIcon} />
            </View>
          </View>

          {/* User Profile Header */}
          <View style={styles.phoneHeader}>
            <View style={styles.profileSection}>
              <View style={styles.avatar} />
              <View style={styles.profileInfo}>
                <Text style={styles.profileName}>Alex Johnson</Text>
                <LinearGradient
                  colors={[colors.gradientStart, colors.gradientEnd]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.premiumBadge}
                >
                  <Text style={styles.premiumText}>Premium</Text>
                </LinearGradient>
              </View>
            </View>
            <View style={styles.headerIcons}>
              <View style={styles.iconButton}>
                <Text style={styles.iconText}>🔔</Text>
              </View>
              <View style={styles.iconButton}>
                <Text style={styles.iconText}>👤</Text>
              </View>
            </View>
          </View>
          
          {/* Quote Section */}
          <View style={styles.quoteContainer}>
            <LinearGradient
              colors={[colors.gradientStart, colors.gradientEnd]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.quoteMarkTop}
            >
              <Text style={styles.quoteMarkText}>"</Text>
            </LinearGradient>
            <Text style={styles.quote}>Consistency is more important than perfection.</Text>
            <LinearGradient
              colors={[colors.gradientStart, colors.gradientEnd]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.quoteMarkBottom}
            >
              <Text style={styles.quoteMarkText}>"</Text>
            </LinearGradient>
          </View>

          {/* Content Blocks Grid */}
          <View style={styles.cardsContainer}>
            {/* Tasks Card */}
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardIcon}>✓</Text>
                <View style={styles.progressBar}>
                  <LinearGradient
                    colors={[colors.gradientStart, colors.gradientEnd]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={[styles.progressFill, { width: '62%' }]}
                  />
                </View>
              </View>
              <Text style={styles.cardLabel}>Tasks</Text>
              <View style={styles.cardValueContainer}>
                <Text style={styles.cardValue}>5/8</Text>
              </View>
            </View>

            {/* Habits Card */}
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardIcon}>∞</Text>
                <View style={styles.streakBadge}>
                  <Text style={styles.streakIcon}>🔥</Text>
                  <Text style={styles.streakText}>9</Text>
                </View>
              </View>
              <Text style={styles.cardLabel}>Habits</Text>
              <View style={styles.cardValueContainer}>
                <Text style={styles.cardValue}>12</Text>
              </View>
            </View>

            {/* Journals Card */}
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardIcon}>📔</Text>
                <View style={styles.streakBadge}>
                  <Text style={styles.streakIcon}>🔥</Text>
                  <Text style={styles.streakText}>9</Text>
                </View>
              </View>
              <Text style={styles.cardLabel}>Journals</Text>
              <View style={styles.cardValueContainer}>
                <Text style={styles.cardValue}>5</Text>
              </View>
            </View>

            {/* Focus Card */}
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardIcon}>⏱</Text>
              </View>
              <Text style={styles.cardLabel}>Focus</Text>
              <View style={styles.cardValueContainer}>
                <Text style={styles.cardValue}>25m</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Content below phone */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Organize your <Text style={styles.highlight}>day with ease</Text>
          </Text>
          <Text style={styles.subtitle}>
            Bring clarity to your routines and focus on what matters most.
          </Text>
        </View>

        {/* Pagination dots */}
        <View style={styles.pagination}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        {/* Buttons */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity 
            style={styles.primaryButton}
            onPress={() => router.push('/(auth)/onboarding/onboarding-2')}
          >
            <Text style={styles.primaryButtonText}>Create an Account</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.secondaryButton}
            onPress={() => router.push('/(tabs)')}
          >
            <Text style={styles.secondaryButtonText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  contentContainer: {
    paddingTop: 60,
    paddingBottom: 40,
  },
  animatedContainer: {
    flex: 1,
  },
  phoneMockup: {
    backgroundColor: '#1A1A1A',
    borderRadius: 24,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 32,
    overflow: 'hidden',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  statusBarText: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '600',
  },
  statusBarIcons: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  signalIcon: {
    width: 18,
    height: 12,
    borderWidth: 1.5,
    borderColor: colors.textPrimary,
    borderRadius: 2,
  },
  wifiIcon: {
    width: 16,
    height: 12,
    borderWidth: 1.5,
    borderColor: colors.textPrimary,
    borderRadius: 2,
  },
  batteryIcon: {
    width: 24,
    height: 12,
    borderWidth: 1.5,
    borderColor: colors.textPrimary,
    borderRadius: 2,
  },
  phoneHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.gradientStart,
  },
  profileInfo: {
    gap: 4,
  },
  profileName: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: '600',
  },
  premiumBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  premiumText: {
    color: colors.textPrimary,
    fontSize: 10,
    fontWeight: '700',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 12,
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#2A2A2A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 18,
  },
  quoteContainer: {
    backgroundColor: 'rgba(42, 42, 42, 0.6)',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    position: 'relative',
  },
  quoteMarkTop: {
    position: 'absolute',
    top: -10,
    left: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quoteMarkBottom: {
    position: 'absolute',
    bottom: -10,
    right: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quoteMarkText: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  quote: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'italic',
    textAlign: 'center',
    lineHeight: 26,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  card: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: 'rgba(42, 42, 42, 0.6)',
    borderRadius: 16,
    padding: 16,
    position: 'relative',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardIcon: {
    fontSize: 24,
  },
  progressBar: {
    width: 60,
    height: 4,
    backgroundColor: '#333333',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 2,
  },
  streakBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  streakIcon: {
    fontSize: 14,
  },
  streakText: {
    color: colors.gradientStart,
    fontSize: 12,
    fontWeight: '600',
  },
  cardLabel: {
    color: colors.textSecondary,
    fontSize: 13,
    marginBottom: 8,
    fontWeight: '500',
  },
  cardValueContainer: {
    alignItems: 'flex-end',
  },
  cardValue: {
    color: colors.textPrimary,
    fontSize: 28,
    fontWeight: '700',
  },
  textContainer: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  title: {
    ...theme.typography.h1,
    color: colors.textPrimary,
    marginBottom: 12,
    textAlign: 'center',
  },
  highlight: {
    color: colors.orange,
  },
  subtitle: {
    ...theme.typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 32,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#333333',
  },
  dotActive: {
    backgroundColor: colors.orange,
    width: 24,
  },
  buttonsContainer: {
    paddingHorizontal: 20,
    gap: 12,
  },
  primaryButton: {
    backgroundColor: colors.buttonPrimary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: colors.buttonSecondary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: '600',
  },
});
