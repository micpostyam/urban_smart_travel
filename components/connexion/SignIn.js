import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
} from 'react-native';

const SignIn = ({navigation}) => {
  const goToMain = () => {
    navigation.navigate('Main');
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
        <View style={styles.contNav}>
          <Text style={{color: '#F08911', fontWeight: 'bold'}}>SIGN IN</Text>
          <Pressable onPress={goToSignUp}>
            <Text style={{color: '#000', fontWeight: 'bold'}}>SIGN UP</Text>
          </Pressable>
        </View>
        <View>
          <TextInput style={styles.inputConnect} placeholder="Username" />
          <TextInput style={styles.inputConnect} placeholder="Password" />
        </View>
        <Pressable onPress={goToMain}>
          <Text style={{fontWeight: 'bold', color: '#000'}}>Connect</Text>
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
    justifyContent: 'flex-end',
    paddingBottom: 30,
  },
  image: {
    resizeMode: 'contain',
    flex: 0.6,
    aspectRatio: 1,
  },
  appName: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },
  inputConnect: {
    backgroundColor: '#D9D9D9',
    borderRadius: 85,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2,
    paddingHorizontal: 90,
    marginBottom: 30,
  },
  textBtn: {
    color: '#000',
    fontWeight: 'bold',
  },
  contBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  contNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginBottom: 30,
  },
});

export default SignIn;
