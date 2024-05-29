import React from 'react';
import { Text, View } from 'react-native';
type ITableHeadProps = React.ComponentProps<typeof View | typeof Text> & {
    useRNView?: boolean;
};
type ITableDataProps = React.ComponentProps<typeof View | typeof Text> & {
    useRNView?: boolean;
};
declare const Table: React.ForwardRefExoticComponent<Omit<import("@expo/html-elements/build/primitives/View").WebViewProps & Omit<import("react-native").ViewProps & React.ClassAttributes<typeof View>, "style">, "ref"> & React.RefAttributes<unknown>>;
declare const TableHeader: React.ForwardRefExoticComponent<Omit<import("@expo/html-elements/build/primitives/View").WebViewProps & Omit<import("react-native").ViewProps & React.ClassAttributes<typeof View>, "style">, "ref"> & React.RefAttributes<unknown>>;
declare const TableBody: React.ForwardRefExoticComponent<Omit<import("@expo/html-elements/build/primitives/View").WebViewProps & Omit<import("react-native").ViewProps & React.ClassAttributes<typeof View>, "style">, "ref"> & React.RefAttributes<unknown>>;
declare const TableFooter: React.ForwardRefExoticComponent<Omit<import("@expo/html-elements/build/primitives/View").WebViewProps & Omit<import("react-native").ViewProps & React.ClassAttributes<typeof View>, "style">, "ref"> & React.RefAttributes<unknown>>;
declare const TableHead: React.ForwardRefExoticComponent<ITableHeadProps & React.RefAttributes<unknown>>;
declare const TableRow: React.ForwardRefExoticComponent<Omit<import("@expo/html-elements/build/primitives/View").WebViewProps & Omit<import("react-native").ViewProps & React.ClassAttributes<typeof View>, "style">, "ref"> & React.RefAttributes<unknown>>;
declare const TableData: React.ForwardRefExoticComponent<ITableDataProps & React.RefAttributes<unknown>>;
declare const TableCaption: React.ForwardRefExoticComponent<Omit<Omit<import("react-native").TextProps & React.ClassAttributes<typeof Text>, "style"> & import("@expo/html-elements/build/primitives/Text").WebTextProps, "ref"> & React.RefAttributes<unknown>>;
export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableData, TableCaption, };
