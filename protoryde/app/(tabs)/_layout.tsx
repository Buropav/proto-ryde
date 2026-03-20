import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../src/constants/colors';
import { View, StyleSheet } from 'react-native';

function TabBarIcon(props: {
  name: typeof MaterialCommunityIcons.defaultProps.name;
  color: string;
}) {
  return <MaterialCommunityIcons size={24} style={styles.tabIcon} {...props} />;
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.onSurfaceVariant,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
      }}
    >
      <Tabs.Screen
        name="home-screen"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="claims-list-screen"
        options={{
          title: 'Claims',
          tabBarIcon: ({ color }) => <TabBarIcon name="clipboard-check-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="coverage-screen"
        options={{
          title: 'Coverage',
          tabBarIcon: ({ color }) => <TabBarIcon name="shield-check-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile-screen"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="account-outline" color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.surfaceContainerLowest,
    borderTopWidth: 0,
    elevation: 0,
    height: 80,
    paddingBottom: 20,
    paddingTop: 8,
  },
  tabBarLabel: {
    fontSize: 10,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  tabIcon: {
    marginBottom: -4,
  },
});