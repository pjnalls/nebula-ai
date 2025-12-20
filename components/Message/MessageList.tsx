import { useRef } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';

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
  const flatListRef = useRef<FlatList<MessageProps> | null>(null);

  return (
    <View className="h-full flex-1 w-[100vw] pb-48">
      <FlatList
        ref={flatListRef}
        scrollEnabled={true}
        contentContainerStyle={{ paddingTop: 64 }}
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListFooterComponent={aiResponding ? <MessageLoader /> : <View style={{ height: 200 }} />}
        onContentSizeChange={() => {
          if (flatListRef.current) {
            flatListRef.current.scrollToEnd({ animated: true });
          }
        }}
      />
    </View>
  );
}
