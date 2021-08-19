import React, { useState, useEffect } from "react";
import { StyleSheet,Image, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import yelp from "../api/yelp";

export const ResultShowScreen = ({ route }) => {
  const [result, setResult] = useState(null);
  const id = route.params.id;

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return  <Image style={styles.image} source={{uri:item}}/>
        }}
      />
    </View>
  );
};
const styles=StyleSheet.create({
    image:{
        height:200,
        width:300
    }
})