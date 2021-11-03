import React from "react";
import { View,Text } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function Explore(params){
    const navigation = params.navigation;
    return(
        <View
            style={{
                backgroundColor:"black",
                flex:1
            }}
            >
                <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between",padding:10,marginTop:20}}>
                    <Text style={{color:"pink",fontSize:30,fontWeight:600}}>Discover </Text>
                    <Entypo name="circle" size={30} color="pink" />
                </View>

                <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between",padding:10,marginTop:10}}>
                    <Text style={{color:"pink",fontSize:20}}>Categories </Text>
                    <FontAwesome name="long-arrow-right" size={24} color="pink" />
                </View>

                <View style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly",padding:10,marginBottom:20,marginTop:20}}>
                    <View style={{width:100,height:70,borderRadius:10, backgroundColor:"pink",alignItems:"center",justifyContent:"center"}}>
                    <Ionicons name="female" size={30} color="black" />
                    <Text style={{color:"black",fontSize:20,fontWeight:500}}>Women</Text>
                    </View>
                    <View style={{width:100,height:70,borderRadius:10, backgroundColor:"pink",alignItems:"center",justifyContent:"center"}}>
                    <Ionicons name="male-outline" size={30} color="black" />
                    <Text style={{color:"black",fontSize:20,fontWeight:500}}>Men</Text>
                    </View>
                    <View style={{width:100,height:70,borderRadius:10, backgroundColor:"pink",alignItems:"center",justifyContent:"center"}}>
                    <Ionicons name="male-female-outline" size={30} color="black" />
                    <Text style={{color:"black",fontSize:20,fontWeight:500}}>Unisex</Text>
                    </View>
                </View>
                <View style={{display:"flex", flexDirection:"row",justifyContent:"space-around",padding:10,}}>
                    <View style={{height:200,width:140,borderWidth:2,borderColor:"pink",}}></View>
                    <View>
                        <View  style={{height:90,width:140,borderWidth:2,borderColor:"pink",marginBottom:20}}></View>
                        <View  style={{height:90,width:140,borderWidth:2,borderColor:"pink"}}></View>
                    </View>
                </View>

                <View style={{display:"flex", flexDirection:"row",justifyContent:"space-around",padding:10}}>
                    <View>
                        <View  style={{height:90,width:140,borderWidth:2,borderColor:"pink",marginBottom:20}}></View>
                        <View  style={{height:90,width:140,borderWidth:2,borderColor:"pink"}}></View>
                    </View>
                    <View style={{height:200,width:140,borderWidth:2,borderColor:"pink",}}></View>
                </View>
                    
                      
                

        </View>
    );
    
}
