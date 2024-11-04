import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

export interface InputComplexeProps extends Omit<TextInputProps, 'style'> {
  className?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  isNumeric?: boolean;
  maxDecimals?: number;
  maxValue?: number;
}

const InputComplexe = React.forwardRef<TextInput, InputComplexeProps>(
  (
    {
      className,
      value,
      onChangeText,
      placeholder,
      isNumeric,
      maxDecimals = 8,
      maxValue,
      ...props
    }: InputComplexeProps & object,
    ref
  ) => {
    const handleChangeText = (text: string) => {
      if (!onChangeText) return;

      if (isNumeric) {
        // Replace comma with period and remove any non-numeric characters except decimal point
        let formattedText = text.replace(/,/g, '.').replace(/[^0-9.]/g, '');

        // Ensure only one decimal point
        const decimalPoints = formattedText.match(/\./g)?.length || 0;
        if (decimalPoints > 1) {
          const firstDecimalIndex = formattedText.indexOf('.');
          formattedText =
            formattedText.slice(0, firstDecimalIndex + 1) +
            formattedText.slice(firstDecimalIndex + 1).replace(/\./g, '');
        }

        // Handle decimal places
        if (formattedText.includes('.')) {
          const [whole, decimal] = formattedText.split('.');
          formattedText = `${whole}.${decimal.slice(0, maxDecimals)}`;
        }

        // Check maximum value if specified
        if (maxValue !== undefined) {
          const numValue = parseFloat(formattedText);
          if (numValue > maxValue) {
            formattedText = maxValue.toString();
          }
        }

        onChangeText(formattedText);
      } else {
        onChangeText(text);
      }
    };

    return (
      <TextInput
        ref={ref}
        value={value}
        onChangeText={handleChangeText}
        placeholder={placeholder}
        keyboardType={isNumeric ? 'decimal-pad' : 'default'}
        className={`flex h-24 w-full items-start justify-start rounded-xl border-2 bg-white px-3 pb-8 text-2xl placeholder:text-xl placeholder:text-gray-300 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        style={{ fontFamily: 'Lexend_700Bold' }}
        {...props}
      />
    );
  }
);

InputComplexe.displayName = 'Input';

export { InputComplexe };
