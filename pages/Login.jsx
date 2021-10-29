import React from "react";
import { View,Text, TouchableOpacity,Image } from "react-native";

export default function Login(params){
    const navigation = params.navigation;
    return(
            <View style={{backgroundColor:"white",flex:1, justifyContent: "center", alignItems:"center"}}>
            <Image
            style={{
                width:100 ,
                height:100 ,
                borderRadius: 10,
                marginBottom: 20,
            }}
            source={{
                uri:require('../assets/login.jpg')
            }}
            />
            <Text style={{fontSize:24}}>Welcome to</Text>
            <Text style={{fontSize:30, fontWeight:"600"}}>Angela's shop</Text>
            <TouchableOpacity style={{padding:10,borderRadius:10, backgroundColor:"bisque",margin:10}}>
                <Text>Login with Gmail</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{padding:10, backgroundColor:"black",borderRadius:10,margin:10}}>
                <Text>Login with Apple</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:"row"}}>
                <Text style={{margin:10}}>Not a member?</Text>
                <Text style={{margin:10,color:"orange", fontweight:"bold"}}>Sign Up</Text>
            </TouchableOpacity>
        </View>
        
    );
}