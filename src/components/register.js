import React,{useState,useEffect} from "react";
import{
  SafeAreaView,
  StyleSheet,
  Button,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Keyboard,
} from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome"
import {isValidEmail,isValidPassword} from "../components/Validaton"
const img1 = require("../assets/im1.png");

function Login(props) {
  const [KeyboardIsShow,setKeyboardIsShow]=useState(false)
  const [errorEmail,setErrorEmail]=useState("")
  const [errorPassword,setErrorPassword]=useState("")
  const [Email,setEmail]=useState("")
  const [Password,setPassword]=useState("")
  const isValidationOK =()=> Email.length>0 && Password.length>0 && isValidEmail(Email)==true && isValidPassword(Password)==true
  useEffect(()=>{
    Keyboard.addListener("keyboardDidShow",()=>{
      setKeyboardIsShow(true)
    })
    Keyboard.addListener("keyboardDidHide",()=>{
      setKeyboardIsShow(false)
    })
  })
  return <KeyboardAvoidingView>
    <Image style={styles.img} source={img1} />
    <View style={styles.bodyContainer}>

      <Text style={styles.txt}>Đăng ký</Text>
      <View style={styles.input}>
        <TextInput style={styles.inputText}
        onChangeText={(text)=>{
          setErrorEmail(isValidEmail(text)==true ? '':"Nhập đúng Email")
          setEmail(text)
        }}
          placeholder="Email"
          placeholderTextColor={"#adaaaa"}
        />
        <Text style={{color:"red",fontSize:15,}}>{errorEmail}</Text>
      </View>

      <TextInput style={styles.inputText}
       onChangeText={(text)=>{
        setErrorPassword(isValidPassword(text)==true ? '':"Password phải trên 5 ký tự")
        setPassword(text)
      }}
        secureTextEntry={true}
        placeholder="Password"
        placeholderTextColor={"#adaaaa"}
      />
       <Text style={{color:"red",fontSize:15,}}>{errorPassword}</Text>
       <TextInput style={styles.inputText}
       onChangeText={(text)=>{
        setErrorPassword(isValidPassword(text)==true ? '':"Password phải trên 5 ký tự")
        setPassword(text)
      }}
        secureTextEntry={true}
        placeholder="Re-Enter your password"
        placeholderTextColor={"#adaaaa"}
      />
       <Text style={{color:"red",fontSize:15,}}>{errorPassword}</Text>
      <TouchableOpacity
       disabled={isValidationOK()==false}
       onPress={() => {alert(`Email=${Email} Password=${Password}`)   }} style={styles.btnlg}>
        <Text style={styles.next}>Đăng ký</Text>
      </TouchableOpacity>
     
      
    </View>
    

  </KeyboardAvoidingView>
}
export default Login;
const styles = StyleSheet.create({
  bodyContainer:{
    margin:10,
  },
  txt:{
    fontSize:40,
  },
  txt2:{
    fontSize:15,
  },
  img:{
    width:390,
    height:200,
  },

  inputText:{
    marginTop:10,
    fontSize:25,
    borderBottomColor: "#adaaaa",
    borderBottomWidth: 1,
  },
  btnlg:{
    marginTop:30,
    backgroundColor:"#ff3d3d",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:5,
  },
  btnemail:{
    fontSize:13,
    marginTop:20,
    alignSelf:"center",
    color:"#1867de",
  },
  next:{
    padding:10,
    color:"white",
    fontSize:20,
  },
  form:{
    alignItems:"center",
    marginTop:110,
  },
  formdn:{
    margin:10,
    flexDirection:"row",
  }
});