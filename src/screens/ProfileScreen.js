import React from "react";
import { StyleSheet, Text,TouchableOpacity, StatusBar, View,Button} from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const xuimg = require("../assets/xu.png");

import Header from "../components/HeaderComponent";

const ProfileItem = ({ icon, name }) => (
 
  <View style={styles.itemContainer1}>
    <View style={styles.itemkhung}><MaterialCommunityIcons name={icon} size={26} color="#1e88e5"  /></View>
    <View><Text style={[styles.itemText, { marginLeft: icon ? 20 : 0 }]}>{name}</Text></View>
  </View>
);

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.screenContainer}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.bodyContainer}>
        <View style={styles.userContainer}>
        
          <View style={styles.textContainer}>
            <Text style={styles.welcomeText}>Chào mừng đến với Tiki</Text>
            <TouchableOpacity onPress={ navigation.navigate('Login')}>
            <Text style={styles.authText}>Login in/Register</Text>
            </TouchableOpacity>
            
          </View>
          <FontAwesome name="angle-right" size={30} color="#1e88e5" />
        </View>
        {/*  */}
        <View style={styles.bg}>
        <View style={styles.headerContainer}>
          <View style={styles.khung}>
            
          <ProfileItem flexDirection="row"  icon="diamond" />
            <Text  style={styles.textxu}>
              Tiki Xu
            </Text>
          </View>
          <View style={styles.khung} > 
          <ProfileItem flexDirection="row" icon="ticket-percent" />
          <Text style={styles.textxu}>
            Mã giảm giá
          </Text>
          </View>


        </View >
        </View>
        <View backgroundColor={"#fff"}>
        <View style={styles.DHCT}>
          <View >
            <Text >
              Đơn hàng của tôi
            </Text>
          </View>
          <View >
            <Text >
              Xem lịch sử
            </Text>
          </View>
        </View>
        </View>
        <View  />
        <View style={styles.formQL}>
        <ProfileItem  icon="credit-card-outline" name="Chờ thanh toán" />
        <ProfileItem icon="folder-multiple" name="đang xữ lý" />
        <ProfileItem icon="tractor-variant" name="Đang vận chuyển" />
        <ProfileItem icon="tooltip" name="Chờ đánh giá" />
        </View>
        <View style={styles.formQL2}>
          <FontAwesome name="gift" size={30} style={styles.iconfontAS}  />
          <Text style={styles.textform}>Săn thưởng</Text>
          <FontAwesome name="angle-right" size={26} color="#1e1e1e" />
        </View>
        <View style={styles.formQL2}>
          <FontAwesome name="comment" size={30} style={styles.iconfontAS}  />
          <Text style={styles.textform}>Đánh giá sản phẩm</Text>
          <FontAwesome name="angle-right" size={26} color="#1e1e1e" />
        </View> 
        <View style={styles.formQL2}>
          <FontAwesome name="shopping-cart" size={30} style={styles.iconfontAS}  />
          <Text style={styles.textform}>Sản phẩm đã mua</Text>
          <FontAwesome name="angle-right" size={26} color="#1e1e1e" />
        </View> 
        <View style={styles.formQL2}>
          
          <Text style={styles.textform2}>Quan tâm</Text>
         
        </View>  
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    
  },
  //Body
  bodyContainer: {
    flex: 1,
    backgroundColor: "#ECECEC",
  },
  headerContainer: {
   margin:20,
    flexDirection: "row",
    borderColor:"white",
    justifyContent: "space-between",
  },
  bg:{
    backgroundColor:"#1e88e5",

  },
  userContainer: {
    backgroundColor:"#1e88e5",
    
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 22,
    alignItems: "center",
  },
  itemkhung:{
    backgroundColor:"#d4eafc",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems:"center",
    borderRadius:20,
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1e88e5",
  },
  textContainer: {
    flex: 1,
    
    marginLeft: 20,
  },
  welcomeText: {
    fontSize: 24,
    color: "#fff",
  },
  authText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
  //
  itemContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
  },
  
  itemContainer1: {

    marginTop:10,  
    backgroundColor: "#fff",
    paddingVertical: 10,
    alignItems: "center",
    
  },
  itemText: {
    right:12,
    fontSize:12,
    color: "black",
  },
  divider: {
    height: 10,
  },
 textxu:{
   left:10,
   alignSelf:"center",
   color:"black",
 
 },
 khung:{
  flexDirection:"row",
  justifyContent: "center",
  borderRadius:20,
  height:80,
  width:160,
  backgroundColor:"#fff",
  
 },
 formQL:{
   justifyContent:"center",
   flexDirection:"row",

 },
 formQL2:{
  marginTop:10,
  backgroundColor: "#fff",
  flexDirection: "row",
 
  alignItems: "center",

},

textform:{
 
  fontSize:17,
  marginRight:220,
  
},
textform2:{
 
  fontSize:17,
  margin:10,
  
},
 DHCT:{
  flexDirection:"row",
  justifyContent: "space-between",
  margin:10,
  
  marginHorizontal:10,
  
 },
 iconfontAS:{
  margin:10,

  color:"#ffb700",
 },
 

});

export default ProfileScreen;
