import { PressableStateCallbackType, ViewStyle } from 'react-native';

export const pressableOpacity: (p: PressableStateCallbackType) => ViewStyle[] = ({ pressed }) => [
  {
    opacity: pressed ? 0.5 : 1,
  },
];
