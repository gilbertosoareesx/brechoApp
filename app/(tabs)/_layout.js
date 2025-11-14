import React from 'react';
import { Tabs, useSegments } from 'expo-router';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/config/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const segments = useSegments();
  const currentRoute = segments[segments.length - 1] || 'index';

  const getTabHref = (tabName) => {
    if (['LoginScreen', 'RegisterScreen', 'HomeScreen'].includes(currentRoute)) {
      return null;
    }

    if (currentRoute === 'index' || currentRoute === '') {
      return null;
    }

    if (currentRoute === 'EstoqueScreen') {
      if (tabName === 'EstoqueScreen') return null;
      if (tabName === 'index') return undefined;
      if (tabName === 'VitrineScreen') return undefined;
      return null;
    }

    if (currentRoute === 'VitrineScreen') {
      if (tabName === 'VitrineScreen') return null;
      if (tabName === 'index') return undefined;
      if (tabName === 'EstoqueScreen') return undefined;
      return null;
    }

    return null;
  };

  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
          href: getTabHref('index'),
          tabBarStyle: ['LoginScreen', 'RegisterScreen', 'HomeScreen', 'index'].includes(currentRoute) || currentRoute === ''
            ? { display: 'none' }
            : undefined,
        }}
      />
      <Tabs.Screen
        name="EstoqueScreen"
        options={{
          title: 'Estoque',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="square.stack.fill" color={color} />,
          href: getTabHref('EstoqueScreen'),
        }}
      />
      <Tabs.Screen
        name="VitrineScreen"
        options={{
          title: 'Vitrine',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="bag.fill" color={color} />,
          href: getTabHref('VitrineScreen'),
        }}
      />
      <Tabs.Screen
        name="HomeScreen"
        options={{
          href: null,
          tabBarStyle: { display: 'none' },
        }}
      />
      <Tabs.Screen
        name="LoginScreen"
        options={{
          href: null,
          tabBarStyle: { display: 'none' },
        }}
      />
      <Tabs.Screen
        name="RegisterScreen"
        options={{
          href: null,
          tabBarStyle: { display: 'none' },
        }}
      />
    </Tabs>
  );
}
