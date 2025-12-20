import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { Image } from 'expo-image';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { type MessageProps } from 'types';
import { cn } from 'utils/cn';

export default function Message({ isUser, message, dateSent }: MessageProps) {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.9);
  const translateY = useSharedValue(64);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: scale.value }, { translateY: translateY.value }],
    };
  });

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 300 });
    scale.value = withTiming(1, { duration: 300 });
    translateY.value = withTiming(0, { duration: 300 });
  }, []);

  return isUser ? (
    <Animated.View style={[animatedStyles]}>
      <View
        className="relative mx-auto my-2 flex-row justify-end gap-4 p-4"
        style={[{ maxWidth: 768, width: '100%' }]}>
        <View
          className="flex-col gap-2"
          style={[{ width: 'auto', maxWidth: '80%' }, animatedStyles]}>
          <View className="rounded-2xl rounded-tr-none border-[1px] border-purple-400 bg-purple-600 p-3">
            <Text className="text-lg text-white">{message}</Text>
          </View>
          <Text className="w-full text-right text-zinc-400">
            {dateSent.toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
              hour12: true,
            })}
          </Text>
        </View>
        <View
          className={cn(
            'h-12 w-12 rounded-full bg-zinc-800',
            'items-center justify-center border-[1px] border-zinc-700'
          )}>
          <MaterialCommunityIcons size={36} color="white" name="account" />
        </View>
      </View>
    </Animated.View>
  ) : (
    <Animated.View style={[animatedStyles]}>
      <View
        className="relative mx-auto my-2 flex-row gap-4 px-5"
        style={[{ maxWidth: 768, width: '100%' }]}>
        <Image
          style={{
            width: 48,
            height: 48,
            borderRadius: 100,
            borderWidth: 1,
            borderColor: '#3f3f46',
          }}
          source={require('@/assets/icon.png')}
          alt="A purple and blue glowing electronic orb"
        />
        <View className="flex-col gap-2" style={[{ width: 'auto', maxWidth: '80%' }]}>
          <View className="rounded-2xl rounded-tl-none border-[1px] border-zinc-700 bg-zinc-900 p-3">
            <Text className="text-lg text-white">{message}</Text>
          </View>
          <Text className="text-zinc-400">
            {dateSent.toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
              hour12: true,
            })}
          </Text>
        </View>
      </View>
    </Animated.View>
  );
}
