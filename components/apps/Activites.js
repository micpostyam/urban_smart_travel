import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, Pressable} from 'react-native';
import {SearchBar} from '@rneui/base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Activites = () => {
  const [search, setSearch] = useState('');

  const updateSearch = e => {
    setSearch(e);
  };

  return (
    <View style={styles.container}>
      <View style={styles.contImg}>
        <Image source={require('../../assets/map.png')} style={styles.image} />
      </View>
      <View style={styles.contSeacrh}>
        <SearchBar
          platform="android"
          placeholder="Recherche"
          onChangeText={updateSearch}
          value={search}
          containerStyle={styles.searchBarCont}
          inputContainerStyle={{height: 20}}
        />
      </View>
      <View style={styles.contDetails}>
        <Text style={styles.titre}>Activités programmées</Text>
        <Text>Aucune activités pour le moment</Text>
      </View>
      <View style={styles.contBtn}>
        <Pressable>
          <Ionicons name="add-circle-sharp" size={70} color={'#9F9F9F'} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9E9E9',
    paddingTop: 50,
  },
  contImg: {
    flex: 0.5,
    alignItems: 'center',
  },
  image: {
    width: '80%',
    flex: 1,
  },
  contSeacrh: {
    alignItems: 'center',
    marginTop: 20,
  },
  contDetails: {
    width: '75%',
    alignSelf: 'center',
    flex: 1,
    marginTop: 20,
  },
  textBtn: {
    color: '#000',
    fontWeight: 'bold',
  },
  contBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  searchBarCont: {
    backgroundColor: '#D9D9D9',
    height: 33,
    width: '75%',
    borderRadius: 85,
  },
  titre: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
});

export default Activites;
