import { FlatList, ListRenderItem, View } from 'react-native';
import { type MessageProps } from 'types';
import Message from './Message';

export default function MessageList() {
  const INIT_MESSAGE_LIST_DATA: MessageProps[] = [
    {
      id: '1',
      title: 'Hello. I am Nebula.',
      isUser: false,
      message:
        'Hello. I am Nebula. How can I assist you with your creative or technical tasks today?',
      dateSent: new Date(2025, 12, 12, 10, 42),
    },
  ];

  const renderItem = ({ item }: { item: MessageProps }) => <Message {...item} />;

  return (
    <FlatList
      data={INIT_MESSAGE_LIST_DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      className="relative top-[-240px]"
    />
  );
}
