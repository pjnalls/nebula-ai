import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Animated, { SlideInLeft, SlideOutLeft, Easing } from 'react-native-reanimated';
import { NavbarProps } from 'types';
import { cn } from 'utils/cn';

export default function NavbarSideDrawer({ isOpen, setIsOpen }: NavbarProps) {
  const handleOnPress = () => setIsOpen(false);
  return (
    <>
      <Animated.View
        className={cn(
          'absolute h-full w-full transition-opacity duration-500',
          isOpen ? 'z-20 opacity-100' : 'z-0 opacity-0'
        )}>
        <TouchableOpacity
          onPress={handleOnPress}
          className={cn('absolute h-full w-full bg-black/50')}
          accessibilityLabel="Press on this area to close the navbar side drawer.">
          <BlurView intensity={44} tint="dark" className="h-full w-full bg-black/80" />
        </TouchableOpacity>
      </Animated.View>

      {isOpen && (
        <Animated.View
          className={cn(
            'absolute z-30 h-full w-2/3 border-r-[1px]',
            'border-zinc-800 bg-nebula-900 px-4 pt-16'
          )}
          entering={SlideInLeft.duration(500).easing(Easing.ease)}
          exiting={SlideOutLeft.duration(500).easing(Easing.ease)}>
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center justify-center gap-2">
              <Image
                className="h-14 w-14 rounded-full border-[1px] border-purple-500"
                source={require('../assets/icon.png')}
                alt="A purple and blue glowing electronic orb"
              />
              <Text className="text-3xl font-semibold text-white">Nebula</Text>
            </View>
            <TouchableOpacity
              onPress={handleOnPress}
              accessibilityLabel="Press on this area to close the navbar side drawer.">
              <MaterialCommunityIcons name="close" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </Animated.View>
      )}
    </>
  );
}
