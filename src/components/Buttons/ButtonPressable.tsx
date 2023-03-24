import React from 'react';
import {Pressable, PressableProps, Text} from 'react-native';

export interface ButtonPressableProps extends PressableProps {
  containerClassName?: string;
  textClassName?: string;
  text?: string;
  onPress: () => void;
}

export function ButtonPressable({
  onPress,
  containerClassName,
  textClassName,
  text,
  ...rest
}: ButtonPressableProps) {
  return (
    <Pressable
      className={`${containerClassName} bg-[#311167] dark:bg-[#271a3c] h-10 flex flex-col justify-center items-center rounded-lg`}
      onPress={onPress}
      {...rest}>
      <Text className={`${textClassName} text-slate-100`}>{text}</Text>
    </Pressable>
  );
}
