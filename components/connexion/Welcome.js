import React from 'react';
import {Text, View, StyleSheet, Image, Pressable} from 'react-native';

const Welcome = ({navigation}) => {
  const goToSignIn = () => {
    navigation.navigate('SignIn');
  };

  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <View style={styles.contImg}>
        <Image source={require('../../assets/map.png')} style={styles.image} />
        <Text style={styles.appName}>Urban Smart Travel</Text>
        <Text>Application</Text>
      </View>
      <View style={styles.contBtn}>
        <Pressable style={styles.btnConnect} onPress={goToSignIn}>
          <Text style={styles.textBtn}>Connect</Text>
        </Pressable>
        <Pressable onPress={goToSignUp}>
          <Text style={{color: '#000'}}>
            No account? <Text style={{fontWeight: 'bold'}}>Create one</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contImg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'contain',
    flex: 0.8,
    aspectRatio: 1,
  },
  appName: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },
  btnConnect: {
    backgroundColor: '#D9D9D9',
    borderRadius: 85,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 60,
    elevation: 1,
    marginBottom: 10,
  },
  textBtn: {
    color: '#000',
    fontWeight: 'bold',
  },
  contBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Welcome;
