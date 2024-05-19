import { useState } from "react";
import { Avatar, AvatarFallbackText, AvatarGroup, AvatarImage, } from "@base-template/components/avatar";
import { SafeAreaView } from "@base-template/components/safe-area-view";
import { Toast, ToastTitle, useToast } from "@base-template/components/toast";
import { HStack } from "@base-template/components/hstack";
import { VStack } from "@base-template/components/vstack";
import { Heading } from "@base-template/components/heading";
import { Text } from "@base-template/components/text";
import { FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, FormControlLabel, FormControlLabelText, } from "@base-template/components/form-control";
import { Input, InputField, InputIcon, InputSlot, } from "@base-template/components/input";
import { ArrowLeftIcon, EyeIcon, EyeOffIcon, Icon, } from "@base-template/components/icon";
import { Button, ButtonText } from "@base-template/components/button";
import { Keyboard } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertTriangle } from "lucide-react-native";
import { Pressable } from "@base-template/components/pressable";
import useRouter from "@unitools/router";
const createPasswordSchema = z.object({
    password: z
        .string()
        .min(6, "Must be at least 8 characters in length")
        .regex(new RegExp(".*[A-Z].*"), "One uppercase character")
        .regex(new RegExp(".*[a-z].*"), "One lowercase character")
        .regex(new RegExp(".*\\d.*"), "One number")
        .regex(new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"), "One special character"),
    confirmpassword: z
        .string()
        .min(6, "Must be at least 8 characters in length")
        .regex(new RegExp(".*[A-Z].*"), "One uppercase character")
        .regex(new RegExp(".*[a-z].*"), "One lowercase character")
        .regex(new RegExp(".*\\d.*"), "One number")
        .regex(new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"), "One special character"),
});
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
    description: "Create an account and discover the worlds best UI component framework.",
    avatarNumber: "+ 2",
    subDescription: "Join 10,000+ users",
    license: " © 2023 gluestack UI. All rights reserved.",
};
const AuthLayout = (props) => {
    return (<SafeAreaView className="w-full h-full">
      <HStack className="w-full h-full bg-background-0">
        <VStack className="w-0 hidden md:flex md:h-full bg-primary-500 md:min-w-[50%]  justify-between p-7" space="md">
          <VStack space="md" className="justify-center flex-1">
            <Heading className="md:w-[98%] text-typography-50 font-bold" size="4xl">
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
            return (<Avatar className="flex lg:hidden" key={index} size="md">
                        <AvatarImage source={avatar} className="border-2 border-primary-500"/>
                      </Avatar>);
        })}
                  {ProfileAvatars.map((avatar, index) => {
            return (<Avatar className="hidden lg:flex" key={index} size="md">
                        <AvatarImage source={avatar} className="border-2 border-primary-500"/>
                      </Avatar>);
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
    </SafeAreaView>);
};
const CreatePasswordWithLeftBackground = () => {
    const { control, handleSubmit, reset, formState: { errors }, } = useForm({
        resolver: zodResolver(createPasswordSchema),
    });
    const toast = useToast();
    const onSubmit = (data) => {
        if (data.password === data.confirmpassword) {
            toast.show({
                placement: "bottom right",
                render: ({ id }) => {
                    return (<Toast nativeID={id} variant="accent" action="success">
              <ToastTitle>Success</ToastTitle>
            </Toast>);
                },
            });
            reset();
        }
        else {
            toast.show({
                placement: "bottom right",
                render: ({ id }) => {
                    return (<Toast nativeID={id} variant="accent" action="error">
              <ToastTitle>Passwords do not match</ToastTitle>
            </Toast>);
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
    const router = useRouter();
    return (<>
      <VStack className="md:items-center" space="xs">
        <Pressable onPress={() => {
            router.back();
        }}>
          <Icon as={ArrowLeftIcon} className="md:hidden stroke-background-800" size="xl"/>
        </Pressable>
        <Heading className="md:text-center" size="3xl">
          Create new password
        </Heading>
        <Text className="md:text-center">
          Your new password must be different from previously used passwords{" "}
        </Text>
      </VStack>
      <VStack className="w-full">
        <VStack space="xl" className="w-full">
          <FormControl isInvalid={!!errors.password}>
            <FormControlLabel>
              <FormControlLabelText>Password</FormControlLabelText>
            </FormControlLabel>
            <Controller defaultValue="" name="password" control={control} rules={{
            validate: async (value) => {
                try {
                    await createPasswordSchema.parseAsync({
                        password: value,
                    });
                    return true;
                }
                catch (error) {
                    return error.message;
                }
            },
        }} render={({ field: { onChange, onBlur, value } }) => (<Input>
                  <InputField className="text-sm" placeholder="Password" value={value} onChangeText={onChange} onBlur={onBlur} onSubmitEditing={handleKeyPress} returnKeyType="done" type={showPassword ? "text" : "password"}/>
                  <InputSlot onPress={handleState} className="pr-3">
                    <InputIcon as={showPassword ? EyeIcon : EyeOffIcon}/>
                  </InputSlot>
                </Input>)}/>
            <FormControlError>
              <FormControlErrorIcon size="sm" as={AlertTriangle}/>
              <FormControlErrorText>
                {errors?.password?.message}
              </FormControlErrorText>
            </FormControlError>
            <FormControlLabel>
              <FormControlLabelText className="text-typography-500">
                Must be atleast 8 characters
              </FormControlLabelText>
            </FormControlLabel>
          </FormControl>
          <FormControl isInvalid={!!errors.confirmpassword}>
            <FormControlLabel>
              <FormControlLabelText>Confirm Password</FormControlLabelText>
            </FormControlLabel>
            <Controller defaultValue="" name="confirmpassword" control={control} rules={{
            validate: async (value) => {
                try {
                    await createPasswordSchema.parseAsync({
                        password: value,
                    });
                    return true;
                }
                catch (error) {
                    return error.message;
                }
            },
        }} render={({ field: { onChange, onBlur, value } }) => (<Input>
                  <InputField placeholder="Confirm Password" className="text-sm" value={value} onChangeText={onChange} onBlur={onBlur} onSubmitEditing={handleKeyPress} returnKeyType="done" type={showConfirmPassword ? "text" : "password"}/>

                  <InputSlot onPress={handleConfirmPwState} className="pr-3">
                    <InputIcon as={showConfirmPassword ? EyeIcon : EyeOffIcon}/>
                  </InputSlot>
                </Input>)}/>
            <FormControlError>
              <FormControlErrorIcon size="sm" as={AlertTriangle}/>
              <FormControlErrorText>
                {errors?.confirmpassword?.message}
              </FormControlErrorText>
            </FormControlError>
            <FormControlLabel>
              <FormControlLabelText className="text-typography-500">
                Both passwords must match
              </FormControlLabelText>
            </FormControlLabel>
          </FormControl>
        </VStack>

        <VStack className="mt-7 w-full">
          <Button className="w-full" onPress={handleSubmit(onSubmit)}>
            <ButtonText className="font-medium">Update Password</ButtonText>
          </Button>
        </VStack>
      </VStack>
    </>);
};
export const CreatePassword = () => {
    return (<AuthLayout>
      <CreatePasswordWithLeftBackground />
    </AuthLayout>);
};
