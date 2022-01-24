import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";

const { width } = Dimensions.get("window");
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { dummyData } from "../components/Data";
const item_image = require("../assets/item_image.png");




const WITDH= Dimensions.get('window').width;
const HEIGHT= Dimensions.get('window').height;


const ProductItem = ({ image, name, price }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={image} style={styles.itemImage} />
      <Text styles={styles.itemName} numberOfLines={2}>
        {name}
      </Text>
      <Text styles={styles.itemPrice}>{price}</Text>
    </View>
  );
};

const HomeSectionComponent = () => {
  const [imgActive,setimgActive]=useState(0);


  return (
    <View style={styles.sectionContainer}>     
      <View style={styles.listItemContainer}>
        <View  style={styles.saletext}>
        <Text  style={styles.saletext1}>Giá Sốc Hôm Nay</Text>
        </View>
      <ScrollView horizontal={true} >
      
        
        <View style={styles.listItem}>
          {[
            { image1: item_image, },
            { image1: item_image,  },
            { image1: item_image,  },
            { image1: item_image,  },
            { image1: item_image,  },
            { image1: item_image,  },
            { image1: item_image,  },
            { image1: item_image,  },
          ].map((e, index) => (
            
            <View key={index.toString()}>
              <ProductItem 
                name="90.000đ"
                image={item_image}
              />  
            </View>
          ))}
        </View>
      </ScrollView>
      {/*  */}
      </View>
      <View style={styles.seeMoreContainer}>        
      </View>
    </View>
  );
          

};

export default HomeSectionComponent;

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 12,
  },
  container:{flex:1,
    alignItems:"center",

  
  
},
  wrap:{
    
    width:WITDH,
    height:HEIGHT*0.20,
  },
  wrapDot:{
    position:'absolute',
    bottom:0,
    flexDirection:'row',
    alignSelf:"center",
  },
  dotActive:{
    margin:3,
    color:"black",
  },
  dot:{
    margin:3,
    color:"#888"
  },
  sectionTitle: {
    fontWeight: "700",
    fontSize: 16,
    color: "#2f2f2f",
    marginVertical: 12,
  },
  sectionImage: {
    width: width - 24,
    height: 130,
    borderRadius: 4,
  },
  listItem: {
    
    flexDirection: "row",
    marginLeft: 10,
  },
  listItemContainer: {
    borderRadius: 10,
    backgroundColor:"#fff",
    
    marginTop: 10,
  },
  itemContainer: {
    width: 100,
    marginRight: 12,
    marginTop: 10,
  },
  itemImage: {
    width: 100,
    height: 120,
  },
  itemName: {
    fontSize: 14,
    color: "#484848",
    marginVertical: 4,
  },
  itemPrice: {
    flexDirection: "row",
    fontSize: 16,
    fontWeight: "500",
    color: "#2a2a2a",
  },
  filterContainer: {
    flexDirection: "row",
    
  },

  filterInactiveButtonContainer: {
    paddingHorizontal: 11,
    paddingVertical: 6,
  },
  filterActiveText: {
    color: "#fff",
  },
  filterInactiveText: {
    color: "#fff",
  },
  seeMoreContainer: {
    marginTop: 10,
    padding: 12,
    borderTopWidth: 0.6,
    borderTopColor: "#ededed",
    alignItems: "center",
  },
  seeMoreText: {
    color: "#0e45b4",
  },
  saletext: {
  
    marginLeft:10,   
    marginTop: 10,
  },
  saletext1: {
  fontSize:18,
  color:"#EC870E",
  fontWeight:"700",
  fontStyle:"italic",
  
  },

});
