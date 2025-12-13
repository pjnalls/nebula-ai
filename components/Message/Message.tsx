import { Image, Text, View } from 'react-native';
import { type MessageProps } from 'types';

export default function Message({ isUser, message, dateSent }: MessageProps) {
  return (
    <View className="relative flex-row gap-4 px-4">
      {isUser ? (
        <></>
      ) : (
        <>
          <Image
            className="h-12 w-12 rounded-full border-[1px] border-zinc-700"
            source={require('@/assets/icon.png')}
            alt="A purple and blue glowing electronic orb"
          />
          <View className="flex-col gap-2">
            <View className="w-[90%] rounded-2xl rounded-tl-none border-[1px] border-zinc-700 bg-zinc-900 p-4">
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
        </>
      )}
    </View>
  );
}
