import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Animated, {
  SlideInLeft,
  SlideOutLeft,
  Easing,
  FadeIn,
  FadeOut,
} from 'react-native-reanimated';
import { NavbarProps, NavbarSideDrawerChatProps } from 'types';
import { cn } from 'utils/cn';

export default function NavbarSideDrawer({ isOpen, setIsOpen }: NavbarProps) {
  const handleOnPress = () => setIsOpen(false);

  const INIT_SIDE_DRAWER_CHAT_DATA: NavbarSideDrawerChatProps[] = [
    {
      id: '1',
      title: 'Quantum Physics Explained',
      createdAt: new Date(),
    },
    {
      id: '2',
      title: 'React Component Styling',
      createdAt: new Date(),
    },
    {
      id: '3',
      title: 'Futuristic UI Inspiration',
      createdAt: new Date(),
    },
    {
      id: '4',
      title: 'Debugging API Errors',
      createdAt: new Date(),
    },
  ];

  function NewConversationButton() {
    return (
      <TouchableOpacity
        className={cn(
          'w-full items-center justify-center',
          'border-[1px] border-purple-900/80 bg-purple-950/30 p-2',
          'flex-row gap-4 rounded-xl'
        )}>
        <View className="h-9 w-9 items-center justify-center rounded-2xl bg-purple-500">
          <MaterialCommunityIcons size={24} name="comment-plus-outline" color="white" />
        </View>
        <Text className="text-xl text-purple-500">New Conversation</Text>
      </TouchableOpacity>
    );
  }

  function NavbarSideDrawerChat({ id, title, createdAt }: NavbarSideDrawerChatProps) {
    return (
      <TouchableOpacity className="w-full flex-row items-center gap-6 px-4">
        <MaterialCommunityIcons name="comment-outline" size={24} color="white" />
        <View>
          <Text className="text-lg text-white">{title}</Text>
          <Text className="text-zinc-400">
            {createdAt.toLocaleString('en-US', {
              month: 'short',
              year: 'numeric',
              dateStyle: 'medium',
            })}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <>
      {isOpen && (
        <Animated.View
          className={cn('absolute z-30 h-[100vh] w-full')}
          entering={FadeIn.duration(300).easing(Easing.ease)}
          exiting={FadeOut.duration(300).easing(Easing.ease)}>
          <TouchableOpacity
            onPress={handleOnPress}
            className={cn('absolute h-full w-full bg-black/50')}
            accessibilityLabel="Press on this area to close the navbar side drawer.">
            <BlurView intensity={44} tint="dark" className="h-full w-full bg-black/80" />
          </TouchableOpacity>
        </Animated.View>
      )}

      {isOpen && (
        <Animated.View
          className={cn(
            'absolute z-50 h-[100vh] w-3/4 border-r-[1px]',
            'justify-between border-zinc-800 bg-nebula-900 pb-8 pt-16'
          )}
          entering={SlideInLeft.duration(300).easing(Easing.ease)}
          exiting={SlideOutLeft.duration(300).easing(Easing.ease)}>
          <View>
            <View className="flex-row items-center justify-between p-4">
              <View className="flex-row items-center justify-center gap-2">
                <Image
                  className="h-14 w-14 rounded-full border-[1px] border-purple-500"
                  source={require('@/assets/icon.png')}
                  alt="A purple and blue glowing electronic orb"
                />
                <Text className="text-3xl font-semibold text-white">Nebula</Text>
              </View>
              <TouchableOpacity
                onPress={handleOnPress}
                accessibilityLabel="Press on this area to close the navbar side drawer.">
                <MaterialCommunityIcons name="close" size={24} color="white" />
              </TouchableOpacity>
            </View>
            <View className="my-2 h-[1px] w-full bg-zinc-900" />
            <View className="gap-8 px-4">
              <NewConversationButton />
              <View className="px-2">
                <Text className="text-white">RECENT</Text>
              </View>
              {INIT_SIDE_DRAWER_CHAT_DATA.map((chatData, index) => (
                <View key={`navbar-side-drawer-chat-${index}-chat-id-${chatData.id}`}>
                  <NavbarSideDrawerChat {...chatData} />
                </View>
              ))}
            </View>
          </View>
          <TouchableOpacity className="flex-row gap-4 px-8 py-4">
            <MaterialCommunityIcons name="cog-outline" size={24} color="white" />
            <Text className="text-lg text-white">Settings</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </>
  );
}
