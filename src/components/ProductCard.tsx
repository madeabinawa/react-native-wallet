import React from 'react';
import type {ReactElement} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styled} from 'nativewind';
import dummy from '../assets/images/test.jpg';

export type ProductType = {
  image?: string;
  name: string;
  price: number;
};

export interface ProductCardProps {
  product: ProductType;
  index: number;
}

export default function ProductCard({
  product,
  index,
}: ProductCardProps): ReactElement {
  console.log({product});
  return (
    <TouchableOpacity className={index === 0 ? 'mr-2' : 'mx-2'}>
      <View className="flex flex-col">
        <Image
          className="rounded-xl object-cover w-[25vh] h-[20vh]"
          source={product?.image ?? dummy}
        />

        <View className="my-2">
          <Text className="font-semibold text-lg text-slate-700 ">
            {product.name}
          </Text>

          <Text className="mt-1 font-semibold text-base text-green-300">
            ${product?.price?.toString()}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
