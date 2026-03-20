import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { router } from 'expo-router';
import { colors } from '../../src/constants/colors';

export default function SplashScreen() {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [scaleAnim] = useState(new Animated.Value(0.8));

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 8,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      router.replace('/welcome-screen');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topGlow} />
      
      <Animated.View style={[styles.content, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}>
        <View style={styles.iconContainer}>
          <View style={styles.iconRing} />
          <Text style={styles.shieldIcon}>🛡️</Text>
          <View style={styles.bankIcon}>
            <Text style={styles.bankIconText}>💰</Text>
          </View>
        </View>

        <Text style={styles.title}>ProtoRyde</Text>
        <Text style={styles.subtitle}>Income Protection for Delivery Partners</Text>
      </Animated.View>

      <View style={styles.bottomSection}>
        <View style={styles.amberGlow} />
        
        <View style={styles.loadingContainer}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <Text style={styles.footer}>Powered by Guidewire DEVTrails 2026</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryContainer,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 48,
    paddingHorizontal: 24,
  },
  topGlow: {
    position: 'absolute',
    top: -40,
    right: -40,
    width: 256,
    height: 256,
    backgroundColor: colors.primary,
    borderRadius: 128,
    opacity: 0.4,
  },
  content: {
    alignItems: 'center',
    zIndex: 10,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  iconRing: {
    position: 'absolute',
    width: 96,
    height: 96,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.2)',
    borderRadius: 48,
  },
  shieldIcon: {
    fontSize: 80,
  },
  bankIcon: {
    position: 'absolute',
    backgroundColor: colors.onPrimary,
    padding: 8,
    borderRadius: 20,
  },
  bankIconText: {
    fontSize: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.onPrimary,
    letterSpacing: 1,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.outlineVariant,
    letterSpacing: 0.5,
  },
  bottomSection: {
    width: '100%',
    alignItems: 'center',
    zIndex: 10,
  },
  amberGlow: {
    position: 'absolute',
    bottom: -80,
    width: 320,
    height: 320,
    backgroundColor: colors.secondaryContainer,
    opacity: 0.2,
    borderRadius: 160,
  },
  loadingContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 64,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.onPrimary,
    opacity: 0.4,
  },
  dotActive: {
    opacity: 1,
  },
  footer: {
    fontSize: 10,
    fontWeight: '500',
    color: colors.outlineVariant,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
});