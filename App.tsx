import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';

import Navbar from 'components/Navbar/Navbar';
import PromptInput from 'components/PromptInput';

import './global.css';

export default function App() {
  return (
    <>
      <ScreenContent title="Home" path="App.tsx">
        <Navbar />
        <PromptInput />
      </ScreenContent>
      <StatusBar style="light" backgroundColor="black" />
    </>
  );
}
