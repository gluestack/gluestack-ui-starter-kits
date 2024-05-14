import React from "react";
// import Sidebar from "@/pro-patterns/components/Sidebar";
import { Platform } from "react-native";
import { VStack } from "@base-template/components/vstack";
import { Box } from "@base-template/components/box";
import { ArrowLeftIcon, Icon } from "@base-template/components/icon";
import { HStack } from "@base-template/components/hstack";
import { Pressable } from "@base-template/components/pressable";
import { Text } from "@base-template/components/text";
import { StatusBar } from "@base-template/components/status-bar";
import { Image } from "@base-template/components/image";
import { ScrollView } from "@base-template/components/scroll-view";
import { KeyboardAvoidingView } from "@base-template/components/keyboard-avoiding-view";
export function Header(props) {
    return (<Box className="px-8 py-3 border-b bg-background-0 border-background-100 ">
      <VStack className="self-center w-full">
        <HStack className="items-center justify-between ">
          <HStack className="items-center" space="md">
            <Pressable>
              <Image 
    // source={
    //   colorMode == 'light'
    //     ? require('../../../../assets/Menu_light.svg')
    //     : require('../../../../assets/Menu_dark.svg')
    // }
    source={require("../../../../assets/Menu_light.svg")} aspectRatio="203/24" size="2xs" alt="gluestack-ui"/>
            </Pressable>

            <Image aspectRatio="203/24" className="w-[212px]" 
    // source={
    //   colorMode == 'light'
    //     ? require('../../../../assets/gluestackUiPro_light.svg')
    //     : require('../../../../assets/gluestackUiPro_dark.svg')
    // }
    size="2xs" source={require("../../../../assets/gluestackUiPro_light.svg")} alt="gluestack-ui"/>
          </HStack>

          <HStack className="items-center" space="sm">
            <Image aspectRatio="203/24" size="2xs" source={require("../../../../assets/Search_dark.svg")} alt="gluestack-ui" className="hidden md:flex"/>
            <Image aspectRatio="203/24" size="2xs" source={require("../../../../assets/pannel.png")} alt="gluestack-ui"/>
          </HStack>
        </HStack>
      </VStack>
    </Box>);
}
function MainContent(props) {
    return (<VStack className="flex-1 w-full" nativeID="MainContent" style={{
            maxWidth: props.maxWidth,
        }}>
      {props.displayScreenTitle && (<Box className="hidden md:flex">
          <HStack className="mb-4 items-center" space="md">
            {props.displayBackIcon ? (<Pressable>
                <Icon as={ArrowLeftIcon} className="pt-0.5 stroke-typography-800 "/>
              </Pressable>) : null}
            <Box>
              <Text className="text-lg font-medium  text-typography-800">
                {props.title}
              </Text>
              {props.subTitle ? (<Text className="text-sm    text-typography-800">
                  {props.subTitle}
                </Text>) : (<></>)}
            </Box>
          </HStack>
        </Box>)}
      {props.children}
    </VStack>);
}
export function MobileHeader(props) {
    return (<Box className="px-1 py-4  bg-primary-500 border-background-200">
      <HStack space="sm">
        <HStack className="flex-1 flex  justify-between items-center" space="sm">
          <>
            <HStack className="items-center" space="xs">
              {props.backButton && (<Icon as={ArrowLeftIcon} size="md" className="m-2 stroke-typography-50 "/>)}
              <VStack>
                <Text className="text-typography-50  text-lg">
                  {props.title}
                </Text>
                {props.subTitle ? (<Text className="text-typography-50  text-sm ">
                    {props.subTitle}
                  </Text>) : undefined}
              </VStack>
            </HStack>
          </>
        </HStack>
      </HStack>
    </Box>);
}
export default function DashboardLayout({ displayScreenTitle = true, displaySidebar = true, scrollable = true, header = {
    searchbar: false,
}, displayBackIcon = true, maxWidth = 1016, mobileHeader = {
    backButton: true,
}, ...props }) {
    const [isSidebarVisible, setIsSidebarVisible] = React.useState(true);
    function toggleSidebar() {
        setIsSidebarVisible(!isSidebarVisible);
    }
    const style = Platform.OS === "web"
        ? {
            overflow: "hidden",
        }
        : "";
    return (<>
      <Box style={style} className="h-full">
        <StatusBar translucent className="bg-inherit" barStyle="light-content"/>

        <VStack className="flex-1 bg-background-50 ">
          <Box className="md:hidden">
            <MobileHeader title={props.title} subTitle={props.subTitle} backButton={mobileHeader.backButton} rightPanel={props.rightPanelMobileHeader}/>
          </Box>
          <Box className="hidden md:flex ">
            <Header toggleSidebar={toggleSidebar} title={props.title} subTitle={props.subTitle} menuButton={displaySidebar} searchbar={header.searchbar} rightPanel={props.rightHeaderPanel}/>
          </Box>

          <VStack className="flex-1 md:flex-row  ">
            {/* {isSidebarVisible && displaySidebar && Platform.OS === "web" && (
          <Box className="hidden md:flex  ">
            <Sidebar />
          </Box>
        )} */}

            <Box className="flex-1 hidden md:flex ">
              {Platform.OS === "web" ? (<ScrollView className=" p-8 " contentContainerStyle={{
                alignItems: "center",
                flexGrow: 1,
            }} showsVerticalScrollIndicator={false}>
                  <MainContent {...props} displayScreenTitle={displayScreenTitle} maxWidth={maxWidth} displayBackIcon={displayBackIcon}/>
                </ScrollView>) : (<Box className="flex-1 items-center">
                  <MainContent {...props} maxWidth={maxWidth}/>
                </Box>)}
            </Box>
            {scrollable ? (<Box className="flex md:hidden">
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
                flexGrow: 1,
            }}>
                  <KeyboardAvoidingView className="flex-1">
                    <MainContent {...props} displayScreenTitle={displayScreenTitle}/>
                  </KeyboardAvoidingView>
                </ScrollView>
              </Box>) : (<Box className="flex-1 md:hidden">
                <MainContent {...props} displayScreenTitle={displayScreenTitle}/>
              </Box>)}
          </VStack>
        </VStack>
      </Box>
    </>);
}
