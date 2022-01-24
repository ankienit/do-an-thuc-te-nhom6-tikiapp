import React, { useState } from "react";
import { status, ScrollView, StyleSheet, View, FlatList, Text, SafeAreaView, TouchableOpacity, Dimensions, Image } from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

import Header from "../components/HeaderComponent";

const listTab = [
  {
    status: 'Gợi ý cho bạn'
  },
  {
    status: 'Đồ chơi mẹ & bé'
  },
  {
    status: 'TIKINGON'
  },
  {
    status: 'Điện thoại - Máy tính bản'
  },
  {
    status: 'Làm đẹp - Sức khoẻ'
  },
  {
    status: 'Tiện - Gia dụng'
  },
  {
    status: 'Thời trang nam'
  },
  {
    status: 'Thời trang nữ'
  },
  {
    status: 'Giầy dép nữ'
  },
  {
    status: 'Túi thời trang nam'
  },
  {
    status: 'Đồng hồ nam'
  },
  {
    status: 'TIKINGON'
  },
]
const data = [
  {
    status: 'Thời trang nam',
    type: 1,
    name: "Áo khoác bomber nam",
    imgUrl: "https://bcaliving.vn/wp-content/uploads/2021/09/ao-khoac-nam-aristino-AJK027W9-01-510x680.jpg",
  },
  {
    status: 'Thời trang nam',
    type: 2,
    name: "Áo hoodies nam vải nỉ",
    imgUrl: "https://salt.tikicdn.com/cache/400x400/ts/product/b7/7b/f7/c8431701bd0aaf93c8a686117a3ceccc.png",
  },
  {
    status: 'Thời trang nữ',
    type: 1,
    name: "Áo thun áo khoác nỉ nữ",
    imgUrl: "https://cf.shopee.vn/file/a518a4a542b0d5897a873d5ae35b8f8b",
  },
  {

    status: 'Thời trang nam',
    type: 2,
    name: "Áo khoác gió",
    imgUrl: "https://salt.tikicdn.com/ts/tmp/6f/6f/70/9f277813854c030726974fb460fa089a.jpg",
  },
  {
    status: 'Thời trang nam',
    type: 1,
    name: "Giày nam",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhxhNsEF6oeOJevEI3RP5Ldv66PvLfP40QTrTpvcBmFV0QWaC-hAMZQR-ZVg9XUVjfaAs&usqp=CAU",
  },
  {
    status: 'Điện thoại - Máy tính bản',
    type: 2,
    name: "Máy tính bảng",
    imgUrl: "https://phucanhcdn.com/media/product/35556_samsung_galaxy_tab_a_10_1_t515__gold__1_1.png",


  },
  {
    status: 'Điện thoại - Máy tính bản',
    type: 2,
    name: "LapTop",
    imgUrl: "https://cdn.tgdd.vn/Files/2019/10/16/1209219/hinhdaidien_800x450.jpg",

  },
  {
    status: 'Điện thoại - Máy tính bản',
    type: 2,
    name: "Điện thoại",
    imgUrl: "https://cdn.fptshop.com.vn/Uploads/Originals/2021/7/8/637613342139496099_oppo-reno6z-dd.jpg",
  },
  {
    status: 'Điện thoại - Máy tính bản',
    type: 2,
    name: "Sạc",
    imgUrl: "https://bizweb.dktcdn.net/thumb/medium/100/184/165/products/samsungw-a0b5d041-a7fe-4dc3-a01e-e42b76f0ee2c.jpg?v=1635398509000",

  },
  {
    status: 'Thời trang nam',
    type: 2,
    name: "Quần jean nam",
    imgUrl: "https://bizweb.dktcdn.net/thumb/1024x1024/100/345/647/products/7fe3156b15a2f7fcaeb3.jpg",

  },
  {
    status: 'Thời trang nam',
    type: 2,
    name: "Áo thun 3 lỗ",
    imgUrl: "https://media3.scdn.vn/img3/2019/4_3/dgy97u_simg_de2fe0_500x500_maxb.jpg",

  },
  {
    status: 'Tiện - Gia dụng',
    type: 2,
    name: "Máy giặt",
    imgUrl: "https://hangdienmaygiare.com/images/products/2019/09/03/large/may-giat-electrolux-ewf1042bdwa-10-kg-inverter.jpg",

  },
  {
    status: 'TIKINGON',
    type: 2,
    name: "Kẹo bông gòn",
    imgUrl: "https://img.wattpad.com/adeab53cc890cdd24594cdf9e2d00a79c78c78ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f32634569715257343339626837413d3d2d3837363234323639302e313631303661316231666638646436313832303738313738323837332e6a7067?s=fit&w=720&h=720",

  },
  {
    status: 'Thời trang nam',
    type: 2,
    name: "Áo vest",
    imgUrl: "https://projectrunway.com.vn/images/news/lg_ao-vest-nam_7.jpg",

  },
  {
    status: 'TIKINGON',
    type: 2,
    name: "Dầu gió",
    imgUrl: "https://cdn.tgdd.vn/Files/2019/07/09/1178468/nhuc-dau-dau-bung-la-dung-den-dau-gio-thoi-quen-dang-giet-chet-nhieu-nguoi-201907092141156195.jpg",

  },
  {
    status: 'Điện thoại - Máy tính bản',
    type: 2,
    name: "Máy tính bảng",
    imgUrl: "https://cdn.fptshop.com.vn/Uploads/Originals/2021/7/8/637613342139496099_oppo-reno6z-dd.jpg",

  },
  {
    status: 'TIKINGON',
    type: 2,
    name: "Cafe",
    imgUrl: "https://cafesach.com.vn/wp-content/uploads/2017/07/cafe-sach-giup-ban-phong-tranh-cac-benh-ve-rang-mieng-2.jpg",

  },
  {
    status: 'TIKINGON',
    type: 2,
    name: "Thuốc lá",
    imgUrl: "https://phongkhamthuankieu.vn/wp-content/uploads/2021/03/cach-bo-thuoc-la-nhanh.jpg",

  },
  {
    status: 'Thời trang nam',
    type: 2,
    name: "Dép lê",
    imgUrl: "https://cf.shopee.vn/file/12430c9eff217148f975078e49e7df89",

  },
  {
    status: 'Đồng hồ nam',
    type: 2,
    name: "Đồng hồ thông minh",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2RmfXwXbx6tEWFJ3G-QlMC0u_FC8ZRyXJ5UFED_UqK0E1vSoW57cByF3n8DUvEVLtum8&usqp=CAU",

  },
  {
    status: 'Tiện - Gia dụng',
    type: 2,
    name: "Ghế",
    imgUrl: "http://product.hstatic.net/1000181810/product/ghe-nhua-chan-go-eames-trang-1_c39e0ca6959c41bcac18f8b5544a959a_grande.jpg",

  },
]
const WITDH = Dimensions.get('window').width
const numColumns = 2
const renderItem = ({ item, index }) => {
  return (
    <View style={styles.itemContainer} >
      <View  >
     
          <Image style={{ width: 90, height: 90, margin: 10, }} source={{ uri: item.imgUrl }}></Image>
          <Text style={styles.itemName}>{item.name}</Text>
      
      </View>
    </View>
  )
}

const NotificationScreen = () => {

  const [status, setStatus] = useState('Gợi ý cho bạn')
  const [datalist, setDatalist] = useState(data)
  const setStatusFilter = status => {
    if (status !== 'Gợi ý cho bạn') {
      setDatalist([...data.filter(e => e.status === status)])
    }
    else {
      setDatalist(data)
    }
    setStatus(status)
  }
  return (
<View style={styles.screenContainer}>
<Header title="Notification" />
    <SafeAreaView style={styles.Container}>
      <View>
        <ScrollView  >
          {
            listTab.map(e => (
              <TouchableOpacity
                style={[styles.btnTap, status === e.status && styles.btbtapActive]}
                onPress={() => setStatusFilter(e.status)}
              >
                <Text style={[styles.btnext, status === e.status && styles.btntextActive]}>{e.status}</Text>
              </TouchableOpacity>
            ))
          }</ScrollView>
      </View>
      <View style={{width:280}}>
        <FlatList 
        numColumns={numColumns}
          data={datalist}
          keyExtractor={(e, i) => i.toString()}
          renderItem={renderItem}
          
        />
      </View>
    </SafeAreaView>
    </View>

  );
};


const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    
  },
  Container: {
    flex: 1,
    backgroundColor: "#ededed",
    flexDirection: "row",
  },
  btnTap: {
    width: 100,
    height: 100,
    justifyContent: "center",
  },
  btbtapActive: {
    width:100,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },

  btnext: {
    padding:10,
    justifyContent: "center",
    textAlign: "center",
    alignSelf: "center",
    color: "black",
    fontSize: 15,
    alignSelf: "center",
  },
  btntextActive: {
    color: "black",

  },
  itemContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0.5,
    height: Dimensions.get('window').width / numColumns, // approximate a square
    width:140
  },

 
  
  itemName: {
    fontSize: 12,
    textAlign: "center",
    color: "#000",
   
  },

});

export default NotificationScreen;
