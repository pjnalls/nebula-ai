import { useEffect, useState } from 'react';
import Animated, { FadeIn, FadeOut, Layout } from 'react-native-reanimated';
import { useColorScheme } from 'nativewind';
import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';

import Navbar from 'components/Navbar/Navbar';
import PromptInput from 'components/PromptInput';
import MessageList from 'components/Message/MessageList';

import { type MessageProps } from 'types';

import './global.css';

export default function App() {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [promptInput, setPromptInput] = useState('');
  const [messages, setMessages] = useState<MessageProps[]>([
    {
      id: '1',
      isUser: false,
      message:
        'Hello. I am Nebula. How can I assist you with your creative or technical tasks today?',
      dateSent: new Date(2025, 12, 12, 10, 42),
    },
  ]);
  const [aiResponding, setAiResponding] = useState(false);
  const key = colorScheme === 'dark' ? 'dark-theme' : 'light-theme';

  useEffect(() => {
    setColorScheme('light');
  }, []);

  return (
    <Animated.View
      // Key change forces re-render/layout animation
      key={key}
      entering={FadeIn.duration(300)} // Fade in the new theme's content
      exiting={FadeOut.duration(300)} // Fade out the old theme's content
      layout={Layout.duration(300)}
      className="flex-1">
      <Navbar />
      <ScreenContent title="Home" path="App.tsx">
        <MessageList aiResponding={aiResponding} messages={messages} />
      </ScreenContent>
      <PromptInput
        promptInput={promptInput}
        setAiResponding={setAiResponding}
        setMessages={setMessages}
        setPromptInput={setPromptInput}
      />
      <StatusBar style="auto" backgroundColor={colorScheme === 'light' ? 'white' : 'black'} />
    </Animated.View>
  );
}
