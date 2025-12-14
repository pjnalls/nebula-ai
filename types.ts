import { Dispatch, SetStateAction } from 'react';
import { SharedValue } from 'react-native-reanimated';

export type NavbarProps = {
  isOpen?: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export type NavbarSideDrawerChatProps = {
  id: string;
  title: string;
  createdAt: Date;
};

export type MessageProps = {
  id: string;
  isUser: boolean;
  message: string;
  dateSent: Date;
  profilePicUrl?: string;
};
