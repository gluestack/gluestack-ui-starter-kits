import { VStack } from "@/components/ui/vstack";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { ArrowLeftIcon, Icon } from "@/components/ui/icon";
import {
  GluestackIcon,
  GluestackIconDark,
} from "./assets/icons/gluestack-icon";
import { useColorScheme } from "nativewind";

import useRouter from "@unitools/router";
import { AuthLayout } from "../layout";

const SplashScreenWithLeftBackground = () => {
  const router = useRouter();
  const { colorScheme } = useColorScheme();
  return (
    <VStack
      className="w-full max-w-[440px] items-center h-full justify-center"
      space="lg"
    >
      {colorScheme === "dark" ? (
        <Icon as={GluestackIconDark} className="w-[219px] h-10" />
      ) : (
        <Icon as={GluestackIcon} className="w-[219px] h-10" />
      )}
      <VStack className="w-full" space="lg">
        <Button
          className="w-full"
          onPress={() => {
            router.push("/auth/signin");
          }}
        >
          <ButtonText className="font-medium">Log In</ButtonText>
        </Button>
        <Button
          onPress={() => {
            router.push("/auth/signup");
          }}
        >
          <ButtonText className="font-medium">Sign Up</ButtonText>
        </Button>
        <Button
          onPress={() => {
            router.replace("/");
          }}
        >
          <ButtonIcon
            as={ArrowLeftIcon}
            className="md:hidden stroke-background-100"
            size="xl"
          />
          <ButtonText className="font-medium hidden md:block">
            Go Back
          </ButtonText>
        </Button>
      </VStack>
    </VStack>
  );
};

export const SplashScreen = () => {
  return (
    <AuthLayout>
      <SplashScreenWithLeftBackground />
    </AuthLayout>
  );
};
