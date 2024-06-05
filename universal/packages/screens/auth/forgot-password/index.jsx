import { Toast, ToastTitle, useToast } from "@/components/ui/toast";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, FormControlLabel, FormControlLabelText, } from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import { ArrowLeftIcon, Icon } from "@/components/ui/icon";
import { Button, ButtonText } from "@/components/ui/button";
import { Keyboard } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertTriangle } from "lucide-react-native";
import useRouter from "@unitools/router";
import { Pressable } from "@/components/ui/pressable";
import { Image } from "@/components/ui/image";
const forgotPasswordSchema = z.object({
    email: z.string().min(1, "Email is required").email(),
});
const AuthLayout = (props) => {
    return (<SafeAreaView className="w-full h-full">
      <HStack className="w-full h-full bg-background-0">
        <VStack className="relative w-0 hidden md:flex md:h-full md:min-w-[50%] items-center  justify-center p-7" space="md">
          <Image source={require("@/assets/auth/radialGradient.png")} className="h-full w-full absolute inset-0 -z-10" alt="Radial Gradient"/>
          <Image source={require("@/assets/auth/logo.png")} className="h-40 w-40" alt="Gluestack Logo"/>
        </VStack>

        <VStack className="md:items-center md:justify-center w-full md:max-w-[440px] p-9 md:gap-10 gap-16 md:m-auto md:w-1/2">
          {props.children}
        </VStack>
      </HStack>
    </SafeAreaView>);
};
const ForgotPasswordScreen = () => {
    const { control, handleSubmit, reset, formState: { errors }, } = useForm({
        resolver: zodResolver(forgotPasswordSchema),
    });
    const toast = useToast();
    const onSubmit = (_data) => {
        toast.show({
            placement: "bottom right",
            render: ({ id }) => {
                return (<Toast nativeID={id} variant="accent" action="success">
            <ToastTitle>Link Sent Successfully</ToastTitle>
          </Toast>);
            },
        });
        reset();
    };
    const handleKeyPress = () => {
        Keyboard.dismiss();
        handleSubmit(onSubmit)();
    };
    const router = useRouter();
    return (<>
      <VStack className="md:items-center" space="md">
        <Pressable onPress={() => {
            router.back();
        }}>
          <Icon as={ArrowLeftIcon} className="md:hidden stroke-background-800" size="xl"/>
        </Pressable>
        <VStack>
          <Heading className="md:text-center" size="3xl">
            Forgot Password?
          </Heading>
          <Text className="text-sm">
            Enter email ID associated with your account.
          </Text>
        </VStack>
      </VStack>

      <VStack space="xl" className="w-full ">
        <FormControl isInvalid={!!errors?.email} className="w-full">
          <FormControlLabel>
            <FormControlLabelText>Email</FormControlLabelText>
          </FormControlLabel>
          <Controller defaultValue="" name="email" control={control} rules={{
            validate: async (value) => {
                try {
                    await forgotPasswordSchema.parseAsync({ email: value });
                    return true;
                }
                catch (error) {
                    return error.message;
                }
            },
        }} render={({ field: { onChange, onBlur, value } }) => (<Input>
                <InputField placeholder="Enter email" value={value} onChangeText={onChange} onBlur={onBlur} onSubmitEditing={handleKeyPress} returnKeyType="done"/>
              </Input>)}/>
          <FormControlError>
            <FormControlErrorIcon as={AlertTriangle}/>
            <FormControlErrorText>
              {errors?.email?.message}
            </FormControlErrorText>
          </FormControlError>
        </FormControl>
        <Button className="w-full" onPress={handleSubmit(onSubmit)}>
          <ButtonText className="font-medium">Send Link</ButtonText>
        </Button>
      </VStack>
    </>);
};
export const ForgotPassword = () => {
    return (<AuthLayout>
      <ForgotPasswordScreen />
    </AuthLayout>);
};
