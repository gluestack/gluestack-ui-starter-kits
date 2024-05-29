import React from 'react';
export declare const useToast: () => {
    show: (props: import("@gluestack-ui/toast/lib/typescript/types").InterfaceToastProps) => any;
    close: (id: any) => void;
    closeAll: () => void;
    isActive: (id: any) => boolean;
};
export declare const UIToast: import("@gluestack-ui/toast/lib/typescript/types").IToastComponentType<import("react-native").ViewProps, import("react-native").TextProps, import("react-native").TextProps>;
export declare const Toast: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
export declare const ToastTitle: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
export declare const ToastDescription: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
