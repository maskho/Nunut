import {View, Text, Modal, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {Button} from '@rneui/themed';
import styles from '../constants/styles';

interface Props {
  isModalVisible: boolean;
  closeModal: () => void;
  featureName?: string;
}

const ComingSoonModal: React.FC<Props> = ({
  isModalVisible,
  closeModal,
  featureName = 'ini',
}) => {
  return (
    <Modal visible={isModalVisible} animationType="fade" transparent={true}>
      <View
        style={tw`flex-1 items-center justify-center bg-gray-500 bg-opacity-80`}>
        <View
          style={[
            tw`bg-blue-500 border-2 rounded-md p-4 w-11/12`,
            styles.shadow,
          ]}>
          <Text style={tw`text-xl font-bold mb-4 text-center`}>
            Segera Hadir!
          </Text>
          <Text style={tw`text-base text-center mb-4`}>
            Kami sedang bekerja keras untuk menghadirkan fitur {featureName}.
            Tunggu update berikutnya ya!
          </Text>
          <TouchableOpacity
            onPress={closeModal}
            style={[
              tw`flex flex-row justify-center rounded-md border-2 bg-yellow-500 p-2.5 items-center mx-10`,
              styles.shadow,
            ]}>
            <Text style={tw` text-lg font-bold ml-2`}>Tutup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ComingSoonModal;
