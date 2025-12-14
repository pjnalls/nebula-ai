import { FlatList, Image, ScrollView, Text, View } from 'react-native';
import { type MessageProps } from 'types';
import Message from './Message';

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
      />
      {aiResponding && (
        <View className="w-full flex-row gap-4 px-5">
          <Image
            className="h-12 w-12 rounded-full border-[1px] border-zinc-700"
            source={require('@/assets/icon.png')}
            alt="A purple and blue glowing electronic orb"
          />
          <View className="flex-col gap-2">
            <View className="rounded-2xl rounded-tl-none border-[1px] border-zinc-700 bg-zinc-900 p-4 py-2">
              <Text className="h-10 text-4xl leading-[1] text-zinc-500">•••</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
