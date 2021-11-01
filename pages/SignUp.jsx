import React from "react";
import { View,TouchableOpacity,Text,TextInput } from "react-native";

export default function SignUp(params){
    const navigation = params.navigation;
    return(
        <View
            style={{
                backgroundColor:"black",
                flex:1,
                color:"white"
            }}
            >
                <View style={{padding:40,marginTop:50}}><Text style={{padding:20,textAlign:"center",color:"white",fontWeight:500,fontSize:30}}>REGISTER</Text></View>
                <View style={{ alignItems:"center",marginBottom:50}}>
                    
                   
                   <TextInput style={{borderWidth: 1,borderColor: 'grey',padding: 10,marginBottom: 20,borderRadius: 5,color:"white"}}
                   placeholder="USER NAME"></TextInput>
                    
                    
                   <TextInput style={{borderWidth: 1,borderColor: 'grey',padding: 10,marginTop:20,marginBottom: 20,borderRadius: 5,color:"white"}}
                   placeholder="EMAIL"></TextInput>
                   
                    
                   <TextInput style={{borderWidth: 1,borderColor: 'grey',padding: 10,marginTop:20,marginBottom: 20,borderRadius: 5,color:"white"}}
                   placeholder="PASSWORD"></TextInput>
                     
                    
                   <TextInput style={{borderWidth: 1,borderColor: 'grey',padding: 10,marginTop:20,marginBottom: 20,borderRadius: 5,color:"white"}}
                   placeholder="CONFIRM PASSWORD"></TextInput>
                    
                    
                   <TextInput style={{borderWidth: 1,borderColor: 'grey',padding: 10,marginTop:20,marginBottom: 20,borderRadius: 5,color:"white"}}
                   placeholder="MOBILE"></TextInput>
                    
                    
                   <Text style={{textAlign:"center",borderWidth: 1,borderColor: 'grey',padding: 10,marginBottom: 20,borderRadius: 5,backgroundColor:"pink"}}
                   >CREATE ACCOUNT</Text>
                    

                    
                </View>
        </View>
    );
}

