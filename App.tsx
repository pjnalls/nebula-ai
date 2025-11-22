import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';

import Navbar from 'components/Navbar.tsx';

import './global.css';

export default function App() {
  return (
    <>
      <Navbar />
      <ScreenContent title="Home" path="App.tsx"></ScreenContent>
      <StatusBar style="auto" />
    </>
  );
}
