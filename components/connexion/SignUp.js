import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
  Dimensions,
} from 'react-native';

const SignUp = ({navigation}) => {
  const goToMain = () => {
    navigation.navigate('Main');
  };

  const goToSignIn = () => {
    navigation.navigate('SignIn');
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
          <Pressable onPress={goToSignIn}>
            <Text style={{color: '#000', fontWeight: 'bold'}}>SIGN IN</Text>
          </Pressable>
          <Text style={{color: '#F08911', fontWeight: 'bold'}}>SIGN UP</Text>
        </View>
        <View>
          <TextInput style={styles.inputConnect} placeholder="Username" />
          <TextInput style={styles.inputConnect} placeholder="Name" />
          <TextInput style={styles.inputConnect} placeholder="Password" />
          <TextInput
            style={styles.inputConnect}
            placeholder="Confirm Password"
          />
          <TextInput style={styles.inputConnect} placeholder="Postal Code" />
        </View>
        <Pressable onPress={goToMain}>
          <Text style={{fontWeight: 'bold', color: '#000'}}>Create</Text>
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
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 30,
  },
  image: {
    resizeMode: 'contain',
    flex: 1,
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
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginBottom: 30,
    width: Dimensions.get('window').width * 0.75,
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

export default SignUp;
