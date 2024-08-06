import React from 'react';
import { Modal, View, Text, Button } from 'react-native';
import styles from './PopOverStyles';

interface PopOverProps {
  onClose: () => void;
  onSubmit: () => void;
}

export const PopOver: React.FC<PopOverProps> = ({ onClose, onSubmit }) => {
  return (
    <Modal transparent={true} animationType="slide">
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text>PopOver Content</Text>
          <Button title="Submit" onPress={onSubmit} />
          <Button title="Close" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};
