import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useColorScheme } from 'nativewind';
import { Dispatch, SetStateAction } from 'react';
import { Pressable, Text, TextInput, useWindowDimensions, View } from 'react-native';
import { type MessageProps } from 'types';
import { cn } from 'utils/cn';
import { pressableOpacity } from 'utils/pressable-opacity';

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
  const { colorScheme } = useColorScheme();
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
    <View className="bg-nebula-50 absolute bottom-0 z-10 w-full justify-center px-6 pb-8 dark:bg-nebula-950">
      <View className="mx-auto flex-row">
        <View
          className={cn(
            'my-3 border-[1px] border-t-zinc-300 bg-white p-6 pr-3 dark:border-t-zinc-800 dark:bg-black',
            'w-[68px] rounded-l-full border-b-zinc-300 dark:border-b-zinc-800 dark:border-l-zinc-800',
            'border-r-0 border-l-zinc-300'
          )}>
          {colorScheme === 'light' ? (
            <MaterialCommunityIcons size={24} name="image-outline" color="black" />
          ) : (
            <MaterialCommunityIcons size={24} name="image-outline" color="white" />
          )}
        </View>
        <TextInput
          placeholder="Message Nebula..."
          placeholderTextColor={colorScheme === 'light' ? '#777' : '#606060'}
          cursorColor={colorScheme === 'light' ? '#481c80' : '#a855f7'}
          maxLength={640}
          // width = width - mic & msg btns - margins - attms btn
          style={{ width: width - 124 - 24 * 2 - 68, maxWidth: 560 }}
          className={cn(
            ' my-3 border-t-[1px] border-b-[1px] border-b-zinc-300 dark:border-b-zinc-800',
            'text:black border-t-zinc-300 bg-white p-6 pl-3 text-lg dark:border-t-zinc-800', 
            'dark:bg-black dark:text-white text-black sm:pl-6 sm:text-xl'
          )}
          onChangeText={handleOnChange}
          value={promptInput}
        />
        <View
          className={cn(
            'justify-center border-[1px] bg-white py-2 dark:border-t-zinc-800 dark:bg-black',
            'my-3 w-[124px] rounded-r-full px-4 dark:border-b-zinc-800 dark:border-r-zinc-800',
            'border-l-0 border-zinc-300'
          )}>
          <View className="flex-row items-center justify-center gap-8">
            <Pressable style={pressableOpacity}>
              {colorScheme === 'light' ? (
                <MaterialCommunityIcons size={24} name="microphone" color="black" />
              ) : (
                <MaterialCommunityIcons size={24} name="microphone" color="white" />
              )}
            </Pressable>
            <Pressable style={pressableOpacity}
              className={cn(
                'h-12 w-12 items-center justify-center',
                'rounded-full border-[1px]',
                promptInput
                  ? 'dark:border-purple-500 dark:bg-purple-900 border-purple-400 bg-purple-200'
                  : 'border-zinc-400 bg-zinc-300 dark:border-zinc-600 dark:bg-zinc-900'
              )}
              onPress={handleOnPress}>
              <MaterialCommunityIcons
                size={28}
                name="navigation-variant-outline"
                color={promptInput ? '#b555ff' : '#4c4c50'}
              />
            </Pressable>
          </View>
        </View>
      </View>

      <View className="mx-auto flex-row items-center gap-2">
        {colorScheme === 'light' ? <MaterialCommunityIcons size={16} color="#808080" name="auto-mode" /> :
        <MaterialCommunityIcons size={16} color="#525252" name="auto-mode" />}
        <Text className="text-sm dark:text-zinc-600 text-zinc-400">
          Nebula AI can make mistakes. Check important info.
        </Text>
      </View>
    </View>
  );
}
