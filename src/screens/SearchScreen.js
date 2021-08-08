import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const searchApi = async (searchTerm) => {
    setLoading(true);
    console.log("hi there");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      // console.log(response.data.businesses);
      setResults(response.data.businesses);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setErrorMsg("Something went wrong!");
    }
  };

  const filterByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  useEffect(() => {
    searchApi("meat");
  }, []);

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      {/* <Text>We have found {results.length} results</Text> */}
      {loading ? (
        <ActivityIndicator
          style={{ flex: 1, justifyContent: "center" }}
          size="large"
          color="#ff0000"
        />
      ) : (
        <ScrollView>
          <ResultsList results={filterByPrice("$")} title="Cost Effective" />
          <ResultsList results={filterByPrice("$$")} title="Bit Pricier" />
          <ResultsList results={filterByPrice("$$$")} title="Big Spender" />
          <ResultsList
            results={filterByPrice("$$$$")}
            title="Extravagant Spender"
          />
        </ScrollView>
      )}
    </>
  );
};
const styles = StyleSheet.create({});
export default SearchScreen;
