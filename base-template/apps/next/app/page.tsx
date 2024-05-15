"use client";
import { Button, ButtonText } from "@base-template/components/button";
import { VStack } from "@base-template/components/vstack";
import { Heading } from "@base-template/components/heading";
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();

  return (
    <VStack className="m-2" space="xl">
      <Heading>Auth Screens</Heading>
      <Button
        onPress={() => {
          router.push("auth/splash-screen");
        }}
      >
        <ButtonText>SplashScreen</ButtonText>
      </Button>
      <Button
        className="w-full"
        onPress={() => {
          router.push("auth/signin");
        }}
      >
        <ButtonText>Sign in</ButtonText>
      </Button>
      <Button
        onPress={() => {
          router.push("auth/signup");
        }}
      >
        <ButtonText>Sign up</ButtonText>
      </Button>
      <Button
        onPress={() => {
          router.push("auth/forgot-password");
        }}
      >
        <ButtonText>Forgot password</ButtonText>
      </Button>
    </VStack>
  );
};

export default Page;
