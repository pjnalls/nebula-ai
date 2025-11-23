import { TouchableOpacity, View } from 'react-native';
import { NavbarProps } from 'types';

export default function NavbarSideDrawer({ isOpen, setIsOpen }: NavbarProps) {
  const handleOnPress = () => {
    if (setIsOpen) setIsOpen(false);
  };
  return (
    <>
      {isOpen && (
        <>
          <TouchableOpacity
            onPress={handleOnPress}
            className="absolute z-20 h-full w-full bg-black/80"
          />
          <View className="absolute z-30 h-full w-2/3 border-r-[1px] border-zinc-900 bg-nebula-900"></View>
        </>
      )}
    </>
  );
}
