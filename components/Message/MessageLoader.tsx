import { Image } from 'expo-image';
import { useEffect } from 'react';
import { View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

export default function MessageLoader() {
  const cardY = useSharedValue(64);
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.8);
  const translateY1 = useSharedValue(20);
  const translateY2 = useSharedValue(20);
  const translateY3 = useSharedValue(20);

  useEffect(() => {
    cardY.value = withTiming(0, { duration: 300 });
    opacity.value = withTiming(1, { duration: 300 });
    scale.value = withTiming(1, { duration: 300 });

    translateY1.value = withRepeat(
      withSpring(12, {
        damping: 2,
        stiffness: 100,
      }),
      -1,
      true
    );
    translateY2.value = withDelay(
      300,
      withRepeat(
        withSpring(12, {
          damping: 2,
          stiffness: 100,
        }),
        -1,
        true
      )
    );
    translateY3.value = withDelay(
      600,
      withRepeat(
        withSpring(12, {
          damping: 2,
          stiffness: 100,
        }),
        -1,
        true
      )
    );
  }, [translateY1, translateY2, translateY3]);

  const dot1AnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY1.value }],
    };
  });
  const dot2AnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY2.value }],
    };
  });
  const dot3AnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY3.value }],
    };
  });

  const cardAnimatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: scale.value }, { translateY: cardY.value }],
    };
  });

  return (
    <Animated.View style={[cardAnimatedStyles]}>
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
        <View className="flex-col gap-2">
          <View className="h-16 w-28 flex-row gap-2 rounded-2xl rounded-tl-none border-[1px] border-zinc-300 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 p-4 py-2">
            <Animated.View style={[dot1AnimatedStyles]}>
              <View className="h-5 w-5 rounded-full bg-zinc-400" />
            </Animated.View>
            <Animated.View style={[dot2AnimatedStyles]}>
              <View className="h-5 w-5 rounded-full bg-zinc-400" />
            </Animated.View>
            <Animated.View style={[dot3AnimatedStyles]}>
              <View className="h-5 w-5 rounded-full bg-zinc-400" />
            </Animated.View>
          </View>
        </View>
      </View>
      <View style={{ height: 200 }} />
    </Animated.View>
  );
}
