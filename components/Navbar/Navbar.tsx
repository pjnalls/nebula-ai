import { useState } from 'react';
import { useWindowDimensions, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';

import NavbarHeader from './NavbarHeader';
import NavbarSideDrawer from './NavbarSideDrawer';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowDimensions();
  const opacity = useSharedValue(0);
  const translateX = useSharedValue(-1 * width);
  return (
    <View className="absolute z-50 w-full flex-1">
      <NavbarHeader
        opacity={opacity}
        translateX={translateX}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <NavbarSideDrawer
        opacity={opacity}
        translateX={translateX}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </View>
  );
}
