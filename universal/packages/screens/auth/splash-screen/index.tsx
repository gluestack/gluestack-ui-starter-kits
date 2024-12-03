import { VStack } from "@/components/ui/vstack";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { ArrowLeftIcon, Icon } from "@/components/ui/icon";
import {
  GluestackIcon,
  GluestackIconDark,
} from "./assets/icons/gluestack-icon";
import useRouter from "@unitools/router";
import { AuthLayout } from "../layout";
import { useColorScheme } from "nativewind";
import { SafeAreaView } from "@/components/ui/safe-area-view";

const SplashScreenWithLeftBackground = () => {
  const router = useRouter();
  const { colorScheme } = useColorScheme();
  return (
    <SafeAreaView className="w-full h-full">
      <VStack
        className="w-full max-w-[440px] items-center h-full justify-center mx-auto"
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
    </SafeAreaView>
  );
};

export const SplashScreen = () => {
  return (
    <AuthLayout>
      <SplashScreenWithLeftBackground />
    </AuthLayout>
  );
};
