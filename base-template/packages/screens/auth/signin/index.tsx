import React, { useState } from "react";
import {
  Avatar,
  AvatarFallbackText,
  AvatarGroup,
  AvatarImage,
} from "@/components/avatar";
import { Toast, ToastTitle, useToast } from "@/components/toast";
import { HStack } from "@/components/hstack";
import { VStack } from "@/components/vstack";
import { Heading } from "@/components/heading";
import { Text } from "@/components/text";
import { LinkText } from "@/components/link";
import Link from "@unitools/link";
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/form-control";
import { Input, InputField, InputIcon, InputSlot } from "@/components/input";
import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from "@/components/checkbox";
import {
  ArrowLeftIcon,
  CheckIcon,
  EyeIcon,
  EyeOffIcon,
  Icon,
} from "@/components/icon";
import { Button, ButtonText, ButtonIcon } from "@/components/button";
import { Keyboard } from "react-native";
import { SafeAreaView } from "@/components/safe-area-view";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertTriangle } from "lucide-react-native";
import { GoogleIcon } from "./assets/icons/google";
import { Pressable } from "@/components/pressable";
import useRouter from "@unitools/router";
// import Image from "@unitools/image";

const USERS = [
  {
    email: "gabrial@gmail.com",
    password: "Gabrial@123",
  },
  {
    email: "tom@gmail.com",
    password: "Tom@123",
  },
  {
    email: "thomas@gmail.com",
    password: "Thomas@1234",
  },
];

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email(),
  password: z.string().min(1, "Password is required"),
  rememberme: z.boolean().optional(),
});

type LoginSchemaType = z.infer<typeof loginSchema>;

const ProfileAvatars = [
  require("./assets/image.png"),
  require("./assets/image1.png"),
  require("./assets/image2.png"),
  require("./assets/image3.png"),
];
type AuthLayoutProps = {
  children: React.ReactNode;
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
const AuthLayout = (props: AuthLayoutProps) => {
  return (
    <SafeAreaView className="w-full h-full">
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
            <HStack className="items-center">
              <HStack className="justify-center items-center">
                {/* @ts-ignore */}
                <AvatarGroup>
                  {ProfileAvatars.slice(0, 2).map((avatar, index) => {
                    return (
                      <Avatar className="flex lg:hidden" key={index} size="md">
                        <AvatarImage
                          source={avatar}
                          className="border-2 border-primary-500"
                        />
                      </Avatar>
                    );
                  })}
                  {ProfileAvatars.map((avatar, index) => {
                    return (
                      <Avatar className="hidden lg:flex" key={index} size="md">
                        <AvatarImage
                          source={avatar}
                          className="border-2 border-primary-500"
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

        <VStack className="md:items-center md:justify-center w-full md:max-w-[440px] p-9 md:gap-10 gap-16 md:m-auto md:w-1/2">
          {props.children}
        </VStack>
      </HStack>
    </SafeAreaView>
  );
};
const LoginWithLeftBackground = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });
  const toast = useToast();
  const [validated, setValidated] = useState({
    emailValid: true,
    passwordValid: true,
  });

  const onSubmit = (data: LoginSchemaType) => {
    const user = USERS.find((element) => element.email === data.email);
    if (user) {
      if (user.password !== data.password)
        setValidated({ emailValid: true, passwordValid: false });
      else {
        setValidated({ emailValid: true, passwordValid: true });
        toast.show({
          placement: "bottom right",
          render: ({ id }) => {
            return (
              <Toast nativeID={id} variant="accent" action="success">
                <ToastTitle>Logged in successfully!</ToastTitle>
              </Toast>
            );
          },
        });
        reset();
      }
    } else {
      setValidated({ emailValid: false, passwordValid: true });
    }
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };
  const handleKeyPress = () => {
    Keyboard.dismiss();
    handleSubmit(onSubmit)();
  };
  const router = useRouter();
  return (
    <>
      <VStack className="md:items-center" space="md">
        <Pressable
          onPress={() => {
            router.back();
          }}
        >
          <Icon
            as={ArrowLeftIcon}
            className="md:hidden text-background-800"
            size="xl"
          />
        </Pressable>
        <VStack>
          <Heading className="md:text-center" size="3xl">
            Log in
          </Heading>
          <Text>Start making your dreams come true</Text>
        </VStack>
      </VStack>
      <VStack className="w-full">
        <VStack space="xl" className="w-full">
          <FormControl
            isInvalid={!!errors?.email || !validated.emailValid}
            className="w-full"
          >
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
                    await loginSchema.parseAsync({ email: value });
                    return true;
                  } catch (error: any) {
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
                {errors?.email?.message ||
                  (!validated.emailValid && "Email ID not found")}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
          {/* Label Message */}
          <FormControl
            isInvalid={!!errors.password || !validated.passwordValid}
            className="w-full"
          >
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
                    await loginSchema.parseAsync({ password: value });
                    return true;
                  } catch (error: any) {
                    return error.message;
                  }
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input>
                  <InputField
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    onSubmitEditing={handleKeyPress}
                    returnKeyType="done"
                  />
                  <InputSlot onPress={handleState} className="pr-3">
                    <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
                  </InputSlot>
                </Input>
              )}
            />
            <FormControlError>
              <FormControlErrorIcon as={AlertTriangle} />
              <FormControlErrorText>
                {errors?.password?.message ||
                  (!validated.passwordValid && "Password was incorrect")}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
          <HStack className="w-full justify-between ">
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
                  <CheckboxLabel>Remember me</CheckboxLabel>
                </Checkbox>
              )}
            />
            <Link href="/auth/forgot-password">
              <LinkText className="font-medium text-sm text-primary-700 group-hover/link:text-primary-600">
                Forgot Password?
              </LinkText>
            </Link>
          </HStack>
        </VStack>
        <VStack className="w-full my-7 " space="lg">
          <Button className="w-full" onPress={handleSubmit(onSubmit)}>
            <ButtonText className="font-medium">Log in</ButtonText>
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
        <HStack className="self-center ">
          <Text size="md">Don't have an account?</Text>
          <Link href="/auth/signup">
            <LinkText
              className="font-medium text-primary-700 ml-1 group-hover/link:text-primary-600  group-hover/pressed:text-primary-700"
              size="md"
            >
              Sign up
            </LinkText>
          </Link>
        </HStack>
      </VStack>
    </>
  );
};

export const SignIn = () => {
  return (
    <AuthLayout>
      <LoginWithLeftBackground />
    </AuthLayout>
  );
};
