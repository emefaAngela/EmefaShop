import React from "react";
import { View,Text,TouchableOpacity } from "react-native";

export default function Login2(params){
    const navigation = params.navigation;
    return(
        <View
            style={{
                backgroundColor:"white",
                flex:1,
                justifyContent:"center",
                alignItems:"center"
            }}
            >
                <Text style={{flex:1,fontweight:40,fontsize:30,PaddingTop:100, alignItems:"center"}}> WELCOME BACK</Text>
                <View style={{flex:2}}>
                <Text style={{color:"bisque"}}>LOGIN IN</Text>
                <TouchableOpacity>
                    <Text style={{padding:10,marginBottom:5,backgroundColor:"white"}}>USER NAME</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{padding:10,marginBottom:5,backgroundColor:"white"}}>PASSWORD</Text>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Text style={{padding:10,marginTop:20,backgroundColor:"bisque"}}>LOG IN</Text>
                </TouchableOpacity>
                <Text style={{fontWeight:20}}>OR LOG IN USING SOCIAL MEDIA</Text>
                <TouchableOpacity style={{flexDirection:"row",marginLeft:5}}></TouchableOpacity>
                </View>
        </View>
    );
}

