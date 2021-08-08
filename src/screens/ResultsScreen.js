import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const [fetchedResults, setFetchedResults] = useState(null);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setFetchedResults(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  // if (Object.keys(fetchedResults.length === 0)) {
  //     return <View></View>;
  // }
  if (!fetchedResults) {
    return null;
  }
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>{fetchedResults.name}</Text>
      <FlatList
        data={fetchedResults.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imageStyle} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

export default ResultsScreen;

const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: 10,
  },
  imageStyle: {
    width: 300,
    height: 200,
    marginVertical: 10,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
});
