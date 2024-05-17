import { Box } from "@base-template/components/box";
import { HStack } from "@base-template/components/hstack";
import {
  ChevronLeftIcon,
  DownloadIcon,
  Icon,
  MenuIcon,
  SearchIcon,
} from "@base-template/components/icon";
import { Text } from "@base-template/components/text";
import { VStack } from "@base-template/components/vstack";
import { Pressable } from "@base-template/components/pressable";
import type { LucideIcon } from "lucide-react-native";
import { FeedIcon } from "./assets/icons/feed";
import { GlobeIcon } from "./assets/icons/globe";
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
import { Avatar, AvatarImage } from "@base-template/components/avatar";
import useRouter from "@unitools/router";
import { HomeIcon } from "./assets/icons/home";
import { HeartIcon } from "./assets/icons/heart";
import { ProfileIcon } from "./assets/icons/profile";

type MobileHeaderProps = {
  title: string;
};

type HeaderProps = {
  title: string;
  toggleSidebar: () => void;
};

type Icons = {
  iconName: LucideIcon | typeof Icon;
};
const list: Icons[] = [
  {
    iconName: HomeIcon,
  },
  {
    iconName: FeedIcon,
  },
  {
    iconName: GlobeIcon,
  },
  {
    iconName: HeartIcon,
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
    iconName: FeedIcon,
    iconText: "Feed",
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

interface BlogData {
  bannerUri: string;
  title: string;
  description: string;
  publishedDate: string;
}
interface CreatorData {
  bannerUri: string;
  name: string;
  description: string;
}

const WORLD_DATA: BlogData[] = [
  {
    bannerUri: require("./assets/image3.png"),
    title: "The Power of Positive Thinking",
    description:
      "Discover how the power of positive thinking can transform your life, boost your confidence, and help you overcome challenges. Explore practical tips and techniques to cultivate a positive mindset for greater happiness and success.",
    publishedDate: "May 15, 2023",
  },
  {
    bannerUri: require("./assets/image4.png"),
    title: "The Power of Positive Thinking",
    description:
      "Discover how the power of positive thinking can transform your life, boost your confidence, and help you overcome challenges. Explore practical tips and techniques to cultivate a positive mindset for greater happiness and success.",
    publishedDate: "May 15, 2023",
  },
  {
    bannerUri: require("./assets/image5.png"),
    title: "The Power of Positive Thinking",
    description:
      "Discover how the power of positive thinking can transform your life, boost your confidence, and help you overcome challenges. Explore practical tips and techniques to cultivate a positive mindset for greater happiness and success.",
    publishedDate: "May 15, 2023",
  },
  {
    bannerUri: require("./assets/image3.png"),
    title: "The Power of Positive Thinking",
    description:
      "Discover how the power of positive thinking can transform your life, boost your confidence, and help you overcome challenges. Explore practical tips and techniques to cultivate a positive mindset for greater happiness and success.",
    publishedDate: "May 15, 2023",
  },
  {
    bannerUri: require("./assets/image4.png"),
    title: "The Power of Positive Thinking",
    description:
      "Discover how the power of positive thinking can transform your life, boost your confidence, and help you overcome challenges. Explore practical tips and techniques to cultivate a positive mindset for greater happiness and success.",
    publishedDate: "May 15, 2023",
  },
];
const BLOGS_DATA: BlogData[] = [
  {
    bannerUri: require("./assets/image.png"),
    title: "The Power of Positive Thinking",
    description:
      "Discover how the power of positive thinking can transform your life, boost your confidence, and help you overcome challenges. Explore practical tips and techniques to cultivate a positive mindset for greater happiness and success.",
    publishedDate: "May 15, 2023",
  },
  {
    bannerUri: require("./assets/image2.png"),
    title: "The Power of Positive Thinking",
    description:
      "Discover how the power of positive thinking can transform your life, boost your confidence, and help you overcome challenges. Explore practical tips and techniques to cultivate a positive mindset for greater happiness and success.",
    publishedDate: "May 15, 2023",
  },
  {
    bannerUri: require("./assets/image2.png"),
    title: "The Power of Positive Thinking",
    description:
      "Discover how the power of positive thinking can transform your life, boost your confidence, and help you overcome challenges. Explore practical tips and techniques to cultivate a positive mindset for greater happiness and success.",
    publishedDate: "May 15, 2023",
  },
];
const CREATORS_DATA: CreatorData[] = [
  {
    bannerUri: require("./assets/image6.png"),
    name: "Emily Zho",
    description: "Designer by heart, writer by profession, talks about design",
  },
  {
    bannerUri: require("./assets/image7.png"),
    name: "Ram Narayan",
    description: "Founder of Fortune 500 company Alo, talks about",
  },
  {
    bannerUri: require("./assets/image8.png"),
    name: "David John",
    description: "Creator of all things metal, talks about music and art. ",
  },
];

const Sidebar = () => {
  return (
    <VStack
      className="w-14 pt-5 h-full  items-center  border-r border-border-300 "
      space="md"
    >
      {list.map((item, index) => {
        return (
          <Pressable className="px-4 py-3">
            <Icon key={index} as={item.iconName} className="m-3" size="xl" />
          </Pressable>
        );
      })}
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
      <Box className="hidden md:flex ">
        <WebHeader toggleSidebar={toggleSidebar} title={props.title} />
      </Box>
      <VStack className="h-full w-full">
        <HStack className="h-full w-full">
          <Box className="hidden md:flex h-full ">
            {isSidebarVisible && <Sidebar />}
          </Box>
          <VStack className="w-full">{props.children}</VStack>
        </HStack>
      </VStack>
    </VStack>
  );
};

function MobileFooter({ footerIcons }: { footerIcons: any }) {
  const router = useRouter();
  return (
    <HStack className="bg-background-0 justify-between w-full absolute left-0 bottom-0 right-0 p-3 overflow-hidden items-center  border-t-typography-200  md:hidden border-t">
      {footerIcons.map(
        (
          item: { iconText: string; iconName: any },
          index: React.Key | null | undefined
        ) => {
          return (
            <Pressable
              className="  px-0.5 flex-1 flex-col items-center"
              key={index}
              onPress={() => router.push("/news-feed/news-and-feed")}
            >
              <Icon as={item.iconName} size="md" />
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
    <HStack className="pt-4  pr-10 pb-3 bg-background-0 items-center justify-between border-b border-border-300">
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
      <Button className="rounded-full h-9 w-9 p-3">
        <ButtonIcon as={ProfileIcon} />
      </Button>
    </HStack>
  );
}

function MobileHeader(props: MobileHeaderProps) {
  return (
    <HStack
      className="py-6 px-4  border-b border-border-50  bg-background-0  items-center"
      space="md"
    >
      <Icon as={ChevronLeftIcon} />
      <Text className="text-xl">{props.title}</Text>
    </HStack>
  );
}

const MainContent = () => {
  return (
    <VStack
      className="p-4 pb-0 md:px-10 md:pt-6 md:pb-0 h-full w-full max-w-[1500px] self-center  "
      space="2xl"
    >
      <Input className="text-center md:hidden">
        <InputField placeholder="Search" />
        <InputSlot className="pr-3">
          <InputIcon as={SearchIcon} />
        </InputSlot>
      </Input>
      <Heading size="2xl" className="font-roboto ">
        What's new?
      </Heading>
      <HStack space="2xl" className=" h-full w-full ">
        <ScrollView
          className="max-w-[900px]"
          showsVerticalScrollIndicator={false}
        >
          <VStack className="w-full " space="2xl">
            {BLOGS_DATA.map((item, index) => {
              return (
                <VStack className="rounded-xl border p-5" key={index}>
                  <Image
                    source={item.bannerUri}
                    className="w-full h-64 rounded"
                  />
                  <VStack className="mt-4" space="md">
                    <Text className="text-sm ">{item.publishedDate}</Text>
                    <Heading size="md">{item.title}</Heading>
                    <Text className="line-clamp-2">{item.description}</Text>
                  </VStack>
                </VStack>
              );
            })}
          </VStack>
        </ScrollView>
        <VStack className=" max-w-[500px]  hidden md:flex" space="2xl">
          <Input className="text-center">
            <InputField placeholder="Search" />
            <InputSlot className="pr-3">
              <InputIcon as={SearchIcon} />
            </InputSlot>
          </Input>
          <VStack>
            <ScrollView showsVerticalScrollIndicator={false} className="gap-7">
              <VStack space="lg">
                <Heading size="lg">From around the world</Heading>
                <VStack className=" h-full" space="md">
                  {WORLD_DATA.map((item, index) => {
                    return (
                      <HStack
                        className="p-3 items-center h-full border rounded-xl"
                        space="lg"
                      >
                        <Image
                          source={item.bannerUri}
                          className="w-40 h-full rounded"
                          key={index}
                        />

                        <VStack className="justify-between h-full " space="md">
                          <Text className="text-sm ">{item.publishedDate}</Text>
                          <Heading size="md">{item.title}</Heading>
                          <Text className="line-clamp-2">
                            {item.description}
                          </Text>
                        </VStack>
                      </HStack>
                    );
                  })}
                </VStack>
              </VStack>
              <VStack space="lg" className="mt-7">
                <Heading size="lg">Find creators</Heading>
                <VStack className=" h-full" space="md">
                  {CREATORS_DATA.map((item, index) => {
                    return (
                      <HStack
                        className="p-4 items-center h-full border rounded-xl"
                        space="lg"
                      >
                        <Avatar>
                          <AvatarImage key={index} source={item.bannerUri} />
                        </Avatar>
                        <Button
                          variant="outline"
                          className="p-2 border-background-300 rounded-md"
                        >
                          <ButtonIcon as={DownloadIcon} />
                        </Button>
                        <VStack>
                          <Text className="  font-semibold text-typography-900 ">
                            {item.name}
                          </Text>
                          <Text className="line-clamp-1 text-sm">
                            {item.description}
                          </Text>
                        </VStack>
                        <Button
                          className="border-background-300"
                          variant="outline"
                        >
                          <ButtonText>Follow</ButtonText>
                        </Button>
                      </HStack>
                    );
                  })}
                </VStack>
              </VStack>
            </ScrollView>
          </VStack>
        </VStack>
      </HStack>
    </VStack>
  );
};

export const NewsAndFeed = () => {
  return (
    <>
      <DashboardLayout title="News Feed" isSidebarVisible={true}>
        <MainContent />
      </DashboardLayout>
      <MobileFooter footerIcons={bottomTabsList} />
    </>
  );
};
