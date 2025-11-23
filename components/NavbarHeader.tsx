import { FC } from 'react';
import { Image, TouchableOpacity, Text, View } from 'react-native';
import { NavbarProps } from 'types';

export default function NavbarHeader({ isOpen, setIsOpen }: NavbarProps) {
  const Hamburger: FC<NavbarProps> = () => {
    const handleOnPress = () => {
      if (setIsOpen) setIsOpen(true);
    };
    return (
      <TouchableOpacity
        className="mt-1"
        onPress={handleOnPress}
        accessibilityLabel="Press to open side navigation drawer">
        <View className="mb-1 h-1 w-8 bg-white" />
        <View className="mb-1 h-1 w-8 bg-white" />
        <View className="mb-1 h-1 w-8 bg-white" />
      </TouchableOpacity>
    );
  };

  return (
    <View className="absolute top-16 z-10 h-24 w-full flex-row items-center justify-between bg-black px-2 py-16">
      <View className="flex-row items-center justify-center gap-8">
        <Hamburger setIsOpen={setIsOpen} />
        <Text className="text-3xl text-white">Nebula AI</Text>
      </View>
      <Image
        className="h-12 w-12 rounded-full border-[1px] border-zinc-700"
        source={require('../assets/icon.png')}
      />
    </View>
  );
}
