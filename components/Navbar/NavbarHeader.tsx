import { Image } from 'expo-image';
import { FC } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Animated, { withTiming, Easing } from 'react-native-reanimated';
import { NavbarProps } from 'types';
import { cn } from 'utils/cn';

export default function NavbarHeader({ isOpen, setIsOpen }: NavbarProps) {
  const Hamburger: FC<NavbarProps> = () => {
    const handleOnPress = () => {
      setIsOpen(true);
    };
    return (
      <TouchableOpacity
        className="mt-1 w-8"
        onPress={handleOnPress}
        accessibilityLabel="Press to open side navigation drawer">
        <View className="mb-1 h-1 w-8 bg-white" />
        <View className="mb-1 h-1 w-8 bg-white" />
        <View className="mb-1 h-1 w-8 bg-white" />
      </TouchableOpacity>
    );
  };

  return (
    <Animated.View
      className={cn(
        'relative z-10 w-full flex-row',
        'items-center justify-between border-b-[1px] border-zinc-800',
        'h-36 bg-black px-2 pt-16'
      )}>
      <View className="flex-row items-center justify-center gap-8">
        <Hamburger setIsOpen={setIsOpen} />
        <Text className="text-2xl font-semibold text-white">Nebula AI</Text>
      </View>
      <Image
        style={{ width: 48, height: 48, borderRadius: 100, borderWidth: 1, borderColor: '#3f3f46' }}
        source={require('@/assets/icon.png')}
        alt="A purple and blue glowing electronic orb"
      />
    </Animated.View>
  );
}
