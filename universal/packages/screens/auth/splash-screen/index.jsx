import {
  Avatar,
  AvatarFallbackText,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { Button, ButtonText } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { GluestackIcon } from "./assets/icons/gluestack-icon";
import useRouter from "@unitools/router";
import "../signin/assets/icons/google";
import Image from "@unitools/image";
const ProfileAvatars = [
  require("./assets/image.png"),
  require("./assets/image1.png"),
  require("./assets/image2.png"),
  require("./assets/image3.png"),
];
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
const AuthLayout = (props) => {
  return (
    <SafeAreaView className="w-full h-full">
      <HStack className="w-full h-full bg-background-0">
        <VStack
          className="w-0 hidden md:flex md:h-full bg-primary-500 md:min-w-[50%] justify-between p-7"
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
            <HStack className="items-center">
              <HStack className="justify-center items-center">
                {/* @ts-ignore */}
                <AvatarGroup>
                  {ProfileAvatars.slice(0, 2).map((avatar, index) => {
                    return (
                      <Avatar className="flex lg:hidden" key={index} size="md">
                        <Image
                          source={avatar}
                          height={"100%"}
                          width={"100%"}
                          alt="Avatar Image"
                          contentFit="cover"
                          style={{ borderRadius: "100%" }}
                        />
                      </Avatar>
                    );
                  })}
                  {ProfileAvatars.map((avatar, index) => {
                    return (
                      <Avatar className="hidden lg:flex" key={index} size="md">
                        <Image
                          source={avatar}
                          height={"100%"}
                          width={"100%"}
                          alt="Avatar Image"
                          contentFit="cover"
                          style={{ borderRadius: "100%" }}
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

        <VStack className="items-center justify-center w-full max-w-[440px] p-9 md:gap-10 gap-16 m-auto md:w-1/2">
          {props.children}
        </VStack>
      </HStack>
    </SafeAreaView>
  );
};
const SplashScreenWithLeftBackground = () => {
  const router = useRouter();
  return (
    <>
      <Icon as={GluestackIcon} className="w-[219px] h-10" />
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
    </>
  );
};
export const SplashScreen = () => {
  return (
    <AuthLayout>
      <SplashScreenWithLeftBackground />
    </AuthLayout>
  );
};
