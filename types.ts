import { Dispatch, SetStateAction } from 'react';
import { SharedValue } from 'react-native-reanimated';

export type NavbarProps = {
  isOpen?: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
