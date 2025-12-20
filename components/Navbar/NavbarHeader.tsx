import { Image } from 'expo-image';
import { TouchableOpacity, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { NavbarProps } from 'types';
import { cn } from 'utils/cn';

export default function NavbarHeader({setIsOpen }: NavbarProps) {
  const Hamburger = () => {
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
    <Animated.View>
      <View className="absolute z-10 h-36 w-[100vw] border-b-[1px] border-zinc-800 bg-black">
        <View
          collapsable={false}
          className={cn(
            'w-[100vw] max-w-3xl flex-row',
            'items-center justify-between border-b-[1px] border-zinc-800',
            ' mx-auto h-36 bg-black px-6 pt-16'
          )}>
          <View className="flex-row items-center justify-center gap-8">
            <Hamburger />
            <Text className="text-2xl font-semibold text-white">Nebula AI</Text>
          </View>
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
        </View>
      </View>
    </Animated.View>
  );
}
