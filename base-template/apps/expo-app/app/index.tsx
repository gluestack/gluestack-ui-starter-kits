import React from "react";
import { Button, ButtonText } from "@base-template/components/button";
import { router } from "expo-router";
import { SafeAreaView } from "react-native";
import { VStack } from "@base-template/components/vstack";
import { Heading } from "@base-template/components/heading";
const index = () => {
  return (
    <SafeAreaView>
      <VStack className="m-2" space="xl">
        <Heading>Auth Screen</Heading>
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
      </VStack>
    </SafeAreaView>
  );
};

export default index;
