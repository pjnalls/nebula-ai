import { useState } from 'react';
import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';

import Navbar from 'components/Navbar/Navbar';
import PromptInput from 'components/PromptInput';
import MessageList from 'components/Message/MessageList';

import { type MessageProps } from 'types';

import './global.css';

export default function App() {
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

  return (
    <>
      <Navbar />
      <ScreenContent title="Home" path="App.tsx">
        <MessageList aiResponding={aiResponding} messages={messages} />
      </ScreenContent>
      <PromptInput
        promptInput={promptInput}
        setAiResponding={setAiResponding}
        setPromptInput={setPromptInput}
        setMessages={setMessages}
      />
      <StatusBar style="light" backgroundColor="black" />
    </>
  );
}
