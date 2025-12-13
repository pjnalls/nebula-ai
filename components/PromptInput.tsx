import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, TextInput, useWindowDimensions, View } from 'react-native';
import { cn } from 'utils/cn';

export default function PromptInput() {
  const { width } = useWindowDimensions();

  return (
    <View className="z-00 absolute bottom-0 my-8 w-full justify-center px-4">
      <View className="flex-row">
        <View
          className={cn(
            'my-3 border-[1px] border-t-zinc-800 bg-black p-6',
            ' w-[68px] rounded-l-full border-b-zinc-800 border-l-zinc-800'
          )}>
          <MaterialCommunityIcons size={24} name="image-outline" color="white" />
        </View>
        <TextInput
          placeholder="Message Nebula..."
          placeholderTextColor="#606060"
          cursorColor="#a855f7"
          // width = width - mic & msg btns - margins - attms btn
          style={{ width: width - 124 - 16 * 2 - 68 }}
          className={cn(
            ' my-3 border-[1px] border-b-zinc-800',
            'border-t-zinc-800 bg-black p-6 pl-0 text-xl text-white'
          )}
        />
        <View
          className={cn(
            'justify-center border-[1px] border-t-zinc-800 bg-black py-2',
            'my-3 w-[124px] rounded-r-full border-b-zinc-800 border-r-zinc-800 px-4'
          )}>
          <View className="flex-row items-center justify-center gap-8">
            <MaterialCommunityIcons size={24} name="microphone" color="white" />
            <View
              className={cn(
                'h-12 w-12 items-center justify-center',
                'rounded-full border-[1px] border-zinc-500 bg-zinc-900'
              )}>
              <MaterialCommunityIcons size={28} name="navigation-variant-outline" color="#4c4c50" />
            </View>
          </View>
        </View>
      </View>

      <View className="mx-auto flex-row items-center gap-2">
        <MaterialCommunityIcons size={16} color="#525252" name="auto-mode" />
        <Text className="text-sm text-zinc-600">
          Nebula AI can make mistakes. Check important info.
        </Text>
      </View>
    </View>
  );
}
