import React from 'react';
import {Modal, View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function NotificationItem() {
  return (
    <TouchableOpacity className="relative bg-[#f9f9f9] dark:bg-[#311167] p-3 rounded-lg shadow-md mb-3">
      <Text className="font-medium dark:text-slate-200">
        Lorem Ipsum Dolor Sit Amet
      </Text>
      <Text className="font-light mt-2 dark:text-slate-200">
        The only notification you need to pay attention, lorem ipsum dolor sit
        amet.
      </Text>
    </TouchableOpacity>
  );
}

export interface ModalNotificationsProps {
  visible: boolean;
  closeModal: () => void;
}

export function ModalNotifications({
  visible,
  closeModal,
}: ModalNotificationsProps) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={closeModal}>
      <SafeAreaView>
        <View className="w-full h-full bg-[#f3f2f8] dark:bg-[#17062a] py-4 px-4">
          <View className="flex flex-row justify-between items-center">
            <Text className="text-xl font-medium text-slate-700 dark:text-white mb-6">
              Notifications
            </Text>
            <TouchableOpacity
              className="bg-[#311167] dark:bg-[#311167] w-6 h-6 flex flex-row justify-center items-center rounded-full"
              onPress={closeModal}>
              <Ionicons name="ios-close-outline" size={20} color="#ffffff" />
            </TouchableOpacity>
          </View>

          <NotificationItem />
          <NotificationItem />
        </View>
      </SafeAreaView>
    </Modal>
  );
}
