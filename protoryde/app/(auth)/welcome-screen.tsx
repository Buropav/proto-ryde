import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { colors } from '../../src/constants/colors';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoRow}>
          <Text style={styles.shieldIcon}>🛡️</Text>
          <Text style={styles.logoText}>ProtoRyde</Text>
        </View>
        <Text style={styles.stepText}>Step 1 of 5</Text>
      </View>

      <View style={styles.heroSection}>
        <View style={styles.heroGlow} />
        <View style={styles.heroContent}>
          <Image
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnIMxJgD0KrnGJqpaPXNymWZZkuWdj3UWAcectb9-kJQEyWwvG6cZvPocy-cxCWQfUEr_6v_QaEv-tnn_bfSK-ndiQYDUFDYc0kgqtRQRQOotisQrMAaN8T7eZqEWulfxK6mR58FlV_8tUSeG-eYyZRpQcifrppdTGtsNVrDOBM4sMUDBq8zWxtVSGBc6JYSGK6HtUp_drX69z7Oiq3s1UKZ7WibBL10CHNsItCI1UD5erbS1X1RSdHKkNwx_q7ZWfMyBdRTlspg' }}
            style={styles.heroImage}
            resizeMode="cover"
          />
          <View style={styles.verifiedBadge}>
            <Text style={styles.verifiedIcon}>✓</Text>
          </View>
        </View>
      </View>

      <View style={styles.contentSection}>
        <Text style={styles.headline}>Your income.{'\n'}Protected.</Text>
        <Text style={styles.description}>
          When Bangalore rains halt your deliveries, <Text style={styles.bold}>ProtoRyde automatically pays you.</Text> No forms. No waiting.
        </Text>

        <View style={styles.pillContainer}>
          <View style={styles.pill}>
            <Text style={styles.pillEmoji}>☔</Text>
            <Text style={styles.pillText}>Auto-Claim</Text>
          </View>
          <View style={styles.pill}>
            <Text style={styles.pillEmoji}>⚡</Text>
            <Text style={styles.pillText}>2-Min Payout</Text>
          </View>
          <View style={styles.pill}>
            <Text style={styles.pillEmoji}>🛡️</Text>
            <Text style={styles.pillText}>Weekly Cover</Text>
          </View>
        </View>

        <View style={styles.ctaContainer}>
          <TouchableOpacity 
            style={styles.ctaButton}
            onPress={() => router.push('/personal-details')}
            activeOpacity={0.98}
          >
            <Text style={styles.ctaText}>Get Started — It's Free</Text>
          </TouchableOpacity>
          <Text style={styles.ctaSubtext}>₹67–₹115/week. Cancel anytime.</Text>

          <TouchableOpacity style={styles.loginLink}>
            <Text style={styles.loginText}>Already have an account? Log in</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.ambientShadow} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 16,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    backgroundColor: 'rgba(247,249,252,0.8)',
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  shieldIcon: {
    fontSize: 24,
  },
  logoText: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.primary,
  },
  stepText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.onSurfaceVariant,
  },
  heroSection: {
    height: '40%',
    backgroundColor: '#EBF4FF',
    position: 'relative',
    overflow: 'hidden',
  },
  heroGlow: {
    position: 'absolute',
    width: 256,
    height: 256,
    backgroundColor: colors.primary,
    opacity: 0.1,
    borderRadius: 128,
    top: '50%',
    left: '50%',
    transform: [{ translateX: -128 }, { translateY: -128 }],
  },
  heroContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 48,
  },
  heroImage: {
    width: '100%',
    height: 200,
    borderRadius: 16,
  },
  verifiedBadge: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  verifiedIcon: {
    fontSize: 24,
    color: colors.onPrimary,
  },
  contentSection: {
    flex: 1,
    backgroundColor: colors.surfaceContainerLowest,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -32,
    paddingHorizontal: 32,
    paddingTop: 40,
    paddingBottom: 32,
    zIndex: 20,
  },
  headline: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.primary,
    lineHeight: 34,
    marginBottom: 16,
  },
  description: {
    fontSize: 15,
    color: colors.onSurfaceVariant,
    lineHeight: 24,
    maxWidth: '90%',
    marginBottom: 48,
  },
  bold: {
    fontWeight: '600',
    color: colors.primary,
  },
  pillContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 48,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.surfaceContainerLow,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.outlineVariant,
  },
  pillEmoji: {
    fontSize: 16,
  },
  pillText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
  ctaContainer: {
    marginTop: 'auto',
  },
  ctaButton: {
    backgroundColor: colors.primary,
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
  },
  ctaText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.onPrimary,
  },
  ctaSubtext: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.onSurfaceVariant,
    textAlign: 'center',
    marginTop: 12,
  },
  loginLink: {
    marginTop: 16,
    textAlign: 'center',
  },
  loginText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.secondary,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  ambientShadow: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 48,
    backgroundColor: 'transparent',
    shadowColor: colors.onSurface,
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
  },
});