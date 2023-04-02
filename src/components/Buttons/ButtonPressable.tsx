import React from 'react';
import {ActivityIndicator, Pressable, PressableProps, Text} from 'react-native';

export interface ButtonPressableProps extends PressableProps {
  containerClassName?: string;
  textClassName?: string;
  text?: string;
  onPress: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

export function ButtonPressable({
  onPress,
  containerClassName,
  textClassName,
  text,
  isLoading,
  disabled,
  ...rest
}: ButtonPressableProps) {
  return (
    <Pressable
      disabled={isLoading || disabled}
      className={`${containerClassName} bg-[#311167] dark:bg-[#271a3c] h-10 flex flex-row justify-center items-center rounded-lg`}
      onPress={onPress}
      {...rest}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text className={`${textClassName} text-slate-100`}>{text}</Text>
      )}
    </Pressable>
  );
}
