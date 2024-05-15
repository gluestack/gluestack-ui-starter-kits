import React from "react";
import {
  Avatar,
  AvatarFallbackText,
  AvatarGroup,
  AvatarImage,
} from "@base-template/components/avatar";
import { HStack } from "@base-template/components/hstack";
import { VStack } from "@base-template/components/vstack";
import { Heading } from "@base-template/components/heading";
import { Text } from "@base-template/components/text";
import { Button, ButtonText } from "@base-template/components/button";
import { Icon } from "@base-template/components/icon";
import { GluestackIcon } from "./assets/icons/gluestack-icon";
import useRouter from "@unitools/router";
import { MonitorCheck } from "lucide-react-native";
const ProfileAvatars = [
  require("./assets/image.png"),
  require("./assets/image1.png"),
  require("./assets/image2.png"),
  require("./assets/image3.png"),
];

const SplashScreenWithLeftBackground = () => {
  const formDetails = {
    heading: " gluestack-ui",
    badge: "Pro",
    subHeading: "Start making your dreams come true",
    description:
      "Create an account and discover the worlds best UI component framework.",
    avatarNumber: "+ 2",
    subDescription: "Join 10,000+ users",
    license: " © 2023 gluestack UI. All rights reserved.",
  };
  const router = useRouter();
  return (
    <HStack className="w-full h-full bg-background-0">
      <VStack
        className="w-0 hidden md:flex md:h-full bg-primary-500 md:min-w-[50%]  justify-between p-7"
        space="md"
      >
        <VStack space="md" className="justify-center flex-1">
          <Heading
            className="md:w-[98%] text-typography-50 font-bold"
            size="4xl"
          >
            {formDetails.subHeading}
          </Heading>
          <Text size="md" className="text-typography-50 leading-7">
            {formDetails.description}
          </Text>
          <HStack className="-2 items-center">
            <HStack className="justify-center items-center">
              {/* @ts-ignore */}
              <AvatarGroup>
                {ProfileAvatars.slice(0, 2).map((avatar) => {
                  return (
                    <Avatar className="flex lg:hidden" size="md">
                      <AvatarImage
                        source={avatar}
                        className="border-[2px] border-primary-500"
                      />
                    </Avatar>
                  );
                })}
                {ProfileAvatars.map((avatar) => {
                  return (
                    <Avatar className="hidden lg:flex" size="md">
                      <AvatarImage
                        source={avatar}
                        height={50}
                        width={50}
                        className=" border-[2px] border-primary-500"
                      />
                    </Avatar>
                  );
                })}
                <Avatar className="flex lg:hidden" size="md">
                  <AvatarFallbackText>
                    {formDetails.avatarNumber}
                  </AvatarFallbackText>
                </Avatar>
              </AvatarGroup>
            </HStack>
            <Text className="leading-7 text-typography-50 ml-4">
              {formDetails.subDescription}
            </Text>
          </HStack>
        </VStack>
        <Heading className="text-xs font-bold tracking-[0.2px] text-typography-200">
          {formDetails.license}
        </Heading>
      </VStack>

      <VStack className="items-center justify-center w-full max-w-[440px] p-9 m-auto md:w-1/2 gap-16">
        <HStack className="md:items-center" space="lg">
          <Icon as={GluestackIcon} className="w-[219px] h-10" />
          <Icon as={MonitorCheck} className="stroke-red-500" />
        </HStack>

        <VStack className="w-full" space="lg">
          <Button
            className="w-full"
            onPress={() => {
              router.push("/auth/signin");
            }}
          >
            <ButtonText className="font-medium">Log in</ButtonText>
          </Button>
          <Button
            onPress={() => {
              router.push("/auth/signup");
            }}
          >
            <ButtonText className="font-medium">Sign Up</ButtonText>
          </Button>
        </VStack>
      </VStack>
    </HStack>
  );
};

export const SplashScreen = () => {
  return <SplashScreenWithLeftBackground />;
};
