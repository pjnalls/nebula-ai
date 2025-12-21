import { AntDesign } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useColorScheme } from 'nativewind';
import { Pressable, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { NavbarProps } from 'types';
import { cn } from 'utils/cn';
import { pressableOpacity } from 'utils/pressable-opacity';

export default function NavbarHeader({ setIsOpen }: NavbarProps) {
  const { colorScheme, setColorScheme } = useColorScheme();

  const Hamburger = () => {
    const handleOnPress = () => {
      setIsOpen(true);
    };
    return (
      <Pressable
        style={pressableOpacity}
        className="mt-1 w-8"
        onPress={handleOnPress}
        accessibilityLabel="Press to open side navigation drawer">
        <View className="mb-1 h-1 w-8 rounded bg-black dark:bg-white" />
        <View className="mb-1 h-1 w-8 rounded bg-black dark:bg-white" />
        <View className="mb-1 h-1 w-8 rounded bg-black dark:bg-white" />
      </Pressable>
    );
  };

  return (
    <Animated.View>
      <View className="absolute z-10 h-36 w-[100vw] border-b-[1px] border-zinc-300 bg-white dark:border-zinc-800 dark:bg-black">
        <View
          collapsable={false}
          className={cn(
            'w-[100vw] max-w-3xl flex-row border-zinc-300',
            'items-center justify-between border-b-[1px] dark:border-zinc-800',
            ' mx-auto h-36 bg-white px-6 pt-16 dark:bg-black'
          )}>
          <View className="flex-row items-center justify-center gap-6">
            <Hamburger />
            <Pressable
              style={pressableOpacity}
              onPress={() => {
                setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
              }}>
              {colorScheme === 'light' ? (
                <AntDesign
                  size={32}
                  color="black"
                  name="moon"
                />
              ) : (
                <AntDesign size={32} color="white" name="sun" />
              )}
            </Pressable>
            <Text className="text-2xl font-semibold text-black dark:text-white">Nebula AI</Text>
          </View>
          <Image
            style={{
              width: 48,
              height: 48,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: colorScheme === 'light' ? '#cfcfd6' : '#3f3f46',
            }}
            source={require('@/assets/icon.png')}
            alt="A purple and blue glowing electronic orb"
          />
        </View>
      </View>
    </Animated.View>
  );
}
