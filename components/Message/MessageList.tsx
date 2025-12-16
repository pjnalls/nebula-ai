import { FlatList, View } from 'react-native';

import { type MessageProps } from 'types';

import Message from './Message';
import MessageLoader from './MessageLoader';

export default function MessageList({
  aiResponding,
  messages,
}: {
  aiResponding: boolean;
  messages: MessageProps[];
}) {
  const renderItem = ({ item }: { item: MessageProps }) => <Message {...item} />;

  return (
    <View className="h-full pb-48">
      <FlatList
        scrollEnabled={true}
        contentContainerStyle={{ paddingTop: 64, paddingBottom: 128 }}
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListFooterComponent={aiResponding ? <MessageLoader /> : null}
      />
    </View>
  );
}
