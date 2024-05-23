import React from 'react';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
import { vstackStyle } from './styles';
type IVStackProps = React.ComponentProps<'div'> & VariantProps<typeof vstackStyle>;
declare const VStack: React.ForwardRefExoticComponent<Omit<IVStackProps, "ref"> & React.RefAttributes<unknown>>;
export { VStack };
