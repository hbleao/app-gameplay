import React from 'react';
import { View, Modal, TouchableWithoutFeedback } from 'react-native';
import { Background } from '../Background';

import { styles } from './styles';

import { ModalViewProps } from './types';

export function ModalView({ children, closeModal, ...rest }: ModalViewProps) {

  return (
    <Modal 
      transparent
      animationType='slide'
      statusBarTranslucent
      {...rest}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              <View style={styles.bar} />
              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}
