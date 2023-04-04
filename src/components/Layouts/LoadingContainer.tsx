import React, {ReactNode} from 'react';
import {View, ActivityIndicator} from 'react-native';

export interface LoadingContainerProps {
  loading: boolean;
  children?: ReactNode;
}

export function LoadingContainer({loading, children}: LoadingContainerProps) {
  if (loading) {
    return (
      <View className=" w-full h-96 px-2 flex flex-col justify-center items-center">
        <ActivityIndicator />
      </View>
    );
  }

  return <>{children}</>;
}
