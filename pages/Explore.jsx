import React from "react";
import { View,Text,ActivityIndicator,Image, FlatList, RefreshControl, Dimensions } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useEffect } from "react";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Explore(params){
    const navigation = params.navigation;
    
    const[productsData,setProductsData] = useState([]);
    const [loading, setLoading] = useState(false);

    async function getproducts(){
        setLoading(true)
        fetch('https://fakestoreapi.com/products?limit=8')
        .then((response)=> response.json())
        .then((response)=>{
            setLoading(false)
        setProductsData(response);
            console.log(response);

        })
        .catch((e) =>{
            setLoading(false)
            console.log(e);
        });
    }
    useEffect(() => {
        getproducts();
        // return () => {
        //     cleanup
        // }
    }, []);

    return(
        <View
            style={{
                backgroundColor:"black",
                flex:1
            }}
            >
                <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between",padding:10,marginTop:20}}>
                    <Text style={{color:"pink",fontSize:30,fontWeight:"600"}}>Discover </Text>
                    <Entypo name="circle" size={30} color="pink" />
                </View>

                <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between",padding:10,marginTop:10}}>
                    <Text style={{color:"pink",fontSize:20}}>Categories </Text>
                    <FontAwesome name="long-arrow-right" size={24} color="pink" />
                </View>

                <View style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly",padding:10,marginBottom:20,marginTop:20}}>
                    <View style={{width:100,height:70,borderRadius:10, backgroundColor:"pink",alignItems:"center",justifyContent:"center"}}>
                    <Ionicons name="female" size={30} color="black" />
                    <Text style={{color:"black",fontSize:20,fontWeight:"500"}}>Women</Text>
                    </View>
                    <View style={{width:100,height:70,borderRadius:10, backgroundColor:"pink",alignItems:"center",justifyContent:"center"}}>
                    <Ionicons name="male-outline" size={30} color="black" />
                    <Text style={{color:"black",fontSize:20,fontWeight:"500"}}>Men</Text>
                    </View>
                    <View style={{width:100,height:70,borderRadius:10, backgroundColor:"pink",alignItems:"center",justifyContent:"center"}}>
                    <Ionicons name="male-female-outline" size={30} color="black" />
                    <Text style={{color:"black",fontSize:20,fontWeight:"500"}}>Unisex</Text>
                    </View>
                </View>
                {loading && <ActivityIndicator color="pink" />}
                <FlatList 
                    numColumns={2}
                    data={productsData}
                    contentContainerStyle={{paddingHorizontal: 10}}
                    refreshControl={<RefreshControl refreshing={loading} onRefresh={() => getproducts()} />}
                    renderItem={({item, index}) => <TouchableOpacity  activeOpacity={0.8} style={{padding: 10,backgroundColor: 'white',  margin: 5,   width: (Dimensions.get('screen').width / 2)  -20 , borderRadius: 10, borderWidth: 2, borderColor: 'pink'}} onPress={()=>{navigation.navigate("Product_details", {item})}}>
                            <Image style={{height: 100,}} resizeMode="contain"  source={{uri: item.image}} />
                                <Text numberOfLines={2} style={{color: 'black', flex :1 }}>{item?.title}</Text>
                    </TouchableOpacity>}
                />
                {/* <View style={{display:"flex", flexDirection:"row",justifyContent:"space-around",padding:10,}}>
                    <View style={{height:200,width:140,borderWidth:2,borderColor:"pink",display:"flex",flexDirection:"column"}}>
                        <Image
                        style={{height:160,padding:10,width:130}}
                        />
                        
                        <View style={{padding:10,display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                            
                            <Text></Text>
                            <Text></Text>
    
                        </View>
                        
                    </View>
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
                </View> */}
                    
                      
                

        </View>
    );
    
}
