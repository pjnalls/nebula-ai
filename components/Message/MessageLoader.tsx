import { Image, Text, View } from 'react-native';

export default function MessageLoader() {
  return (
    <View className="w-full flex-row gap-4 px-5">
      <Image
        className="h-12 w-12 rounded-full border-[1px] border-zinc-700"
        source={require('@/assets/icon.png')}
        alt="A purple and blue glowing electronic orb"
      />
      <View className="flex-col gap-2">
        <View className="rounded-2xl rounded-tl-none border-[1px] border-zinc-700 bg-zinc-900 p-4 py-2">
          <Text className="h-10 text-7xl leading-[.80] text-zinc-500">•••</Text>
        </View>
      </View>
    </View>
  );
}
