import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import ComingSoonModal from '../components/ComingSoonModal';

const HistoryScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const navigation = useNavigation<any>();

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <ComingSoonModal isModalVisible={isModalVisible} closeModal={closeModal} featureName='Riwayat'/>
    </SafeAreaView>
  )
}

export default HistoryScreen