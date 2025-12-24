import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { SvgXml } from 'react-native-svg';

// SVG content from files
const googleIconSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107"/>
<path d="M3.15332 7.3455L6.43882 9.755C7.32782 7.554 9.48082 6 12.0003 6C13.5298 6 14.9213 6.577 15.9808 7.5195L18.8093 4.691C17.0233 3.0265 14.6343 2 12.0003 2C8.15932 2 4.82832 4.1685 3.15332 7.3455Z" fill="#FF3D00"/>
<path d="M12.0002 21.9999C14.5832 21.9999 16.9302 21.0114 18.7047 19.4039L15.6097 16.7849C14.5719 17.574 13.3039 18.0009 12.0002 17.9999C9.39916 17.9999 7.19066 16.3414 6.35866 14.0269L3.09766 16.5394C4.75266 19.7779 8.11366 21.9999 12.0002 21.9999Z" fill="#4CAF50"/>
<path d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#1976D2"/>
</svg>`;

const fbIconSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z" fill="url(#paint0_linear_9600_22921)"/>
<path d="M13.3538 14.6505H15.9418L16.3483 12.0215H13.3538V10.5845C13.3538 9.49246 13.7108 8.52396 14.7323 8.52396H16.3738V6.22996C16.0853 6.19096 15.4753 6.10596 14.3228 6.10596C11.9158 6.10596 10.5048 7.37696 10.5048 10.273V12.022H8.03027V14.651H10.5043V21.877C10.9943 21.95 11.4908 22 12.0003 22C12.4608 22 12.9103 21.958 13.3538 21.898V14.6505Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_9600_22921" x1="4.9965" y1="4.9965" x2="20.3075" y2="20.3075" gradientUnits="userSpaceOnUse">
<stop stop-color="#2AA4F4"/>
<stop offset="1" stop-color="#007AD9"/>
</linearGradient>
</defs>
</svg>`;

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(255, 124, 100, 0.1)', 'rgba(216, 167, 229, 0.1)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>
              Pick up where you left off and keep the momentum going.
            </Text>
          </View>

          {/* Form */}
          <View style={styles.form}>
            {/* Email Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Email Address"
                placeholderTextColor="rgba(255, 255, 255, 0.25)"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* Password Input */}
            <View style={styles.passwordContainer}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Placeholder"
                  placeholderTextColor="rgba(255, 255, 255, 0.25)"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                  autoCapitalize="none"
                />
              </View>
              <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forget Password?</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Buttons */}
          <View style={styles.buttonsContainer}>
            {/* Sign In Button */}
            <TouchableOpacity
              style={styles.signInButton}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={['rgba(255, 172, 157, 1)', 'rgba(255, 104, 77, 1)']}
                start={{ x: 0.895, y: 0.267 }}
                end={{ x: 0.901, y: 0.901 }}
                style={styles.gradientButton}
              >
                <Text style={styles.signInButtonText}>Sign In</Text>
              </LinearGradient>
            </TouchableOpacity>

            {/* Sign Up Prompt */}
            <View style={styles.signUpPrompt}>
              <Text style={styles.signUpText}>
                Don't have an account?{' '}
                <Text style={styles.signUpLink} onPress={() => router.push('/(auth)/signup')}>
                  Sign Up
                </Text>
              </Text>
            </View>

            {/* Social Login Buttons */}
            <View style={styles.socialContainer}>
              <TouchableOpacity style={styles.socialButton} activeOpacity={0.8}>
                <SvgXml xml={googleIconSvg} width={24} height={24} />
                <Text style={styles.socialButtonText}>Continue with Google</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton} activeOpacity={0.8}>
                <SvgXml xml={fbIconSvg} width={24} height={24} />
                <Text style={styles.socialButtonText}>Continue with Facebook</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0D12',
  },
  keyboardView: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 48,
    paddingBottom: 40,
    paddingHorizontal: 24,
    flexGrow: 1,
  },
  header: {
    marginBottom: 41,
    gap: 8,
  },
  title: {
    fontFamily: 'Fraunces',
    fontSize: 26,
    fontWeight: '700',
    lineHeight: 30,
    letterSpacing: -0.26,
    color: '#FF7C64',
  },
  subtitle: {
    fontFamily: 'Nunito Sans',
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.14,
    color: '#D5D7DA',
    width: 282,
  },
  form: {
    marginBottom: 27,
    gap: 21,
  },
  inputContainer: {
    gap: 8,
    width: '100%',
  },
  passwordContainer: {
    gap: 12,
    width: '100%',
    alignItems: 'flex-end',
  },
  label: {
    fontFamily: 'Nunito Sans',
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: -0.16,
    color: '#D5D7DA',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 12,
    height: 48,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontFamily: 'Nunito Sans',
    fontSize: 15,
    fontWeight: '500',
    color: '#FCFCFD',
  },
  forgotPassword: {
    fontFamily: 'Nunito Sans',
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: -0.16,
    color: '#FF7C64',
  },
  buttonsContainer: {
    gap: 27,
    width: '100%',
  },
  signInButton: {
    width: '100%',
    height: 47,
    borderRadius: 999,
    overflow: 'hidden',
  },
  gradientButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 61,
    paddingVertical: 12,
  },
  signInButtonText: {
    fontFamily: 'Nunito Sans',
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 23,
    letterSpacing: -0.18,
    color: '#121926',
  },
  signUpPrompt: {
    width: '100%',
    alignItems: 'center',
  },
  signUpText: {
    fontFamily: 'Nunito Sans',
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: -0.16,
    color: '#D5D7DA',
    textAlign: 'center',
  },
  signUpLink: {
    fontFamily: 'Nunito Sans',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 18,
    letterSpacing: -0.16,
    color: '#FF7C64',
    textDecorationLine: 'underline',
  },
  socialContainer: {
    gap: 12,
    width: '100%',
  },
  socialButton: {
    backgroundColor: 'rgba(255, 104, 77, 0.15)',
    borderRadius: 999,
    height: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 61,
    paddingVertical: 12,
    width: '100%',
  },
  socialButtonText: {
    fontFamily: 'Nunito Sans',
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 23,
    letterSpacing: -0.18,
    color: '#FCFCFD',
  },
});

