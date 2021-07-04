import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function AddItem() {
  return (
    <View>
      <TextInput placeholder="Add Item" style={styles.input}></TextInput>
      <TouchableOpacity style={styles.btn}></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
