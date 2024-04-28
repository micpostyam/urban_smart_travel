import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Profil = () => {
  return (
    <View style={styles.container}>
      <Text>Bonjour</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default Profil;
