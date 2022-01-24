import React,{useState} from "react";
import {status, StyleSheet, View, FlatList, Text ,SafeAreaView,TouchableOpacity, Dimensions, Image} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

import Header from "../components/HeaderComponent";

const listTab=[
  {
    status:'Khám phá'
  },
  {
    status:'Đang theo'
  },
  {
    status:'Cộng đồng'
  }
]
const data=[
  {
    name: "CANIA",
    textname: "Giảm giá thả ra mua sắm cùng CANIA",
    imgUrl:"https://salt.tikicdn.com/ts/tmp/7d/dd/bb/fb0c37ababdfccc3282095c8b7801594.jpg",
    status:"Đang theo"
  },
  {
    name: "Siêu thị phụ kiện số TIKI",
    textname:"Ngày hội siêu giảm giá, mua ngay để nhận ưu đãi cực khủng",
    imgUrl:"https://i.pinimg.com/originals/d2/b0/e7/d2b0e720de03c5da6fc271a3b28a08ca.png",
    status:"Khám phá"
  },
  {
    name: "Hoàng Hà Mobile:",
    textname:" Chào mừng Quốc Khánh 2/9 - Ưu đãi cực sốc",
    imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHaMhlRl-G-1OM0ZFpISg4ITvwt9Uj4-2BkkJXi0FCtG8Dv9xFpkw7PbZ3S9bc1dZBMsA&usqp=CAU",
    status:"Đang theo"
  },
  {
    name: "Thẩm Mỹ Viện Aquilar",
    textname:"Viện thẩm mỹ uy tín, chất lượng ",
    imgUrl:"https://icare-plus.vn/wp-content/uploads/2018/09/banner-tham-my-vien-aquila-icare-plus-3.jpg",
    status:"Cộng đồng"
  },
  {
    name: "Hà Anh Tuấn chốt đơn khủng, trở thành gương mặt đại sứ thương hiệu mới của Tiki",
    textname:"Viện thẩm mỹ uy tín, chất lượng ",
    imgUrl:"https://image-us.eva.vn/upload/4-2021/images/2021-10-18/ha-anh-tuan-chot-don-khung-tro-thanh-guong-mat-dai-su-thuong-hieu-moi-cua-tiki-img_4669-1634523139-478-width660height413.jpg",
    status:"Cộng đồng"
  },
]
const renderItem=({item,index})=>{
  return(
    <View key={index} style={styles.itemContainer}>
      <View style={styles.itemlogo}>
        <Image
          style={styles.itemImg}
          
          source={{uri:item.imgUrl}}
        />
        <View style={styles.itemBody}>
        <Text style={styles.itemName}>{item.name}</Text>
        </View>
        <View style={styles.itemBody}>
        <Text style={styles.itemtext}>{item.textname}</Text>
        </View>
      
      </View>
      
      
    </View>
  )
}

const NotificationScreen = () => {
  
  const [status,setStatus]=useState('Khám phá')
  const [datalist,setDatalist]=useState(data)
  const setStatusFilter = status =>{
    if(status !=='Khám phá'){
      setDatalist([...data.filter(e=>e.status===status)])
    }
    else{
      setDatalist(data)
    }
    setStatus(status)
  }
  return (
    
      <SafeAreaView style={styles.Container}>
        <View style={styles.headercolor}>
    <View style={styles.listTab}>
      {
        listTab.map(e=>(
          <TouchableOpacity
            style={[styles.btnTap,status===e.status && styles.btbtapActive]}
            onPress={()=>setStatusFilter(e.status)}
          >
          <Text style={[styles.btnext,status===e.status && styles.btntextActive]}>{e.status}</Text>         
        </TouchableOpacity>
        ))
      }
    </View>
    </View>
    <FlatList 
      data={datalist}
      keyExtractor={(e,i)=>i.toString()}
      renderItem={renderItem}
    />
  </SafeAreaView>
    
    
  );
};


const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  Container: {
    flex: 1,
    justifyContent:"center",

  },
  listTab:{
    backgroundColor:"#1e88e5",
    flexDirection:"row",
    justifyContent:"center",

  },
  
  btnTap:{
    
    marginBottom:10,
    marginTop:10,
    borderRadius:10,
    marginEnd:10,
    width: Dimensions.get("window").width/3.5,
    flexDirection:"row",
    padding:10,
    height:40,
    justifyContent:"center",
  },
  btbtapActive:{
    backgroundColor:"#92c8f7",
  },
  btnext:{
    color:"#fff",
    fontSize:16,
  },
  btntextActive:{
    color:"#fff",
  },
  itemContainer:{
    flexDirection:"row",
    paddingVertical:15,
  },
  itemlogo:{
    padding:10,
    
  },
  itemImg:{
    alignSelf:"center",
    
    width:380,
    height:200,
  },
  itemBody:{
    flex:1,
    paddingHorizontal:10,
    justifyContent:"center",
  },
  itemName:{
    fontWeight:'bold',
    fontSize:20,
  },
  itemtext:{
    fontSize:15,
  },
  itemStatus:{
    backgroundColor:"green",
    paddingHorizontal:6,
    justifyContent:'center',
    right:12,
  },
});

export default NotificationScreen;
