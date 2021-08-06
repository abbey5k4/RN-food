import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import ResultsList from "../components/ResultsList" 

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const searchApi = async (searchTerm) => {
    console.log("hi there");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      //   console.log(response.data.businesses);
      setResults(response.data.businesses);
    } catch (err) {
      console.log(err);
      setErrorMsg("Something went wrong!");
    }
  };

    const filterByPrice = (price) => {
        return results.filter((result) => {
            return result.price === price
        })
    }
  useEffect(() => {
    searchApi("pasta");
  }, []);

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList results = {filterByPrice('$')} title="Cost Effective"/>
      <ResultsList results = {filterByPrice('$$')} title="Bit Pricier"/>
      <ResultsList results = {filterByPrice('$$$')} title="Big Spender"/>
      <ResultsList results = {filterByPrice('$$$$')} title="Extravagant Spender"/>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
