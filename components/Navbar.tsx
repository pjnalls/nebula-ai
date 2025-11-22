import { Image, Text, View } from 'react-native';

export default function Navbar() {
  return (
    <View className="mt-16 h-24 w-full flex-row items-center justify-between bg-black px-2">
      <View className="flex-row items-center justify-center gap-8">
        <View className="mt-1">
          <View className="mb-1 h-1 w-8 bg-white" />
          <View className="mb-1 h-1 w-8 bg-white" />
          <View className="mb-1 h-1 w-8 bg-white" />
        </View>
        <Text className="text-3xl text-white">Nebula AI</Text>
      </View>
      <Image
        className="h-12 w-12 rounded-full border-[1px] border-zinc-700"
        source={require('../assets/icon.png')}
      />
    </View>
  );
}
