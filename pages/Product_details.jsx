import React from "react";
import { View,Text,TouchableOpacity,Image, } from "react-native";
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function Product_details({navigation, route}){
  
        const {item} = route.params;

       
    return(
        <View
            style={{
                backgroundColor:"white",
                
                flex:1
            }}
            >
                <View style={{flexDirection:"row",marginTop:20,padding:10,justifyContent:"space-between"}}>
                 <TouchableOpacity style={{alignSelf:"flex-start"}} onPress={()=>navigation.navigate('Explore')} ><FontAwesome5 name="less-than" size={24} color="pink"  /></TouchableOpacity>
                
                 <View style={{}}><Feather name="grid" size={24} color="pink" /></View>
                 </View>
                 <View>
                 <View style={{ alignContent:"center",
                justifyContent:"center"}}>
                     <Image
                     resizeMode="contain"
            style={{
                
              
                height:300 ,
                marginBottom: 40, 
                marginTop:60
                
                


            }}
            source={{
                uri: item.image
            }}
            />
                </View> 

                <View style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly",padding:10,marginBottom:30}}>
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

                <View style={{height:200,width:"90%",borderRadius:40,backgroundColor:"pink",marginLeft:20,padding:10,display:"flex",flexDirection:"column"}}>
                    <View style={{padding:20,display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                      <Text style={{fontSize:15,fontWeight:"600",justifyContent:"center",alignContent:"center"}}>{item?.title}</Text>
                      <Text style={{fontSize:15,fontWeight:"600",justifyContent:"center",alignContent:"center"}}>{item?.price}</Text>
                      <View
                      style={{borderColor:"black",border:10 }}></View>
                      <Text style={{fontSize:10,fontWeight:"500",justifyContent:"center",alignItems:"center",padding:10}}>{item?.description}</Text>
                    </View>
                    
                </View>    
                 </View>
                 <View style={{width:"100%",height:40,backgroundColor:"black",display:"flex",flexDirection:"row",marginTop:150}}>
                     <TouchableOpacity style={{width:"50%",height:40,backgroundColor:"black"}}> <Text style={{color:"pink",textAlign:"center",fontSize:20,fontWeight:"500"}}>Add to Wishlist </Text></TouchableOpacity>
                     <TouchableOpacity style={{width:"50%",height:40,backgroundColor:"pink"}}> <Text style={{color:"black",textAlign:"center",fontSize:20,fontWeight:"500"}} onPress={()=>{navigation.navigate("Cart", {item})}}>Add to Cart </Text></TouchableOpacity>
                 </View>
        </View>
    );
}