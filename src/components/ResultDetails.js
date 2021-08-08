import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ResultDetails = ({ result }) => {
  return (
    <View style={styles.containerStyle}>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

export default ResultDetails;

const styles = StyleSheet.create({
  containerStyle: {
    marginHorizontal: 15,
  },
  imageStyle: {
    width: 250,
    height: 150,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
});
