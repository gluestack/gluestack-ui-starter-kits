"use client";
import { Button, ButtonText } from "@/components/ui/button";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();

  return (
    <VStack className="m-2" space="xl">
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
      <Button
        onPress={() => {
          router.push("auth/create-password");
        }}
      >
        <ButtonText>Create password</ButtonText>
      </Button>
      <Button
        onPress={() => {
          router.push("news-feed/news-and-feed");
        }}
      >
        <ButtonText>News feed</ButtonText>
      </Button>
      <Button
        onPress={() => {
          router.push("dashboard/dashboard-layout");
        }}
      >
        <ButtonText>Dashboard</ButtonText>
      </Button>
      <Button
        onPress={() => {
          router.push("profile/profile");
        }}
      >
        <ButtonText>Profile</ButtonText>
      </Button>
    </VStack>
  );
};

export default Page;
