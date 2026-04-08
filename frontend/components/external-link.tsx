import { openBrowserAsync, WebBrowserPresentationStyle } from 'expo-web-browser';
import React, { type ComponentProps } from 'react';
import { Linking, Platform, Pressable, Text } from 'react-native';

type Props = Omit<ComponentProps<typeof Pressable>, 'onPress'> & {
  href: string;
  children?: React.ReactNode;
};

export function ExternalLink({ href, ...rest }: Props) {
  const { children, ...pressableProps } = rest;
  return (
    <Pressable
      accessibilityRole="link"
      {...pressableProps}
      onPress={async () => {
        if (Platform.OS !== 'web') {
          await openBrowserAsync(href, {
            presentationStyle: WebBrowserPresentationStyle.AUTOMATIC,
          });
          return;
        }

        await Linking.openURL(href);
      }}>
      {typeof children === 'string' ? <Text>{children}</Text> : children}
    </Pressable>
  );
}
