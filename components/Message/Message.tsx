import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image, Text, View } from 'react-native';
import { type MessageProps } from 'types';
import { cn } from 'utils/cn';

export default function Message({ isUser, message, dateSent, profilePicUrl }: MessageProps) {
  return isUser ? (
    <View className="relative my-6 w-full flex-row justify-end gap-4 p-4">
      <View className="flex-col gap-2">
        <View className="rounded-2xl rounded-tr-none border-[1px] border-purple-400 bg-purple-600 p-6">
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
  ) : (
    <View className="relative w-full flex-row gap-4 px-5">
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
    </View>
  );
}
