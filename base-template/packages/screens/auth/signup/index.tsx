import React, { useState } from "react";
import {
  Avatar,
  AvatarFallbackText,
  AvatarGroup,
  AvatarImage,
} from "@base-template/components/avatar";
import { SafeAreaView } from "@base-template/components/safe-area-view";

import { Toast, ToastTitle, useToast } from "@base-template/components/toast";
import { HStack } from "@base-template/components/hstack";
import { VStack } from "@base-template/components/vstack";
import { Heading } from "@base-template/components/heading";
import { Text } from "@base-template/components/text";
import { LinkText } from "@base-template/components/link";
import Link from "@unitools/link";
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from "@base-template/components/form-control";
import {
  Input,
  InputField,
  InputIcon,
  InputSlot,
} from "@base-template/components/input";
import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from "@base-template/components/checkbox";
import {
  ArrowLeftIcon,
  CheckIcon,
  EyeIcon,
  EyeOffIcon,
  Icon,
} from "@base-template/components/icon";
import {
  Button,
  ButtonText,
  ButtonIcon,
} from "@base-template/components/button";
import { Keyboard } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertTriangle } from "lucide-react-native";
import { GoogleIcon } from "./assets/icons/google";

const signUpSchema = z.object({
  email: z.string().min(1, "Email is required").email(),
  password: z
    .string()
    .min(6, "Must be at least 8 characters in length")
    .regex(new RegExp(".*[A-Z].*"), "One uppercase character")
    .regex(new RegExp(".*[a-z].*"), "One lowercase character")
    .regex(new RegExp(".*\\d.*"), "One number")
    .regex(
      new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
      "One special character"
    ),
  confirmpassword: z
    .string()
    .min(6, "Must be at least 8 characters in length")
    .regex(new RegExp(".*[A-Z].*"), "One uppercase character")
    .regex(new RegExp(".*[a-z].*"), "One lowercase character")
    .regex(new RegExp(".*\\d.*"), "One number")
    .regex(
      new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
      "One special character"
    ),
  rememberme: z.boolean().optional(),
});
type SignUpSchemaType = z.infer<typeof signUpSchema>;

const ProfileAvatars = [
  require("./assets/image.png"),
  require("./assets/image1.png"),
  require("./assets/image2.png"),
  require("./assets/image3.png"),
];

const SignUpWithLeftBackground = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
  });
  const toast = useToast();

  const onSubmit = (data: SignUpSchemaType) => {
    if (data.password === data.confirmpassword) {
      toast.show({
        placement: "bottom right",
        render: ({ id }) => {
          return (
            <Toast nativeID={id} variant="accent" action="success">
              <ToastTitle>Success</ToastTitle>
            </Toast>
          );
        },
      });
      reset();
    } else {
      toast.show({
        placement: "bottom right",
        render: ({ id }) => {
          return (
            <Toast nativeID={id} variant="accent" action="error">
              <ToastTitle>Passwords do not match</ToastTitle>
            </Toast>
          );
        },
      });
    }
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };
  const handleConfirmPwState = () => {
    setShowConfirmPassword((showState) => {
      return !showState;
    });
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

      <VStack
        className="md:items-center md:justify-center w-full max-w-[440px] p-9 md:m-auto md:w-1/2"
        space="2xl"
      >
        <VStack className="md:items-center" space="xs">
          <Icon
            as={ArrowLeftIcon}
            className="md:hidden stroke-background-800"
            size="xl"
          />
          <Heading className="md:text-center" size="3xl">
            Sign up to continue
          </Heading>
          <Text>Start making your dreams come true</Text>
        </VStack>
        <VStack space="xl" className="w-full">
          <FormControl isInvalid={!!errors.email}>
            <FormControlLabel>
              <FormControlLabelText>Email</FormControlLabelText>
            </FormControlLabel>
            <Controller
              name="email"
              defaultValue=""
              control={control}
              rules={{
                validate: async (value) => {
                  try {
                    await signUpSchema.parseAsync({ email: value });
                    return true;
                  } catch (error: any) {
                    return error.message;
                  }
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input>
                  <InputField
                    className="text-sm"
                    placeholder="Email"
                    type="text"
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
              <FormControlErrorIcon size="md" as={AlertTriangle} />
              <FormControlErrorText>
                {errors?.email?.message}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
          <FormControl isInvalid={!!errors.password}>
            <FormControlLabel>
              <FormControlLabelText>Password</FormControlLabelText>
            </FormControlLabel>
            <Controller
              defaultValue=""
              name="password"
              control={control}
              rules={{
                validate: async (value) => {
                  try {
                    await signUpSchema.parseAsync({
                      password: value,
                    });
                    return true;
                  } catch (error: any) {
                    return error.message;
                  }
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input>
                  <InputField
                    className="text-sm"
                    placeholder="Password"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    onSubmitEditing={handleKeyPress}
                    returnKeyType="done"
                    type={showPassword ? "text" : "password"}
                  />
                  <InputSlot onPress={handleState} className="pr-3">
                    <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
                  </InputSlot>
                </Input>
              )}
            />
            <FormControlError>
              <FormControlErrorIcon size="sm" as={AlertTriangle} />
              <FormControlErrorText>
                {errors?.password?.message}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
          <FormControl isInvalid={!!errors.confirmpassword}>
            <FormControlLabel>
              <FormControlLabelText>Confirm Password</FormControlLabelText>
            </FormControlLabel>
            <Controller
              defaultValue=""
              name="confirmpassword"
              control={control}
              rules={{
                validate: async (value) => {
                  try {
                    await signUpSchema.parseAsync({
                      password: value,
                    });
                    return true;
                  } catch (error: any) {
                    return error.message;
                  }
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input>
                  <InputField
                    placeholder="Confirm Password"
                    className="text-sm"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    onSubmitEditing={handleKeyPress}
                    returnKeyType="done"
                    type={showConfirmPassword ? "text" : "password"}
                  />

                  <InputSlot onPress={handleConfirmPwState} className="pr-3">
                    <InputIcon
                      as={showConfirmPassword ? EyeIcon : EyeOffIcon}
                    />
                  </InputSlot>
                </Input>
              )}
            />
            <FormControlError>
              <FormControlErrorIcon size="sm" as={AlertTriangle} />
              <FormControlErrorText>
                {errors?.confirmpassword?.message}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>

          <Controller
            name="rememberme"
            defaultValue={false}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Checkbox
                size="sm"
                value="Remember me"
                isChecked={value}
                onChange={onChange}
                aria-label="Remember me"
              >
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>
                  I accept the Terms of Use & Privacy Policy
                </CheckboxLabel>
              </Checkbox>
            )}
          />
        </VStack>
        <VStack className="w-full" space="lg">
          <Button className="w-full" onPress={handleSubmit(onSubmit)}>
            <ButtonText className="font-medium">Sign up</ButtonText>
          </Button>
          <Button
            variant="outline"
            action="secondary"
            className="w-full gap-1"
            onPress={() => {}}
          >
            <ButtonText className="font-medium">
              Continue with Google
            </ButtonText>
            <ButtonIcon as={GoogleIcon} />
          </Button>
        </VStack>
        <HStack className="self-center">
          <Text size="md">Already have an account?</Text>
          <Link href="/auth/signin" isExternal>
            <LinkText
              className="font-medium text-primary-700 ml-1  group-hover/link:text-primary-600  group-hover/pressed:text-primary-700"
              size="md"
            >
              Login
            </LinkText>
          </Link>
        </HStack>
      </VStack>
    </HStack>
  );
};

export const SignUp = () => {
  return (
    <SafeAreaView className="w-full h-full">
      <SignUpWithLeftBackground />
    </SafeAreaView>
  );
};
