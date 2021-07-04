import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import { uniqueId } from "lodash";

export default function App() {
  const [items, setItems] = useState([
    { id: uniqueId(), text: "Milk" },
    { id: uniqueId(), text: "Bread" },
    { id: uniqueId(), text: "Apples" },
    { id: uniqueId(), text: "Chicken" },
    { id: uniqueId(), text: "Pasta" },
    { id: uniqueId(), text: "Water" },
  ]);

  const removeItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} removeItem={removeItem} />
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: "#fff",
  },
});
