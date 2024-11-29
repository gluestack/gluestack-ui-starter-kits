'use client';
import { Text, View } from 'react-native';
import React from 'react';
import { createFormControl } from '@gluestack-ui/form-control';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import {
  withStyleContext,
  useStyleContext,
} from '@gluestack-ui/nativewind-utils/withStyleContext';
import { cssInterop } from 'nativewind';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
import { PrimitiveIcon, UIIcon } from '@gluestack-ui/icon';

const SCOPE = 'FORM_CONTROL';

const formControlStyle = tva({
  base: 'flex flex-col',
  variants: {
    size: {
      sm: '',
      md: '',
      lg: '',
    },
  },
});

const formControlErrorIconStyle = tva({
  base: 'text-error-700 fill-none',
  variants: {
    size: {
      '2xs': 'h-3 w-3',
      'xs': 'h-3.5 w-3.5',
      'sm': 'h-4 w-4',
      'md': 'h-[18px] w-[18px]',
      'lg': 'h-5 w-5',
      'xl': 'h-6 w-6',
    },
  },
});

const formControlErrorStyle = tva({
  base: 'flex flex-row justify-start items-center mt-1 gap-1',
});

const formControlErrorTextStyle = tva({
  base: 'text-error-700',
  variants: {
    isTruncated: {
      true: 'web:truncate',
    },
    bold: {
      true: 'font-bold',
    },
    underline: {
      true: 'underline',
    },
    strikeThrough: {
      true: 'line-through',
    },
    size: {
      '2xs': 'text-2xs',
      'xs': 'text-xs',
      'sm': 'text-sm',
      'md': 'text-base',
      'lg': 'text-lg',
      'xl': 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
    },
    sub: {
      true: 'text-xs',
    },
    italic: {
      true: 'italic',
    },
    highlight: {
      true: 'bg-yellow-500',
    },
  },
});

const formControlHelperStyle = tva({
  base: 'flex flex-row justify-start items-center mt-1',
});

const formControlHelperTextStyle = tva({
  base: 'text-typography-500',
  variants: {
    isTruncated: {
      true: 'web:truncate',
    },
    bold: {
      true: 'font-bold',
    },
    underline: {
      true: 'underline',
    },
    strikeThrough: {
      true: 'line-through',
    },
    size: {
      '2xs': 'text-2xs',
      'xs': 'text-xs',
      'sm': 'text-xs',
      'md': 'text-sm',
      'lg': 'text-base',
      'xl': 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
    },
    sub: {
      true: 'text-xs',
    },
    italic: {
      true: 'italic',
    },
    highlight: {
      true: 'bg-yellow-500',
    },
  },
});

const formControlLabelStyle = tva({
  base: 'flex flex-row justify-start items-center mb-1',
});

const formControlLabelTextStyle = tva({
  base: 'font-medium text-typography-900',
  variants: {
    isTruncated: {
      true: 'web:truncate',
    },
    bold: {
      true: 'font-bold',
    },
    underline: {
      true: 'underline',
    },
    strikeThrough: {
      true: 'line-through',
    },
    size: {
      '2xs': 'text-2xs',
      'xs': 'text-xs',
      'sm': 'text-sm',
      'md': 'text-base',
      'lg': 'text-lg',
      'xl': 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
    },
    sub: {
      true: 'text-xs',
    },
    italic: {
      true: 'italic',
    },
    highlight: {
      true: 'bg-yellow-500',
    },
  },
});

const formControlLabelAstrickStyle = tva({
  base: 'font-medium text-typography-900',
  variants: {
    isTruncated: {
      true: 'web:truncate',
    },
    bold: {
      true: 'font-bold',
    },
    underline: {
      true: 'underline',
    },
    strikeThrough: {
      true: 'line-through',
    },
    size: {
      '2xs': 'text-2xs',
      'xs': 'text-xs',
      'sm': 'text-sm',
      'md': 'text-base',
      'lg': 'text-lg',
      'xl': 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
    },
    sub: {
      true: 'text-xs',
    },
    italic: {
      true: 'italic',
    },
    highlight: {
      true: 'bg-yellow-500',
    },
  },
});

type IFormControlLabelAstrickProps = React.ComponentPropsWithoutRef<
  typeof Text
> &
  VariantProps<typeof formControlLabelAstrickStyle>;

const FormControlLabelAstrick = React.forwardRef<
  React.ElementRef<typeof Text>,
  IFormControlLabelAstrickProps
>(({ className, ...props }, ref) => {
  const { size: parentSize } = useStyleContext(SCOPE);

  return (
    <Text
      ref={ref}
      className={formControlLabelAstrickStyle({
        parentVariants: { size: parentSize },
        class: className,
      })}
      {...props}
    />
  );
});

export const UIFormControl = createFormControl({
  Root: withStyleContext(View, SCOPE),
  Error: View,
  ErrorText: Text,
  ErrorIcon: UIIcon,
  Label: View,
  LabelText: Text,
  LabelAstrick: FormControlLabelAstrick,
  Helper: View,
  HelperText: Text,
});

cssInterop(PrimitiveIcon, {
  className: {
    target: 'style',
    nativeStyleToProp: {
      height: true,
      width: true,
      fill: true,
      color: true,
      stroke: true,
    },
  },
});

type IFormControlProps = React.ComponentProps<typeof UIFormControl> &
  VariantProps<typeof formControlStyle>;

const FormControl = React.forwardRef<
  React.ElementRef<typeof UIFormControl>,
  IFormControlProps
>(({ className, size = 'md', ...props }, ref) => {
  return (
    <UIFormControl
      ref={ref}
      className={formControlStyle({ size, class: className })}
      {...props}
      context={{ size }}
    />
  );
});

type IFormControlErrorProps = React.ComponentProps<typeof UIFormControl.Error> &
  VariantProps<typeof formControlErrorStyle>;

const FormControlError = React.forwardRef<
  React.ElementRef<typeof UIFormControl.Error>,
  IFormControlErrorProps
>(({ className, ...props }, ref) => {
  return (
    <UIFormControl.Error
      ref={ref}
      className={formControlErrorStyle({ class: className })}
      {...props}
    />
  );
});

type IFormControlErrorTextProps = React.ComponentProps<
  typeof UIFormControl.Error.Text
> &
  VariantProps<typeof formControlErrorTextStyle>;

const FormControlErrorText = React.forwardRef<
  React.ElementRef<typeof UIFormControl.Error.Text>,
  IFormControlErrorTextProps
>(({ className, size, ...props }, ref) => {
  const { size: parentSize } = useStyleContext(SCOPE);
  return (
    <UIFormControl.Error.Text
      className={formControlErrorTextStyle({
        parentVariants: { size: parentSize },
        size,
        class: className,
      })}
      ref={ref}
      {...props}
    />
  );
});

type IFormControlErrorIconProps = React.ComponentProps<
  typeof UIFormControl.Error.Icon
> &
  VariantProps<typeof formControlErrorIconStyle>;
const FormControlErrorIcon = React.forwardRef<
  React.ElementRef<typeof UIFormControl.Error.Icon>,
  IFormControlErrorIconProps
>(({ className, size, ...props }, ref) => {
  const { size: parentSize } = useStyleContext(SCOPE);

  if (typeof size === 'number') {
    return (
      <UIFormControl.Error.Icon
        ref={ref}
        {...props}
        className={formControlErrorIconStyle({ class: className })}
        size={size}
      />
    );
  } else if (
    (props.height !== undefined || props.width !== undefined) &&
    size === undefined
  ) {
    return (
      <UIFormControl.Error.Icon
        ref={ref}
        {...props}
        className={formControlErrorIconStyle({ class: className })}
      />
    );
  }
  return (
    <UIFormControl.Error.Icon
      className={formControlErrorIconStyle({
        parentVariants: { size: parentSize },
        size,
        class: className,
      })}
      {...props}
    />
  );
});

type IFormControlLabelProps = React.ComponentProps<typeof UIFormControl.Label> &
  VariantProps<typeof formControlLabelStyle>;

const FormControlLabel = React.forwardRef<
  React.ElementRef<typeof UIFormControl.Label>,
  IFormControlLabelProps
>(({ className, ...props }, ref) => {
  return (
    <UIFormControl.Label
      ref={ref}
      className={formControlLabelStyle({ class: className })}
      {...props}
    />
  );
});

type IFormControlLabelTextProps = React.ComponentProps<
  typeof UIFormControl.Label.Text
> &
  VariantProps<typeof formControlLabelTextStyle>;

const FormControlLabelText = React.forwardRef<
  React.ElementRef<typeof UIFormControl.Label.Text>,
  IFormControlLabelTextProps
>(({ className, size, ...props }, ref) => {
  const { size: parentSize } = useStyleContext(SCOPE);

  return (
    <UIFormControl.Label.Text
      className={formControlLabelTextStyle({
        parentVariants: { size: parentSize },
        size,
        class: className,
      })}
      ref={ref}
      {...props}
    />
  );
});

type IFormControlHelperProps = React.ComponentProps<
  typeof UIFormControl.Helper
> &
  VariantProps<typeof formControlHelperStyle>;

const FormControlHelper = React.forwardRef<
  React.ElementRef<typeof UIFormControl.Helper>,
  IFormControlHelperProps
>(({ className, ...props }, ref) => {
  return (
    <UIFormControl.Helper
      ref={ref}
      className={formControlHelperStyle({
        class: className,
      })}
      {...props}
    />
  );
});

type IFormControlHelperTextProps = React.ComponentProps<
  typeof UIFormControl.Helper.Text
> &
  VariantProps<typeof formControlHelperTextStyle>;

const FormControlHelperText = React.forwardRef<
  React.ElementRef<typeof UIFormControl.Helper.Text>,
  IFormControlHelperTextProps
>(({ className, size, ...props }, ref) => {
  const { size: parentSize } = useStyleContext(SCOPE);

  return (
    <UIFormControl.Helper.Text
      className={formControlHelperTextStyle({
        parentVariants: { size: parentSize },
        size,
        class: className,
      })}
      ref={ref}
      {...props}
    />
  );
});

FormControl.displayName = 'FormControl';
FormControlError.displayName = 'FormControlError';
FormControlErrorText.displayName = 'FormControlErrorText';
FormControlErrorIcon.displayName = 'FormControlErrorIcon';
FormControlLabel.displayName = 'FormControlLabel';
FormControlLabelText.displayName = 'FormControlLabelText';
FormControlLabelAstrick.displayName = 'FormControlLabelAstrick';
FormControlHelper.displayName = 'FormControlHelper';
FormControlHelperText.displayName = 'FormControlHelperText';

export {
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlErrorIcon,
  FormControlLabel,
  FormControlLabelText,
  FormControlLabelAstrick,
  FormControlHelper,
  FormControlHelperText,
};
