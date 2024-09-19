'use client';
import React from 'react';
import { createTextarea } from '@gluestack-ui/textarea';
import { View, TextInput, Platform } from 'react-native';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import {
  withStyleContext,
  useStyleContext,
} from '@gluestack-ui/nativewind-utils/withStyleContext';
import { withStyleContextAndStates } from '@gluestack-ui/nativewind-utils/withStyleContextAndStates';
import { cssInterop } from 'nativewind';
import { withStates } from '@gluestack-ui/nativewind-utils/withStates';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';

const TextareaWrapper = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentProps<typeof View>
>(({ ...props }, ref) => {
  return <View {...props} ref={ref} />;
});

const SCOPE = 'TEXTAREA';
const UITextarea = createTextarea({
  Root:
    Platform.OS === 'web'
      ? withStyleContext(TextareaWrapper, SCOPE)
      : withStyleContextAndStates(TextareaWrapper, SCOPE),
  Input: Platform.OS === 'web' ? TextInput : withStates(TextInput),
});

cssInterop(TextareaWrapper, { className: 'style' });
cssInterop(UITextarea.Input, {
  className: { target: 'style', nativeStyleToProp: { textAlign: true } },
});

const textareaStyle = tva({
  base: 'w-full h-[100px] border border-background-300 rounded data-[hover=true]:border-outline-400 data-[focus=true]:border-primary-700 data-[focus=true]:data-[hover=true]:border-primary-700 data-[disabled=true]:opacity-40 data-[disabled=true]:bg-background-50 data-[disabled=true]:data-[hover=true]:border-background-300',

  variants: {
    variant: {
      default:
        'data-[focus=true]:border-primary-700 data-[focus=true]:web:ring-1 data-[focus=true]:web:ring-inset data-[focus=true]:web:ring-indicator-primary data-[invalid=true]:border-error-700 data-[invalid=true]:web:ring-1 data-[invalid=true]:web:ring-inset data-[invalid=true]:web:ring-indicator-error data-[invalid=true]:data-[hover=true]:border-error-700 data-[invalid=true]:data-[focus=true]:data-[hover=true]:border-primary-700 data-[invalid=true]:data-[focus=true]:data-[hover=true]:web:ring-1 data-[invalid=true]:data-[focus=true]:data-[hover=true]:web:ring-inset data-[invalid=true]:data-[focus=true]:data-[hover=true]:web:ring-indicator-primary data-[invalid=true]:data-[disabled=true]:data-[hover=true]:border-error-700 data-[invalid=true]:data-[disabled=true]:data-[hover=true]:web:ring-1 data-[invalid=true]:data-[disabled=true]:data-[hover=true]:web:ring-inset data-[invalid=true]:data-[disabled=true]:data-[hover=true]:web:ring-indicator-error ',
    },
    size: {
      sm: '',
      md: '',
      lg: '',
      xl: '',
    },
  },
});

const textareaInputStyle = tva({
  base: 'p-2 web:outline-0 web:outline-none flex-1 color-typography-900 align-text-top placeholder:text-typography-500 web:cursor-text web:data-[disabled=true]:cursor-not-allowed',
  parentVariants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
  },
});

type ITextareaProps = React.ComponentProps<typeof UITextarea> &
  VariantProps<typeof textareaStyle>;

const Textarea = React.forwardRef<
  React.ElementRef<typeof UITextarea>,
  ITextareaProps
>(({ className, variant = 'default', size = 'md', ...props }, ref) => {
  return (
    <UITextarea
      ref={ref}
      {...props}
      className={textareaStyle({ variant, class: className })}
      context={{ size }}
    />
  );
});

type ITextareaInputProps = React.ComponentProps<typeof UITextarea.Input> &
  VariantProps<typeof textareaInputStyle>;

const TextareaInput = React.forwardRef<
  React.ElementRef<typeof UITextarea.Input>,
  ITextareaInputProps
>(({ className, ...props }, ref) => {
  const { size: parentSize } = useStyleContext(SCOPE);

  return (
    <UITextarea.Input
      ref={ref}
      {...props}
      className={textareaInputStyle({
        parentVariants: {
          size: parentSize,
        },
        class: className,
      })}
    />
  );
});

Textarea.displayName = 'Textarea';
TextareaInput.displayName = 'TextareaInput';

export { Textarea, TextareaInput };
