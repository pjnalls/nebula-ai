import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { Image } from 'expo-image';
import { useColorScheme } from 'nativewind';
import { useEffect } from 'react';
import { Platform, Pressable, Text, useWindowDimensions, View } from 'react-native';
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';
import { NavbarProps, NavbarSideDrawerChatProps } from 'types';
import { cn } from 'utils/cn';
import { pressableOpacity } from 'utils/pressable-opacity';

export default function NavbarSideDrawer({ isOpen, setIsOpen }: NavbarProps) {
  const { colorScheme } = useColorScheme();
  const { width } = useWindowDimensions();
  const opacity = useSharedValue(0);
  const translateX = useSharedValue(-1 * width);

  const overlayAnimatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });
  const drawerAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  useEffect(() => {
    opacity.value = withTiming(isOpen ? 1 : 0, { duration: 300 });
    translateX.value = withTiming(isOpen ? 0 : -1 * width, { duration: 300 });
  });

  const handleOnPress = () => {
    setIsOpen(false);
  };

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
      <Pressable
        style={pressableOpacity}
        className={cn(
          'w-full max-w-xs items-center justify-center',
          'border-[1px] border-purple-500 bg-purple-400 p-2 dark:border-purple-900/80 dark:bg-purple-950/50',
          'flex-row gap-4 rounded-xl'
        )}>
        <View className="h-9 w-9 items-center justify-center rounded-2xl bg-purple-500">
          <MaterialCommunityIcons size={24} name="comment-plus-outline" color="white" />
        </View>
        <Text className="text-xl text-purple-50 dark:text-purple-500">New Conversation</Text>
      </Pressable>
    );
  }

  function NavbarSideDrawerChat({ title, createdAt }: NavbarSideDrawerChatProps) {
    return (
      <Pressable className="w-full flex-row items-center gap-6 px-4" style={pressableOpacity}>
        {colorScheme === 'light' ? (
          <MaterialCommunityIcons name="comment-outline" size={24} color="#3b0674" />
        ) : (
          <MaterialCommunityIcons name="comment-outline" size={24} color="white" />
        )}
        <View>
          <Text className="text-lg text-purple-950 dark:text-white">{title}</Text>
          <Text className="font-medium text-zinc-500 dark:text-zinc-400">
            {createdAt.toLocaleString('en-US', {
              month: 'short',
              year: 'numeric',
              day: '2-digit',
            })}
          </Text>
        </View>
      </Pressable>
    );
  }
  return (
    <>
      {isOpen && (
        <Animated.View style={[overlayAnimatedStyles]}>
          <Pressable
            style={pressableOpacity}
            onPress={handleOnPress}
            className={cn('absolute top-0 z-30 h-[100vh] w-[100vw] bg-white/50 dark:bg-black/50')}
            accessibilityLabel="Press on this area to close the navbar side drawer.">
            {Platform.OS === 'ios' ? (
              <BlurView
                intensity={44}
                tint="dark"
                className="h-full w-full bg-white/80 dark:bg-black/80"
              />
            ) : (
              <View className="h-[100vh] w-[100vw] bg-white/50 backdrop-blur-sm dark:bg-black/80" />
            )}
          </Pressable>
        </Animated.View>
      )}
      <Animated.View style={[drawerAnimatedStyles]}>
        <View
          className={cn(
            'absolute z-50 h-[100vh] w-[75vw] border-r-[1px]',
            'bg-nebula-100 justify-between gap-4 border-zinc-300 pb-8 pt-16 dark:border-zinc-800 dark:bg-nebula-900'
          )}>
          <View>
            <View className="flex-row items-center justify-between p-4 pb-6">
              <View className="flex-row items-center justify-center gap-2">
                <Image
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 100,
                    borderWidth: 2,
                    borderColor: colorScheme === 'light' ? '#c06aff' : '#a855f7',
                  }}
                  source={require('@/assets/icon.png')}
                  alt="A purple and blue glowing electronic orb"
                />
                <Text className="text-3xl font-semibold text-purple-950 dark:text-white">
                  Nebula
                </Text>
              </View>
              <Pressable
                style={pressableOpacity}
                onPress={handleOnPress}
                accessibilityLabel="Press on this area to close the navbar side drawer.">
                {colorScheme === 'light' ? (
                  <MaterialCommunityIcons name="close" size={24} color="#3b0674" />
                ) : (
                  <MaterialCommunityIcons name="close" size={24} color="white" />
                )}
              </Pressable>
            </View>
            <View className="gap-8 px-4">
              <NewConversationButton />
              <View className="px-2">
                <Text className="text-purple-950 dark:text-white">RECENT</Text>
              </View>
              {INIT_SIDE_DRAWER_CHAT_DATA.map((chatData, index) => (
                <View key={`navbar-side-drawer-chat-${index}-chat-id-${chatData.id}`}>
                  <NavbarSideDrawerChat {...chatData} />
                </View>
              ))}
            </View>
          </View>
          <Pressable className="flex-row gap-4 px-8 py-4" style={pressableOpacity}>
            {colorScheme === 'light' ? (
              <MaterialCommunityIcons name="cog-outline" size={24} color="#3b0674" />
            ) : (
              <MaterialCommunityIcons name="cog-outline" size={24} color="white" />
            )}
            <Text className="text-lg text-purple-950 dark:text-white">Settings</Text>
          </Pressable>
        </View>
      </Animated.View>
    </>
  );
}
