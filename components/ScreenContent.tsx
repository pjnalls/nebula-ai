import React from 'react';
import { View } from 'react-native';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ children }: ScreenContentProps) => {
  return <View className="top-36 z-0 h-[100vh] flex-1 bg-nebula-950">{children}</View>;
};
