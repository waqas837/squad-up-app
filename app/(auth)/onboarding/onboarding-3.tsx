import { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated } from 'react-native';
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

          {/* Header */}
          <View style={styles.phoneHeader}>
            <Text style={styles.sectionTitle}>Habits</Text>
          </View>

          {/* Streak Section */}
          <View style={styles.streakSection}>
            <Text style={styles.streakTitle}>Build consistency</Text>
            <LinearGradient
              colors={[colors.gradientStart, colors.gradientEnd]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.streakBadge}
            >
              <Text style={styles.streakText}>4 Day</Text>
            </LinearGradient>
          </View>

          {/* Tabs */}
          <View style={styles.tabsContainer}>
            <LinearGradient
              colors={[colors.gradientStart, colors.gradientEnd]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.tabActive}
            >
              <Text style={styles.tabTextActive}>Today</Text>
            </LinearGradient>
            <View style={styles.tab}>
              <Text style={styles.tabText}>Overview</Text>
            </View>
          </View>

          {/* Progress Section */}
          <View style={styles.progressSection}>
            <Text style={styles.progressTitle}>Today's Progress</Text>
            <Text style={styles.progressValue}>5 of 8 habits completed</Text>
          </View>

          {/* Leaderboard Section */}
          <View style={styles.leaderboardSection}>
            <Text style={styles.leaderboardTitle}>Streak Leaderboard</Text>
            <View style={styles.leaderboardItem}>
              <LinearGradient
                colors={[colors.gradientStart, colors.gradientEnd]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.leaderboardRank}
              >
                <Text style={styles.leaderboardRankText}>1</Text>
              </LinearGradient>
              <View style={styles.leaderboardAvatar} />
              <View style={styles.leaderboardInfo}>
                <Text style={styles.leaderboardName}>You</Text>
                <Text style={styles.leaderboardStreak}>4 days</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Content below phone */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Turn Habits <Text style={styles.highlight}>into Progress</Text>
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
            onPress={() => router.push('/(tabs)')}
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
    marginBottom: 20,
  },
  sectionTitle: {
    color: colors.textPrimary,
    fontSize: 24,
    fontWeight: '700',
  },
  streakSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
    backgroundColor: 'rgba(42, 42, 42, 0.6)',
    borderRadius: 12,
    padding: 16,
  },
  streakTitle: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: '700',
  },
  streakBadge: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  streakText: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '700',
  },
  tabsContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 24,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: 'rgba(42, 42, 42, 0.6)',
  },
  tabActive: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  tabText: {
    color: colors.textSecondary,
    fontSize: 14,
    fontWeight: '600',
  },
  tabTextActive: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '700',
  },
  progressSection: {
    marginBottom: 24,
    backgroundColor: 'rgba(42, 42, 42, 0.6)',
    borderRadius: 12,
    padding: 16,
  },
  progressTitle: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  progressValue: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  leaderboardSection: {
    backgroundColor: 'rgba(42, 42, 42, 0.6)',
    borderRadius: 12,
    padding: 16,
  },
  leaderboardTitle: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 16,
  },
  leaderboardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  leaderboardRank: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leaderboardRankText: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: '700',
  },
  leaderboardAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.gradientEnd,
  },
  leaderboardInfo: {
    flex: 1,
  },
  leaderboardName: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 2,
  },
  leaderboardStreak: {
    color: colors.textSecondary,
    fontSize: 12,
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
