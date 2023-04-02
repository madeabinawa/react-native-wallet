import React, {useState, ReactNode} from 'react';
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDarkMode} from 'src/hooks';

export interface InputProps extends Omit<TextInputProps, 'className'> {
  placeholder?: string;
  secureTextEntry?: boolean;
  containerClassName?: string;
  inputClassName?: string;
  value?: string;
  defaultValue?: string;
  onChangeText?: (text: string) => void;
  onClearInput?: () => void;
  disableClearInput?: boolean;
  leadingIcon?: ReactNode;
}

export function Input({
  placeholder = '',
  secureTextEntry,
  containerClassName,
  inputClassName,
  value,
  defaultValue,
  onChangeText,
  onClearInput,
  disableClearInput,
  leadingIcon,
  ...rest
}: InputProps) {
  const {isDarkMode} = useDarkMode();
  const isVisibleClearInput =
    !disableClearInput &&
    onClearInput &&
    (value?.length || defaultValue?.length)
      ? 'visible'
      : 'hidden';

  const [secureText, setSecureText] = useState(secureTextEntry);

  return (
    <View
      className={`${containerClassName} w-full px-8 bg-slate-200 dark:bg-[#311167] flex flex-row justify-around items-center rounded-lg`}>
      <View className="flex flex-row justify-center items-center ">
        {leadingIcon}

        <TextInput
          className={`${inputClassName} w-full h-10 p-2 text-slate-700 dark:text-white `}
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureText}
          {...rest}
        />
      </View>

      <TouchableOpacity
        className="bg-slate-600 rounded-full w-5 flex justify-center items-center"
        onPress={onClearInput}>
        <View className={isVisibleClearInput}>
          <Ionicons name="ios-close-outline" size={20} color="#ffffff" />
        </View>
      </TouchableOpacity>

      {secureTextEntry && (
        <TouchableOpacity onPress={() => setSecureText(prev => !prev)}>
          <Text>
            <Ionicons
              name={secureText ? 'ios-eye-off-outline' : 'ios-eye-outline'}
              size={20}
              color={isDarkMode ? '#ffffff' : '#b3b3b3'}
            />
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
