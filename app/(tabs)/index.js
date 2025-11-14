import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';
import React from 'react';

import { Collapsible } from '@/components/ui/collapsible';
import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

export default function TabOneScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#fff', dark: '#1a1a1a' }}
      headerImage={
        <IconSymbol size={310} color="#808080" name="sparkles" style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}
        >
          Home
        </ThemedText>
      </ThemedView>

      <ThemedText>Welcome to your app. This is the Home screen.</ThemedText>

      <Collapsible title="Getting started">
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.js</ThemedText> to change this
          screen.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more about routing</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Images">
        <ThemedText>Static images can be required from the assets folder.</ThemedText>
        <Image
          source={require('@/assets/images/react-logo.png')}
          style={{ width: 100, height: 100, alignSelf: 'center' }}
        />
      </Collapsible>

      <Collapsible title="Platform specifics">
        <ThemedText>Platform-specific content can be rendered with Platform.select.</ThemedText>
        {Platform.select({
          ios: <ThemedText>iOS-only note: the parallax header looks great on iOS.</ThemedText>,
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
