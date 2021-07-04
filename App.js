import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { uniqueId } from "lodash";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";

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

  const addItem = (text) => {
    setItems((prevItems) => {
      return [{ id: uniqueId(), text }, ...prevItems];
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
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
