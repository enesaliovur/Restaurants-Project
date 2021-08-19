import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";

import useResults from "../../hooks/useResults";
import { ResultList } from "../components/ResultList";
import { SearchBar } from "../components/SearchBar";

export const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price == price;
    });
  };
  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />

      <ScrollView>
        <ResultList
          navigation={navigation}
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultList
          navigation={navigation}
          results={filterResultsByPrice("$$")}
          title="Bit Pricler"
        />
        <ResultList
          navigation={navigation}
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </View>
  );
};
