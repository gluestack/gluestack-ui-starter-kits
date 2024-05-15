import "react";
import { Box } from "@base-template/components/box";
import { StatusBar } from "@base-template/components/status-bar";
import { ScrollView } from "@base-template/components/scroll-view";
import { VStack } from "@base-template/components/vstack";
import { KeyboardAvoidingView } from "@base-template/components/keyboard-avoiding-view";
export default function GuestLayout(props) {
    return (<KeyboardAvoidingView style={{ flex: 1 }}>
      <Box className={` web:overflow-hidden web:h-[100vh] w-100vw h-full`}>
        <StatusBar translucent className="bg-inherit" barStyle="light-content"/>
        <ScrollView className="flex-1 bg-primary-500 md:bg-primary-900 md:p-8 " contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
        }} bounces={false}>
          <VStack className="md:flex-row grow md:grow-0 w-full overflow-hidden md:max-w-[1016px] md:rounded-xl">
            {props.children}
          </VStack>
        </ScrollView>
      </Box>
    </KeyboardAvoidingView>);
}
