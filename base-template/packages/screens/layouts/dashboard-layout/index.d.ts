import React from "react";
type DashboardLayoutProps = {
    scrollable?: boolean;
    displayScreenTitle?: boolean;
    displaySidebar?: boolean;
    displayBackButton?: boolean;
    showIcons?: boolean;
    displaySearchButton?: boolean;
    displayNotificationButton?: boolean;
    displayMenuButton?: boolean;
    displayAlternateMobileHeader?: boolean;
    maxWidth?: number;
    header?: {
        searchbar: boolean;
    };
    mobileHeader?: {
        backButton: boolean;
    };
    title: string;
    subTitle?: string;
    children: React.ReactNode;
    showGroupInfoHeader?: boolean;
    displayBackIcon?: boolean;
    rightPanelMobileHeader?: boolean;
    rightHeaderPanel?: boolean;
};
type MobileHeaderProps = {
    title: string;
    subTitle?: string;
    backButton: boolean;
    rightPanel?: boolean;
};
type HeaderProps = {
    title: string;
    subTitle?: string;
    toggleSidebar: () => void;
    menuButton: boolean;
    searchbar: boolean;
    rightPanel?: boolean;
};
export declare function Header(props: HeaderProps): import("react/jsx-runtime").JSX.Element;
export declare function MobileHeader(props: MobileHeaderProps): import("react/jsx-runtime").JSX.Element;
export default function DashboardLayout({ displayScreenTitle, displaySidebar, scrollable, header, displayBackIcon, maxWidth, mobileHeader, ...props }: DashboardLayoutProps): import("react/jsx-runtime").JSX.Element;
export {};
