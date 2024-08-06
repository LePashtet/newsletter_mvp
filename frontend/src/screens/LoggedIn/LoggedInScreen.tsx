import React, { useState } from 'react';
import { View, Button } from 'react-native';
import styles from './LoggedInScreenStyles'; // Adjust the path as needed
import { PopOver } from '../../components/PopOver/PopOver';

export const LoggedInScreen: React.FC = () => {
  const [isPopOverVisible, setPopOverVisible] = useState<boolean>(false);

  const handleOpenPopOver = () => {
    setPopOverVisible(true);
  };

  const handleClosePopOver = () => {
    setPopOverVisible(false);
  };

  const handleSubmitPopOver = () => {
    setPopOverVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Button title="Open PopOver" onPress={handleOpenPopOver} />
      </View>
      {isPopOverVisible && (
        <PopOver onClose={handleClosePopOver} onSubmit={handleSubmitPopOver} />
      )}
    </View>
  );
};
