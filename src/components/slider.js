//npm i react-native-image-slider-box
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://bocphot.club/wp-content/uploads/2020/04/trang-mua-sam-online-uy-tin.jpg",
        "https://salt.tikicdn.com/assets/cms/quang-cao/img/LDP-top-desktop.png?v=1",
        "https://sanpham2021.s3.ap-southeast-1.amazonaws.com/copy/2021/03/22150626/banner-khuyen-mai-tiki-6.png",
        "https://hocvien.tiki.vn/wp-content/uploads/2021/08/banner-01-1920x577.png",
        "https://dailygiamgia.com/wp-content/uploads/2019/07/M%E1%BB%ABng-sinh-nh%E1%BA%ADt-Tiki-9-tu%E1%BB%95i.jpg",
        "https://cafefcdn.com/2018/12/12/8-15445939023951002855055.png",
        "https://eu94j8zj53i.exactdn.com/wp-content/uploads/2019/03/Tiki-sinh-nhat-11-tuoi.jpg?strip=all&lossy=1&resize=840%2C313&ssl=1",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6XyDmcLLwTD8YPECbkzhqxX0pr4WVjyeh_iNeucQlgOcZpVGsRJAVdidQzfN8iimeNW8&usqp=CAU",
      ]
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <SliderBox
          autoplay
          circleLoop
          images={this.state.images}
          sliderBoxHeight={180}
          imageLoadingColor="#2196F3"
          ImageComponentStyle={{borderRadius: 15, width: '93%',height:150, marginTop: 5}}
          onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
          dotColor="#fff"
          inactiveDotColor="#a8a8a8"
          dotStyle={{
            width: 10,
            height: 2,
            
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center'
  }
  
});
