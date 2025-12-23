import { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { colors } from '@/constants/colors';
import { theme } from '@/constants/theme';

export default function OnboardingScreen2() {
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
            <Text style={styles.sectionTitle}>Checklists</Text>
          </View>
          
          {/* Progress Section */}
          <View style={styles.progressSection}>
            <Text style={styles.progressTitle}>Overall Progress</Text>
            <Text style={styles.progressSubtitle}>4 Lists</Text>
            <View style={styles.progressBarContainer}>
              <LinearGradient
                colors={[colors.gradientStart, colors.gradientEnd]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[styles.progressBarFill, { width: '37.5%' }]}
              />
            </View>
            <Text style={styles.progressText}>15 of 40 items completed</Text>
          </View>

          {/* Checklist Items */}
          <View style={styles.checklistContainer}>
            <View style={styles.checklistItem}>
              <View style={styles.checklistContent}>
                <Text style={styles.checklistTitle}>Morning meditation</Text>
                <Text style={styles.checklistSubtitle}>10 minutes mindfulness practice</Text>
                <View style={styles.progressBarContainer}>
                  <LinearGradient
                    colors={[colors.gradientStart, colors.gradientEnd]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={[styles.progressBarFill, { width: '12%' }]}
                  />
                </View>
                <Text style={styles.progressText}>4/34</Text>
              </View>
            </View>
            
            <View style={styles.checklistItem}>
              <LinearGradient
                colors={[colors.gradientStart, colors.gradientEnd]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.checkIcon}
              >
                <Text style={styles.checkMark}>✓</Text>
              </LinearGradient>
              <View style={styles.checklistContent}>
                <Text style={[styles.checklistTitle, styles.checkedText]}>Drink water (500ml)</Text>
              </View>
            </View>
            
            <View style={styles.checklistItem}>
              <LinearGradient
                colors={[colors.gradientStart, colors.gradientEnd]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.checkIcon}
              >
                <Text style={styles.checkMark}>✓</Text>
              </LinearGradient>
              <View style={styles.checklistContent}>
                <Text style={[styles.checklistTitle, styles.checkedText]}>Morning stretch (10 minutes)</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Content below phone */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Stay Present <Text style={styles.highlight}>Stay, Balanced</Text>
          </Text>
          <Text style={styles.subtitle}>
            Track your moments and maintain mindful momentum.
          </Text>
        </View>

        {/* Pagination dots */}
        <View style={styles.pagination}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
        </View>

        {/* Buttons */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity 
            style={styles.primaryButton}
            onPress={() => router.push('/(auth)/onboarding/onboarding-3')}
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
  progressSection: {
    marginBottom: 24,
    backgroundColor: 'rgba(42, 42, 42, 0.6)',
    borderRadius: 16,
    padding: 16,
  },
  progressTitle: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
  },
  progressSubtitle: {
    color: colors.textSecondary,
    fontSize: 14,
    marginBottom: 12,
  },
  progressBarContainer: {
    width: '100%',
    height: 8,
    backgroundColor: '#333333',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 4,
  },
  progressText: {
    color: colors.textSecondary,
    fontSize: 12,
  },
  checklistContainer: {
    gap: 16,
  },
  checklistItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    backgroundColor: 'rgba(42, 42, 42, 0.6)',
    borderRadius: 12,
    padding: 16,
  },
  checkIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  checkMark: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: '700',
  },
  checklistContent: {
    flex: 1,
  },
  checklistTitle: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 4,
  },
  checklistSubtitle: {
    color: colors.textSecondary,
    fontSize: 12,
    marginBottom: 8,
  },
  checkedText: {
    textDecorationLine: 'line-through',
    opacity: 0.5,
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
