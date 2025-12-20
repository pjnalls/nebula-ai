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
    <View className="h-full w-[100vw] pb-48">
      {messages.length > 0 ? (
        <FlatList
          ref={flatListRef}
          scrollEnabled={true}
          contentContainerStyle={{ paddingTop: 64, paddingBottom: 128 }}
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item, index) => item?.id?.toString() || index.toString()}
          ListFooterComponent={aiResponding ? <MessageLoader /> : null}
          onContentSizeChange={() => {
            if (flatListRef.current) {
              flatListRef.current.scrollToEnd({ animated: true });
            }
          }}
        />
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
}
