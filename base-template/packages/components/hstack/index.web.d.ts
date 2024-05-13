import React from 'react';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
import { hstackStyle } from './styles';
type IHStackProps = React.ComponentProps<'div'> & VariantProps<typeof hstackStyle>;
declare const HStack: React.ForwardRefExoticComponent<Omit<IHStackProps, "ref"> & React.RefAttributes<unknown>>;
export { HStack };
