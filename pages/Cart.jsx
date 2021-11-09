import React from "react";
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";

export default function Cart({navigation, route}) {
   
    const {item} = route.params;
    
    return (
        <View
            style={{
                backgroundColor: "black",
                flex: 1
            }}

        >

            <View style={{ flexDirection: "row", marginTop: 30, padding: 10, alignContent: "space-around",marginRight:5 }}>
                <TouchableOpacity style={{ alignSelf: "flex-start" }} onPress={() => navigation.navigate('Explore')} ><FontAwesome5 name="less-than" size={24} color="pink" /></TouchableOpacity>
                <Text style={{ paddingRight: 150, paddingLeft: 150, fontWeight: "500", fontSize: 20, color: "pink" }}>Cart</Text>
                <View style={{}}><Feather name="shopping-cart" size={24} color="pink" /></View>
            </View>

                <View style={{width:"95%",height:150,borderRadius:10,backgroundColor:"white",marginTop:10,display:"flex",justifyContent:"center",alignItems:"center"}}>
                <View style={{ marginTop: 10, flexDirection: "row", padding: 5 }}>
                    <View style={{ height: 70, width: 70, borderRadius: 10 }}>
                        <Image
                        resizeMode="contain"
                            style={{
                                width: 100,
                                height: 90,
                                borderRadius: 10,
                                marginBottom: 20,
                            }}
                            source={{
                                uri: item.image
                            }}
                        />
                    </View>

                    <View style={{ flexDirection: "column", marginLeft: 40,width:150,height:100 }}>
                        <Text style={{ color: "black" }}>{item.title}</Text>
                        {/* <Text style={{ color: "white",fontSize:10 }}>{item.description}</Text> */}
                        <Text style={{ color: "black",marginTop:10 }}>$ {item.price}</Text>
                    </View>
                    <View style={{ flexDirection: "column", alignContent: "space-between", marginLeft: 35 }}>
                        <View style={{ alignSelf: "flex-end", }}>
                            <FontAwesome name="times" size={24} color="pink" />
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between",paddingTop:40 }}>
                            <AntDesign name="minuscircleo" size={24} color="pink" />
                            <Text>count</Text>
                            <AntDesign name="pluscircle" size={24} color="pink" />
                        </View>
                    </View>
                </View>
                </View>

                
               

                {/* Promo code section */}
                <View style={{ marginTop: 50, marginLeft: 15, height: 50, width: "90%", borderRadius: 10, backgroundColor: "white", flexDirection: "row" }}>
                    <TextInput style={{ padding: 10 }}
                        placeholder="Promo code"></TextInput>
                    <View style={{ height: 30, width: 80, backgroundColor: "pink", borderRadius: 10, padding: 10, margin: 10, marginLeft: 100 }}>
                        <Text style={{ color: "black", textAlign: 'center' }}>Apply</Text>
                    </View>
                </View>

                {/* end */}

                {/* cart details */}
                <View style={{ flexDirection: "column", justifyContent: "space-around", margin: 30 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 10 }}>
                        <Text style={{ color: "pink", fontSize: 15 }}>Subtotal</Text>
                        <Text style={{ color: "pink", fontSize: 15 }}> Price</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 10 }}>
                        <Text style={{ color: "pink", fontSize: 15 }}>Shipping</Text>
                        <Text style={{ color: "pink", fontSize: 15 }}>Price</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 10 }}>
                        <Text style={{ color: "pink", fontSize: 15 }}>Cart Total</Text>
                        <Text style={{ color: "pink", fontSize: 15 }}>${item.price}</Text>
                    </View>
                </View>
                {/* end */}

                {/* button to checkout */}
                <TouchableOpacity style={{ height: 50, width: "80%", backgroundColor: "pink", borderRadius: 30, marginLeft: 45 }} onPress={() => navigation.navigate('Checkout')}>
                    <Text style={{ textAlign: "center", fontWeight: "500", fontSize: 20, paddingTop: 10 }}>Proceed to Checkout</Text>
                </TouchableOpacity>
                {/* end */}

            </View>
        

    );
}

