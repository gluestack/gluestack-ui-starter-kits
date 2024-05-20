import { Box } from "@base-template/components/box";
import { HStack } from "@base-template/components/hstack";
import {
  ChevronLeftIcon,
  EditIcon,
  Icon,
  MenuIcon,
  SettingsIcon,
} from "@base-template/components/icon";
import { Text } from "@base-template/components/text";
import { VStack } from "@base-template/components/vstack";
import { Pressable } from "@base-template/components/pressable";
import type { LucideIcon } from "lucide-react-native";
import {
  Button,
  ButtonIcon,
  ButtonText,
} from "@base-template/components/button";
import { useState } from "react";
import { Heading } from "@base-template/components/heading";
import { Image } from "@base-template/components/image";
import { ScrollView } from "@base-template/components/scroll-view";
import {
  Input,
  InputField,
  InputIcon,
  InputSlot,
} from "@base-template/components/input";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from "@base-template/components/avatar";
import useRouter from "@unitools/router";
import { ProfileIcon } from "./assets/icons/profile";
import { SafeAreaView } from "@base-template/components/safe-area-view";
import { Center } from "@base-template/components/center";
import { cn } from "@gluestack-ui/nativewind-utils/cn";
import { Platform } from "react-native";
import { SubscriptionIcon } from "./assets/icons/subscription";
import { DownloadIcon } from "./assets/icons/download";
import { FaqIcon } from "./assets/icons/faq";
import { NewsBlogIcon } from "./assets/icons/news-blog";
import { HomeIcon } from "./assets/icons/home";
import { GlobeIcon } from "./assets/icons/globe";
import { InboxIcon } from "./assets/icons/inbox";
import { HeartIcon } from "./assets/icons/heart";
import { Divider } from "@base-template/components/divider";

type MobileHeaderProps = {
  title: string;
};

type HeaderProps = {
  title: string;
  toggleSidebar: () => void;
};

type Icons = {
  iconName: LucideIcon | typeof Icon;
  iconText: string;
};
const SettingsList: Icons[] = [
  {
    iconName: ProfileIcon,
    iconText: "Profile",
  },
  {
    iconName: SettingsIcon,
    iconText: "Preferences",
  },
  {
    iconName: SubscriptionIcon,
    iconText: "Subscription",
  },
];
const ResourcesList: Icons[] = [
  {
    iconName: DownloadIcon,
    iconText: "Downloads",
  },
  {
    iconName: FaqIcon,
    iconText: "FAQs",
  },
  {
    iconName: NewsBlogIcon,
    iconText: "Subscription",
  },
];
type BottomTabs = {
  iconName: LucideIcon | typeof Icon;
  iconText: string;
};
const bottomTabsList: BottomTabs[] = [
  {
    iconName: HomeIcon,
    iconText: "Home",
  },

  {
    iconName: GlobeIcon,
    iconText: "Community",
  },
  {
    iconName: InboxIcon,
    iconText: "Inbox",
  },
  {
    iconName: HeartIcon,
    iconText: "Favourite",
  },
  {
    iconName: ProfileIcon,
    iconText: "Profile",
  },
];
interface UserStats {
  friends: string;
  friendsText: string;
  followers: string;
  followersText: string;
  rewards: string;
  rewardsText: string;
  posts: string;
  postsText: string;
}
const userData: UserStats[] = [
  {
    friends: "45K",
    friendsText: "Friends",
    followers: "500M",
    followersText: "Followers",
    rewards: "40",
    rewardsText: "Rewards",
    posts: "346",
    postsText: "Posts",
  },
];

const Sidebar = () => {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [selectedIndexResources, setSelectedIndexResources] =
    useState<number>(0);
  const handlePress = (index: number) => {
    setSelectedIndex(index);
    router.push("/profile/profile");
  };
  const handlePressResources = (index: number) => {
    setSelectedIndexResources(index);
    router.push("/profile/profile");
  };
  return (
    <VStack
      className="h-full w-[280px] flex-1 py-4 pr-4 pl-8 items-center border-r border-border-300"
      space="xl"
    >
      <VStack className="w-full px-2 pt-3 pb-4">
        <Text className="text-typography-600 px-4 py-2">SETTINGS</Text>
        {SettingsList.map((item, index) => {
          return (
            <Pressable
              onPress={() => handlePress(index)}
              key={index}
              className={`flex-row px-4 py-3 bg-green-500 items-center gap-2 rounded
              ${
                index === selectedIndex
                  ? "bg-background-950 "
                  : "bg-background-0"
              }
              `}
            >
              <Icon
                as={item.iconName}
                className={`
              ${
                index === selectedIndex
                  ? "stroke-background-0"
                  : "stroke-background-800"
              }
              `}
              />
              <Text
                className={`
              ${
                index === selectedIndex
                  ? "text-typography-0"
                  : "text-typography-700"
              }

              `}
              >
                {item.iconText}
              </Text>
            </Pressable>
          );
        })}
      </VStack>
      <VStack className="w-full px-2 pt-3 pb-4">
        <Text className="text-typography-600 px-4 py-2">RESOURCES</Text>
        {ResourcesList.map((item, index) => {
          return (
            <Pressable
              onPress={() => handlePressResources(index)}
              key={index}
              className={`flex-row px-4 py-3 bg-green-500 items-center gap-2 rounded
              ${
                index === selectedIndexResources
                  ? "bg-background-950 "
                  : "bg-background-0"
              }
              `}
            >
              <Icon
                as={item.iconName}
                className={`
              ${
                index === selectedIndexResources
                  ? "stroke-background-0"
                  : "stroke-background-800"
              }
              `}
              />
              <Text
                className={`
              ${
                index === selectedIndexResources
                  ? "text-typography-0"
                  : "text-typography-700"
              }

              `}
              >
                {item.iconText}
              </Text>
            </Pressable>
          );
        })}
      </VStack>
    </VStack>
  );
};

const DashboardLayout = (props: any) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(
    props.isSidebarVisible
  );
  function toggleSidebar() {
    setIsSidebarVisible(!isSidebarVisible);
  }

  return (
    <VStack className="h-full w-full bg-background-0">
      <Box className="md:hidden">
        <MobileHeader title={"News feed"} />
      </Box>
      <Box className="hidden md:flex">
        <WebHeader toggleSidebar={toggleSidebar} title={props.title} />
      </Box>
      <VStack className="h-full w-full">
        <HStack className="h-full w-full">
          <Box className="hidden md:flex h-full">
            {isSidebarVisible && <Sidebar />}
          </Box>
          <VStack className="w-full flex-1">{props.children}</VStack>
        </HStack>
      </VStack>
    </VStack>
  );
};

function MobileFooter({ footerIcons }: { footerIcons: any }) {
  const router = useRouter();
  return (
    <HStack
      className={cn(
        "bg-background-0 justify-between w-full absolute left-0 bottom-0 right-0 p-3 overflow-hidden items-center  border-t-border-300  md:hidden border-t",
        { "pb-5": Platform.OS === "ios" },
        { "pb-5": Platform.OS === "android" }
      )}
    >
      {footerIcons.map(
        (
          item: { iconText: string; iconName: any },
          index: React.Key | null | undefined
        ) => {
          return (
            <Pressable
              className="px-0.5 flex-1 flex-col items-center"
              key={index}
              onPress={() => router.push("/news-feed/news-and-feed")}
            >
              <Icon
                as={item.iconName}
                size="md"
                className="h-[32px] w-[65px]"
              />
              <Text className="text-xs text-center text-typography-600">
                {item.iconText}
              </Text>
            </Pressable>
          );
        }
      )}
    </HStack>
  );
}

function WebHeader(props: HeaderProps) {
  return (
    <HStack className="pt-4 pr-10 pb-3 bg-background-0 items-center justify-between border-b border-border-300">
      <HStack className="items-center">
        <Pressable
          onPress={() => {
            props.toggleSidebar();
          }}
        >
          <Icon as={MenuIcon} size="lg" className="mx-5" />
        </Pressable>
        <Text className="text-2xl">{props.title}</Text>
      </HStack>

      <Avatar className="h-9 w-9">
        <AvatarFallbackText className="font-light">A</AvatarFallbackText>
      </Avatar>
    </HStack>
  );
}

function MobileHeader(props: MobileHeaderProps) {
  const router = useRouter();
  return (
    <HStack
      className="py-6 px-4 border-b border-border-300 bg-background-0 items-center justify-between"
      space="md"
    >
      <HStack className="items-center">
        <Pressable
          onPress={() => {
            router.back();
          }}
        >
          <Icon as={ChevronLeftIcon} />
        </Pressable>
        <Text className="text-xl">{props.title}</Text>
      </HStack>
      <Icon as={HeartIcon} className="bg-red-500" />
    </HStack>
  );
}

const MainContent = () => {
  return (
    <VStack className="h-full w-full self-center mb-20 md:mb-2" space="2xl">
      <Image
        source={require("./assets/image2.png")}
        className="w-full h-[478px]"
      />
      <HStack className="absolute pt-6 px-10">
        <Text className="text-typography-900 font-roboto">home &gt; {` `}</Text>
        <Text className="font-semibold text-typography-900 ">profile</Text>
      </HStack>
      <Center className="absolute mt-14 w-full px-10 pt-6 pb-4">
        <VStack space="lg" className="items-center">
          <Avatar size="2xl" className="bg-primary-600">
            <AvatarImage source={require("./assets/image.png")} />
            <AvatarBadge />
          </Avatar>
          <VStack className="gap-1 w-full items-center">
            <Text size="2xl" className="font-roboto text-typography-900">
              Alexander Leslie
            </Text>
            <Text className="font-roboto text-sm text-typography-900">
              United States
            </Text>
          </VStack>

          {userData.map((item, index) => {
            return (
              <HStack className="items-center gap-1" key={index}>
                <VStack className="py-3 px-4 items-center" space="xs">
                  <Text className="text-typography-900 font-roboto font-semibold justify-center items-center">
                    {item.friends}
                  </Text>
                  <Text className="text-typography-900 text-xs font-roboto">
                    {item.friendsText}
                  </Text>
                </VStack>
                <Divider orientation="vertical" className="h-10" />
                <VStack className="py-3 px-4 items-center" space="xs">
                  <Text className="text-typography-900 font-roboto font-semibold">
                    {item.followers}
                  </Text>
                  <Text className="text-typography-900 text-xs font-roboto">
                    {item.followersText}
                  </Text>
                </VStack>
                <Divider orientation="vertical" className="h-10" />
                <VStack className="py-3 px-4 items-center" space="xs">
                  <Text className="text-typography-900 font-roboto font-semibold">
                    {item.rewards}
                  </Text>
                  <Text className="text-typography-900 text-xs font-roboto">
                    {item.rewardsText}
                  </Text>
                </VStack>
                <Divider orientation="vertical" className="h-10" />
                <VStack className="py-3 px-4 items-center" space="xs">
                  <Text className="text-typography-900 font-roboto font-semibold">
                    {item.posts}
                  </Text>
                  <Text className="text-typography-900 text-xs font-roboto">
                    {item.postsText}
                  </Text>
                </VStack>
              </HStack>
            );
          })}
          <Button variant="outline" action="secondary" className="gap-3">
            <ButtonText>Edit Profile</ButtonText>
            <ButtonIcon as={EditIcon} />
          </Button>
        </VStack>
      </Center>
      <HStack
        className="ml-6 mr-20 py-5 px-6 border rounded-xl border-border-300 justify-between items-center"
        space="2xl"
      >
        <HStack space="2xl" className="items-center">
          <Image source={require("./assets/image1.png")} size="md" />
          <VStack>
            <Text className="text-typography-900 text-lg" size="lg">
              Invite & get rewards
            </Text>
            <Text className="font-roboto">Your code r45dAsdeK8</Text>
          </VStack>
        </HStack>
        <Button>
          <ButtonText>Invite</ButtonText>
        </Button>
      </HStack>
    </VStack>
  );
};

export const Profile = () => {
  return (
    <SafeAreaView className="h-full w-full">
      <DashboardLayout title="Company Name" isSidebarVisible={true}>
        <MainContent />
      </DashboardLayout>
      <MobileFooter footerIcons={bottomTabsList} />
    </SafeAreaView>
  );
};
