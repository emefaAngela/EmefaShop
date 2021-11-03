import React from "react";
import { View,Text,TouchableOpacity,Image, } from "react-native";
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function Product_details(params){
    const navigation = params.navigation;
    return(
        <View
            style={{
                backgroundColor:"black",
                marginTop:10,
                flex:1
            }}
            >
                <View style={{flexDirection:"row",marginTop:30,padding:10,justifyContent:"space-between",flex:1}}>
                 <TouchableOpacity style={{alignSelf:"flex-start"}} onPress={()=>navigation.navigate('Explore')} ><FontAwesome5 name="less-than" size={24} color="pink"  /></TouchableOpacity>
                
                 <View style={{}}><Feather name="grid" size={24} color="pink" /></View>
                 </View>
                 <View>
                 <View style={{ alignContent:"center",
                justifyContent:"center"}}>
                     <Image
            style={{
                width:300 ,
                height:300 ,
                marginBottom: 80, 
                
                


            }}
            source={{
                uri:require('../assets/sample.jpg')
            }}
            />
                </View> 

                <View style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly",padding:10,marginBottom:50}}>
                    <View style={{height:70, width:70,borderRadius:10,backgroundColor:"pink",alignItems:"center",justifyContent:"center"}}>
                    
                <MaterialCommunityIcons name="hours-24" size={30} color="black" />
                  <Text style={{fontSize:8}}>Long-lasting</Text>
                    </View>
                    <View style={{height:70, width:70,borderRadius:10,backgroundColor:"pink",alignItems:"center",justifyContent:"center"}}>
                    <FontAwesome5 name="leaf" size={30} color="black" />
                    <Text style={{fontSize:8}}>Natural</Text>
                    </View>
                    <View style={{height:70, width:70,borderRadius:10,backgroundColor:"pink",alignItems:"center",justifyContent:"center"}}>
                    <AntDesign name="checkcircle" size={30} color="black" />
                    <Text style={{fontSize:8}}>Clinically Tested</Text>
                    </View>
                </View>

                <View style={{height:200,width:"90%",borderRadius:40,backgroundColor:"pink",marginLeft:20,padding:20}}>
                    <View style={{display:"flex", flexDirection:"row",justifyContent:"space-between",padding:30}}>
                      <Text style={{fontSize:20,fontWeight:600}}>Bracelet</Text>

                    </View>
                    <View style={{display:"flex", flexDirection:"row",justifyContent:"space-between",padding:30}}>
                        <Text style={{fontSize:20,fontWeight:600}}>Price</Text>
                        <View style={{display:"flex", flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",height:30,width:100,borderRadius:10,borderColor:"black",borderWidth:2}}>
                            <TouchableOpacity style={{}}><FontAwesome name="minus" size={24} color="black" /></TouchableOpacity>
                            <Text style={{fontSize:20}}>1</Text>
                            <TouchableOpacity style={{}}><AntDesign name="plus" size={23} color="black" /></TouchableOpacity>
                        </View>
                        <TouchableOpacity style={{backgroundColor:"black", height:30,width:50,borderRadius:20,fontweight:500,alignItems:"center",justifyContent:"center"}}><Text style={{color:"white"}}>Cart</Text></TouchableOpacity>
                    </View>
                </View>    
                 </View>
        </View>
    );
}