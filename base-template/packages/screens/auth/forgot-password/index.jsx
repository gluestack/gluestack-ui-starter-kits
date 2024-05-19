import "react";
import {
  Avatar,
  AvatarFallbackText,
  AvatarGroup,
  AvatarImage,
} from "@base-template/components/avatar";
import { Toast, ToastTitle, useToast } from "@base-template/components/toast";
import { HStack } from "@base-template/components/hstack";
import { VStack } from "@base-template/components/vstack";
import { Heading } from "@base-template/components/heading";
import { Text } from "@base-template/components/text";
import { SafeAreaView } from "@base-template/components/safe-area-view";
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from "@base-template/components/form-control";
import { Input, InputField } from "@base-template/components/input";
import { ArrowLeftIcon, Icon } from "@base-template/components/icon";
import { Button, ButtonText } from "@base-template/components/button";
import { Keyboard } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertTriangle } from "lucide-react-native";
const forgotPasswordSchema = z.object({
  email: z.string().min(1, "Email is required").email(),
});
const ProfileAvatars = [
  require("./assets/image.png"),
  require("./assets/image1.png"),
  require("./assets/image2.png"),
  require("./assets/image3.png"),
];
const ForgotPasswordScreen = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
  });
  const toast = useToast();
  const onSubmit = (_data) => {
    toast.show({
      placement: "bottom right",
      render: ({ id }) => {
        return (
          <Toast nativeID={id} variant="accent" action="success">
            <ToastTitle>Link Sent Successfully</ToastTitle>
          </Toast>
        );
      },
    });
    reset();
  };
  const handleKeyPress = () => {
    Keyboard.dismiss();
    handleSubmit(onSubmit)();
  };
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
                        className="border-[2px] border-primary-500"
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

      <VStack
        className="md:items-center md:justify-center w-full md:max-w-[440px] p-9 gap-16 md:gap-10 md:m-auto md:w-1/2"
        space="3xl"
      >
        <VStack className="md:items-center" space="xs">
          <Icon
            as={ArrowLeftIcon}
            className="md:hidden stroke-background-800"
            size="xl"
          />
          <Heading className="md:text-center" size="3xl">
            Forgot Password?
          </Heading>
          <Text className="text-sm">
            Enter email ID associated with your account.
          </Text>
        </VStack>

        <VStack space="xl" className="w-full ">
          <FormControl isInvalid={!!errors?.email} className="w-full">
            <FormControlLabel>
              <FormControlLabelText>Email</FormControlLabelText>
            </FormControlLabel>
            <Controller
              defaultValue=""
              name="email"
              control={control}
              rules={{
                validate: async (value) => {
                  try {
                    await forgotPasswordSchema.parseAsync({ email: value });
                    return true;
                  } catch (error) {
                    return error.message;
                  }
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input>
                  <InputField
                    placeholder="Enter email"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    onSubmitEditing={handleKeyPress}
                    returnKeyType="done"
                  />
                </Input>
              )}
            />
            <FormControlError>
              <FormControlErrorIcon as={AlertTriangle} />
              <FormControlErrorText>
                {errors?.email?.message}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
          <Button className="w-full" onPress={handleSubmit(onSubmit)}>
            <ButtonText className="font-medium">Send Link</ButtonText>
          </Button>
        </VStack>
      </VStack>
    </HStack>
  );
};
export const ForgotPassword = () => {
  return (
    <SafeAreaView className="w-full h-full">
      <ForgotPasswordScreen />
    </SafeAreaView>
  );
};
