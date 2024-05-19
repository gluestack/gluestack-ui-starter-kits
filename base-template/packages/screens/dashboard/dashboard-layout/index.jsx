import { Box } from "@base-template/components/box";
import { HStack } from "@base-template/components/hstack";
import { ChevronLeftIcon, Icon, MenuIcon, } from "@base-template/components/icon";
import { Text } from "@base-template/components/text";
import { VStack } from "@base-template/components/vstack";
import { Pressable } from "@base-template/components/pressable";
import { InboxIcon } from "./assets/icons/inbox";
import { GlobeIcon } from "./assets/icons/globe";
import { Button, ButtonText } from "@base-template/components/button";
import { useState } from "react";
import { Heading } from "@base-template/components/heading";
import { ScrollView } from "@base-template/components/scroll-view";
import { Divider } from "@base-template/components/divider";
import { Avatar, AvatarFallbackText, AvatarImage, } from "@base-template/components/avatar";
import useRouter from "@unitools/router";
import { HomeIcon } from "./assets/icons/home";
import { HeartIcon } from "./assets/icons/heart";
import { ProfileIcon } from "./assets/icons/profile";
import { CalendarIcon } from "./assets/icons/calendar";
import { SafeAreaView } from "@base-template/components/safe-area-view";
const list = [
    {
        iconName: HomeIcon,
    },
    {
        iconName: InboxIcon,
    },
    {
        iconName: GlobeIcon,
    },
    {
        iconName: HeartIcon,
    },
];
const bottomTabsList = [
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
const HeadingCards = [
    {
        bannerUri: require("./assets/image.png"),
        title: "Update your profile",
        description: "Add your details",
    },
    {
        bannerUri: require("./assets/image2.png"),
        title: "Your skills",
        description: "Add your skills here",
    },
    {
        bannerUri: require("./assets/image3.png"),
        title: "Your goals",
        description: "Set a target to accomplish",
    },
    {
        bannerUri: require("./assets/image3.png"),
        title: "Your goals",
        description: "Set a target to accomplish",
    },
    {
        bannerUri: require("./assets/image3.png"),
        title: "Your goals",
        description: "Set a target to accomplish",
    },
];
const HolidaysCards = [
    {
        icon: CalendarIcon,
        title: "Navaratri",
        description: "12 March, Monday (Optional holiday)",
    },
    {
        icon: CalendarIcon,
        title: "Durga Puja",
        description: "12 October, Tuesday",
    },
    {
        icon: CalendarIcon,
        title: "Diwali",
        description: "12 March, Wednesday",
    },
    {
        icon: CalendarIcon,
        title: "Christmas",
        description: "12 March, Thursday",
    },
];
const LeavesCards = [
    {
        title: "Earned Leaves",
        description: "Available 24",
        leaves: 24,
        isDisabled: false,
    },
    {
        title: "Sick Leaves",
        description: "Available 24",
        leaves: 24,
        isDisabled: false,
    },
    {
        title: "Menstrual Leaves",
        description: "Available 20",
        leaves: 20,
        isDisabled: false,
    },
    {
        title: "Optional Leaves",
        description: "Available 0",
        leaves: 0,
        isDisabled: true,
    },
];
const ColleaguesCards = [
    {
        image: require("./assets/image7.png"),
        title: "Emily Zho",
        position: "UI/UX Designer",
    },
    {
        image: require("./assets/image4.png"),
        title: "Marilyn Monroe",
        position: "SDE II",
    },
    {
        image: require("./assets/image5.png"),
        title: "James Kant",
        position: "SDE III",
    },
    {
        image: require("./assets/image6.png"),
        title: "Richard Faynmen",
        position: "CEO Marketing",
    },
];
const Sidebar = () => {
    return (<VStack className="w-14 pt-5 h-full  items-center  border-r border-border-300" space="md">
      {list.map((item, index) => {
            return (<Pressable className="px-4 py-3 data-[focus-visible=true]:ring-transparent" key={index}>
            <Icon as={item.iconName} className="m-3" size="xl"/>
          </Pressable>);
        })}
    </VStack>);
};
const DashboardLayout = (props) => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(props.isSidebarVisible);
    function toggleSidebar() {
        setIsSidebarVisible(!isSidebarVisible);
    }
    return (<VStack className="h-full w-full bg-background-0">
      <Box className="md:hidden">
        <MobileHeader title={props.title}/>
      </Box>
      <Box className="hidden md:flex">
        <WebHeader toggleSidebar={toggleSidebar} title={props.title}/>
      </Box>
      <VStack className="h-full w-full">
        <HStack className="h-full w-full">
          <Box className="hidden md:flex h-full">
            {isSidebarVisible && <Sidebar />}
          </Box>
          <VStack className="w-full">{props.children}</VStack>
        </HStack>
      </VStack>
    </VStack>);
};
function MobileFooter({ footerIcons }) {
    const router = useRouter();
    return (<HStack className="bg-background-0 justify-between w-full absolute left-0 bottom-0 right-0 p-3 overflow-hidden items-center  border-t-typography-200  md:hidden border-t">
      {footerIcons.map((item, index) => {
            return (<Pressable className="px-0.5 flex-1 flex-col items-center" key={index} onPress={() => router.push("/news-feed/news-and-feed")}>
              <Icon as={item.iconName} size="md"/>
              <Text className="text-xs text-center text-typography-600">
                {item.iconText}
              </Text>
            </Pressable>);
        })}
    </HStack>);
}
function WebHeader(props) {
    return (<HStack className="pt-4  pr-10 pb-3 bg-background-0 items-center justify-between border-b border-border-300">
      <HStack className="items-center">
        <Pressable onPress={() => {
            props.toggleSidebar();
        }} className="data-[focus-visible=true]:ring-transparent">
          <Icon as={MenuIcon} size="lg" className="mx-5"/>
        </Pressable>
        <Text className="text-2xl">{props.title}</Text>
      </HStack>

      <Avatar className="h-9 w-9">
        <AvatarFallbackText className="font-light">A</AvatarFallbackText>
      </Avatar>
    </HStack>);
}
function MobileHeader(props) {
    const router = useRouter();
    return (<HStack className="py-6 px-4  border-b border-border-50  bg-background-0  items-center" space="md">
      <Pressable onPress={() => {
            router.back();
        }}>
        <Icon as={ChevronLeftIcon}/>
      </Pressable>
      <Text className="text-xl">{props.title}</Text>
    </HStack>);
}
const MainContent = () => {
    return (<ScrollView showsVerticalScrollIndicator={false} className="mb-20 md:mb-0">
      <VStack className="p-4 pb-0 md:px-10 md:pt-6 md:pb-0 h-full w-full" space="2xl">
        <Heading size="2xl" className="font-roboto">
          Welcome Alexander
        </Heading>
        <HStack space="2xl" className="w-full flex-wrap">
          {HeadingCards.map((item, index) => {
            return (<HStack space="md" key={index} className="border rounded-lg p-4 items-center justify-between w-full max-w-[400px]">
                <HStack space="xl" className="items-center">
                  <Avatar>
                    <AvatarImage 
            //@ts-ignore
            source={item.bannerUri}/>
                  </Avatar>
                  <VStack>
                    <Text className="font-semibold text-typography-900">
                      {item.title}
                    </Text>
                    <Text className="">{item.description}</Text>
                  </VStack>
                </HStack>
                <Button size="xs">
                  <ButtonText>Edit</ButtonText>
                </Button>
              </HStack>);
        })}
        </HStack>

        <HStack space="2xl" className="w-full flex-wrap">
          <VStack className="border rounded-lg px-4 py-6 items-center justify-between w-full max-w-[400px]" space="sm">
            <Box className="self-start  w-full px-4">
              <Heading size="lg" className="font-roboto  text-typography-700">
                Upcoming Holidays
              </Heading>
            </Box>
            <Divider />
            {HolidaysCards.map((item, index) => {
            return (<HStack space="lg" key={index} className="w-full px-4 py-2 max-w-[400px]">
                  <Avatar className="bg-background-50 h-10 w-10">
                    <Icon as={item.icon}/>
                  </Avatar>
                  <VStack>
                    <Text className="text-typography-900 font-roboto">
                      {item.title}
                    </Text>
                    <Text className="text-sm font-roboto">
                      {item.description}
                    </Text>
                  </VStack>
                </HStack>);
        })}
          </VStack>
          <VStack className="border rounded-lg px-4 py-6 items-center justify-between w-full max-w-[400px]" space="sm">
            <Box className="self-start  w-full px-4">
              <Heading size="lg" className="font-roboto  text-typography-700">
                Your Leaves
              </Heading>
            </Box>
            <Divider />
            {LeavesCards.map((item, index) => {
            return (<HStack space="lg" key={index} className="w-full px-4 py-2 justify-between items-center max-w-[400px]">
                  <HStack space="xl" className="items-center">
                    <Box className={`${item.leaves !== 0 ? "bg-success-0" : "bg-error-50"} rounded-full h-10 w-10 items-center justify-center`}>
                      <Text className={`${item.leaves !== 0
                    ? "text-success-800"
                    : "text-error-700"}`}>
                        {item.leaves}
                      </Text>
                    </Box>
                    <VStack>
                      <Text className="text-typography-900 font-roboto">
                        {item.title}
                      </Text>
                      <Text className="text-sm font-roboto">
                        {item.description}
                      </Text>
                    </VStack>
                  </HStack>
                  <Button isDisabled={item.isDisabled} variant="outline" action="secondary" size="xs">
                    <ButtonText>Apply</ButtonText>
                  </Button>
                </HStack>);
        })}
          </VStack>
          <VStack className="border rounded-lg px-4 py-6 items-center justify-between w-full max-w-[400px]" space="sm">
            <Box className="self-start  w-full px-4">
              <Heading size="lg" className="font-roboto  text-typography-700">
                New colleagues
              </Heading>
            </Box>
            <Divider />
            {ColleaguesCards.map((item, index) => {
            return (<HStack space="lg" key={index} className="w-full px-4 py-2 max-w-[400px]">
                  <Avatar className="h-10 w-10">
                    <AvatarImage source={item.image}/>
                  </Avatar>
                  <VStack>
                    <Text className="text-typography-900 font-roboto">
                      {item.title}
                    </Text>
                    <Text className="text-sm font-roboto">{item.position}</Text>
                  </VStack>
                </HStack>);
        })}
          </VStack>
          <VStack className="border rounded-lg px-4 py-6 items-center justify-between w-full max-w-[400px]" space="sm">
            <Box className="self-start  w-full px-4">
              <Heading size="lg" className="font-roboto  text-typography-700">
                New colleagues
              </Heading>
            </Box>
            <Divider />
            {ColleaguesCards.map((item, index) => {
            return (<HStack space="lg" key={index} className="w-full px-4 py-2 max-w-[400px]">
                  <Avatar className="h-10 w-10">
                    <AvatarImage source={item.image}/>
                  </Avatar>
                  <VStack>
                    <Text className="text-typography-900 font-roboto">
                      {item.title}
                    </Text>
                    <Text className="text-sm font-roboto">{item.position}</Text>
                  </VStack>
                </HStack>);
        })}
          </VStack>
        </HStack>
      </VStack>
    </ScrollView>);
};
export const Dashboard = () => {
    return (<SafeAreaView className="h-full w-full">
      <DashboardLayout title="Dashboard" isSidebarVisible={true}>
        <MainContent />
      </DashboardLayout>
      <MobileFooter footerIcons={bottomTabsList}/>
    </SafeAreaView>);
};
