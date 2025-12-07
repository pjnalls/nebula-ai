import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, TextInput, View } from 'react-native';

export default function PromptInput() {
  return (
    <View className="my-8">
      <TextInput
        placeholder="Message Nebula"
        placeholderTextColor="#606060"
        style={{ marginHorizontal: 'auto' }}
      />
      <View className="mx-auto flex-row items-center gap-2">
        <MaterialCommunityIcons size={16} color="#525252" name="auto-mode" />
        <Text className="text-sm text-zinc-600">
          Nebula AI can make mistakes. Check important info.
        </Text>
      </View>
    </View>
  );
}
