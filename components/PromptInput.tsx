import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Dispatch, SetStateAction } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { type MessageProps } from 'types';
import { cn } from 'utils/cn';

export default function PromptInput({
  promptInput,
  setAiResponding,
  setPromptInput,
  setMessages,
}: {
  promptInput: string;
  setAiResponding: Dispatch<SetStateAction<boolean>>;
  setPromptInput: Dispatch<SetStateAction<string>>;
  setMessages: Dispatch<SetStateAction<MessageProps[]>>;
}) {
  const { width } = useWindowDimensions();

  const handleOnChange = (text: string) => {
    setPromptInput(text);
  };
  const handleOnPress = async () => {
    if (!promptInput) return;

    setMessages((messages) => [
      ...messages,
      {
        id: (parseInt(messages.slice(-1)[0].id) + 1).toString(),
        message: promptInput,
        isUser: true,
        dateSent: new Date(),
      },
    ]);

    setPromptInput('');
    setAiResponding(true);

    // Sleep for 3 secs to mock ai response time
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setMessages((messages) => [
      ...messages,
      {
        id: (parseInt(messages.slice(-1)[0].id) + 1).toString(),
        message:
          "I've processed your request. This interface demonstrates a modern, glassmorphism-inspired design system with deep gradients and refined typography. Would you like me to explain the color theory used?",
        isUser: false,
        dateSent: new Date(),
      },
    ]);

    setAiResponding(false);
  };

  return (
    <View className="absolute bottom-0 z-10 w-full justify-center bg-nebula-950 px-6 pb-8">
      <View className="flex-row mx-auto">
        <View
          className={cn(
            'my-3 border-[1px] border-t-zinc-800 bg-black p-6 pr-3',
            ' w-[68px] rounded-l-full border-b-zinc-800 border-l-zinc-800',
          )}>
          <MaterialCommunityIcons size={24} name="image-outline" color="white" />
        </View>
        <TextInput
          placeholder="Message Nebula..."
          placeholderTextColor="#606060"
          cursorColor="#a855f7"
          maxLength={640}
          // width = width - mic & msg btns - margins - attms btn
          style={{ width: width - 124 - 24 * 2 - 68, maxWidth: 560 }}
          className={cn(
            ' my-3 border-[1px] border-b-zinc-800 border-r-0 border-l-0',
            'border-t-zinc-800 bg-black p-6 sm:pl-6 pl-3 sm:text-xl text-lg text-white'
          )}
          onChangeText={handleOnChange}
          value={promptInput}
        />
        <View
          className={cn(
            'justify-center border-[1px] border-t-zinc-800 bg-black py-2',
            'my-3 w-[124px] rounded-r-full border-b-zinc-800 border-r-zinc-800 px-4'
          )}>
          <View className="flex-row items-center justify-center gap-8">
            <MaterialCommunityIcons size={24} name="microphone" color="white" />
            <TouchableOpacity
              className={cn(
                'h-12 w-12 items-center justify-center',
                'rounded-full border-[1px]',
                promptInput ? 'border-purple-500 bg-purple-900' : 'border-zinc-600 bg-zinc-900'
              )}
              onPress={handleOnPress}>
              <MaterialCommunityIcons
                size={28}
                name="navigation-variant-outline"
                color={promptInput ? '#b555ff' : '#4c4c50'}
              />
            </TouchableOpacity>
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
