import React from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
} from "react-native";
import ResultDetail from "./ResultDetail";

const ResultList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultDetail result={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
  },
});

export default ResultList;
