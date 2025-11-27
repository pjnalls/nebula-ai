import { useState } from 'react';
import { useSharedValue } from 'react-native-reanimated';
import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';

import NavbarHeader from 'components/NavbarHeader';
import NavbarSideDrawer from 'components/NavbarSideDrawer';

import './global.css';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const translateX = useSharedValue(-500);

  return (
    <>
      <ScreenContent title="Home" path="App.tsx">
        <NavbarHeader isOpen={isOpen} setIsOpen={setIsOpen} />
        <NavbarSideDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
      </ScreenContent>
      <StatusBar style="light" backgroundColor="black" />
    </>
  );
}
