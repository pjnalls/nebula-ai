import { useState } from 'react';
import { View } from 'react-native';

import NavbarHeader from './NavbarHeader';
import NavbarSideDrawer from './NavbarSideDrawer';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View className="w-full flex-1">
      <NavbarHeader isOpen={isOpen} setIsOpen={setIsOpen} />
      <NavbarSideDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </View>
  );
}
