import React from "react";
import { View,TouchableOpacity,Text } from "react-native";

export default function SignUp(params){
    const navigation = params.navigation;
    return(
        <View
            style={{
                backgroundColor:"gray",
                flex:1,
                justifyContent:"center",
                alignItems:"center"
            }}
            >
                <Text style={{flex:1,padding:10,marginTop:50,fontSize:30,fontSize:40}}>REGISTER</Text>
                <View style={{flex:3}}>
                <TouchableOpacity>
                    <Text style={{padding:10,marginBottom:5,backgroundColor:"white"}}>USER NAME</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{padding:10,marginBottom:5,backgroundColor:"white"}}>EMAIL</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{padding:10,marginBottom:5,backgroundColor:"white"}}>PASSWORD</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{padding:10,marginBottom:5,backgroundColor:"white"}}>CONFIRM PASSWORD</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{padding:10,marginBottom:5,backgroundColor:"white"}}>MOBILE</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={{padding:10,marginBottom:5,backgroundColor:"bisque",alignItems:"center",textAlign:"center"}}>REGISTER</Text>
                </TouchableOpacity>
                </View>
        </View>
    );
}

