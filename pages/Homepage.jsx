import React from "react";
import { View,Text, TouchableOpacity,Image } from "react-native";

export default function Homepage(params){
    const navigation = params.navigation;
    return(
            <View style={{backgroundColor:"white",flex:1, justifyContent: "center", alignItems:"center"}}>
            <Image
            style={{
                width:200 ,
                height:200 ,
                borderRadius: 10,
                marginBottom: 20, 
            }}
            source={{
                uri:require('../assets/logo.jpg')
            }}
            />
            <Text style={{fontSize:24}}>Welcome to</Text>
            <Text style={{fontSize:30, fontWeight:"600"}}>Angela's shop</Text>
            <TouchableOpacity style={{padding:10,borderRadius:10, backgroundColor:"pink",margin:10,width:"60%" }} onPress={()=>navigation.navigate('Login')}>
                <Text>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{padding:10, backgroundColor:"black",borderRadius:10,margin:10,width:"60%",fontWeight:400}} onPress={()=>navigation.navigate('SignUp')}>
                <Text style={{color:"white"}}>Create an Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:"row"}}>
                <Text style={{margin:10}}>Not a member?</Text>
                <Text style={{margin:10,color:"pink", fontweight:"bold"}} >Sign Up</Text>
            </TouchableOpacity>
        </View>
        
    );
}