import React, { useState } from "react";
import { StyleSheet,navigate, Text, TextInput, StatusBar, TouchableOpacity, View, ScrollView, Image, SafeAreaView, Dimensions, Touchable, FlatList } from "react-native";



import FontAwesome from "react-native-vector-icons/FontAwesome";
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeSectionComponent from "../components/HomeSectionComponents";
const freeship = require("../assets/freeship.png");
const tikilogo = require("../assets/tikilogo.png");
const width = Dimensions.get('window').width / 2 - 5;
import product from "../components/product";
import Slider from "../components/slider";



const HomeScreen = ({ navigation}) => {
  const [catergoryIndex, setCategoryIndex] = React.useState(0);
  const categories = ['Thịt, Rau Củ', 'Bách Hoá', 'Nhà Cửa', 'Điện Tử'];
  
  const Categorylist = () => {
    return (
      <View style={styles.CategoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => setCategoryIndex(index)} activeOpacity={0.8}>
            <Text style={[styles.CategoryText, catergoryIndex == index && styles.categoryTextSelected]}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  const Card = ({ productt }) => {
    return (
      
      <TouchableOpacity onPress={() => navigation.navigate('Detail',productt)}>
        <View style={styles.card}>
          <View >
            <View style={{ alignItems: 'center', height: 160, marginBottom: 10, }}>
              <Image
                source={productt.img}
                style={{ flex: 1, resizeMode: 'contain', }}
              />
            </View>
            <Text ellipsizeMode='tail' numberOfLines={2} >{productt.name}</Text>
            <Text style={{
              fontWeight: "bold",
              color: "red",
  
            }}>{productt.price} đ</Text>
          </View>
  
  
        </View>
      </TouchableOpacity>
    );
  };
  searchname=(texToSearch)=>{
    alert(texToSearch)
  }
  return (
    <View style={styles.screenContainer} >

      <View style={styles.headerContainer} paddingHorizontal={12} >
        <Image source={freeship} />
        <Image source={tikilogo} marginLeft={50} marginRight={70} />
        <FontAwesome name="bell" size={28} color="#fff" />

        <FontAwesome name="shopping-cart" size={28} color="#fff" />
      </View>
      <View style={styles.headerContainer}>
        <View style={styles.searchContainer}>
          <FontAwesome name="search" size={25} style={{ marginLeft: 20, color: "#B7B7B7" }} />
          <TextInput style={styles.inputtxt} placeholder="Bạn tìm gì hôm nay?" onChangeText={text=>this.searchname(text)} />
        </View>
      </View>
      <View style={{ backgroundColor: '#0232ad' }}>
        <Categorylist />
      </View>
      {/*  */}
      <View style={styles.headerContainer}>
        <View style={styles.bodyContainer}>
          <ScrollView >
            <Slider/>
            <HomeSectionComponent />
            <View style={{ backgroundColor: "#fff", borderRadius: 10, }}>
              <View style={{ height: 30 }} />
              <FlatList
                columnWrapperStyle={{ justifyContent: "space-between" }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  marginTop: 10,
                  paddingBottom: 50,
                }}
                numColumns={2}
                data={product}
                renderItem={({ item }) => <Card productt={item} />} />
            </View>
          </ScrollView>

        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 4,
    backgroundColor: '#0232ad',
  },
  CategoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,

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
  CategoryText: {
    fontSize: 16,
    color: "#fff",
  },
  categoryTextSelected: {
    color: "#fff",
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: "#fff",
  },
  card: {
    height: 225,
    backgroundColor: "#fff",
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,

  },
});
export default HomeScreen;
