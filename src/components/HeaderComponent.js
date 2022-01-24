import React from "react";
import { StyleSheet, View, Text,Image,TextInput } from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";

const Header = ({ title }) => (
  <View style={styles.headerContainer}>

 
<View style={styles.searchContainer}>
          <FontAwesome name="search" size={25} style={{ marginLeft: 20, color: "#B7B7B7" }} />
          <TextInput style={styles.inputtxt} placeholder="Bạn tìm gì hôm nay?" />
        </View>
    <View style={styles.cartContainer}>
      
      <FontAwesome name="shopping-cart" size={HEADER_ICON_SIZE} color="#fff" />
    </View>
  </View>
);

export default Header;

const HEADER_ICON_SIZE = 24;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    paddingTop: 20,
    backgroundColor: "#1e88e5",
    justifyContent: "space-between",
    paddingBottom: 12,
  },
  cartContainer: {
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  cartIcon: {
    width: HEADER_ICON_SIZE,
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
  },
  inputContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 2,
  },
  searchContainer: {
    height: 45,
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',

  },
  inputtxt: {
    marginLeft: 10,
    color: "black",
  },
});
