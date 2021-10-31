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
                    
                   <TouchableOpacity style={{height:40,width:"90%",padding:10,backgroundColor:"ash"}}>
                   <TextInput style={{borderWidth: 1,borderColor: 'grey',padding: 10,marginBottom: 20,borderRadius: 5,}}
                   placeholder="USER NAME"></TextInput>
                    </TouchableOpacity> 
                    <TouchableOpacity style={{height:40,width:"90%",padding:10,backgroundColor:"ash",marginBottom:20}}>
                   <TextInput style={{borderWidth: 1,borderColor: 'grey',padding: 10,marginTop:20,marginBottom: 20,borderRadius: 5,}}
                   placeholder="EMAIL"></TextInput>
                    </TouchableOpacity> 
                    <TouchableOpacity style={{height:40,width:"90%",padding:10,backgroundColor:"ash",marginBottom:20}}>
                   <TextInput style={{borderWidth: 1,borderColor: 'grey',padding: 10,marginTop:20,marginBottom: 20,borderRadius: 5,}}
                   placeholder="PASSWORD"></TextInput>
                    </TouchableOpacity> 
                    <TouchableOpacity style={{height:40,width:"90%",padding:10,backgroundColor:"ash",marginBottom:20}}>
                   <TextInput style={{borderWidth: 1,borderColor: 'grey',padding: 10,marginTop:20,marginBottom: 20,borderRadius: 5,}}
                   placeholder="CONFIRM PASSWORD"></TextInput>
                    </TouchableOpacity>
                    <TouchableOpacity style={{height:40,width:"90%",padding:10,backgroundColor:"ash",marginBottom:20}}>
                   <TextInput style={{borderWidth: 1,borderColor: 'grey',padding: 10,marginTop:20,marginBottom: 20,borderRadius: 5,}}
                   placeholder="MOBILE"></TextInput>
                    </TouchableOpacity>  
                    <TouchableOpacity style={{height:40,width:"90%",padding:10,marginTop:50,marginBottom:20}}>
                   <Text style={{textAlign:"center",borderWidth: 1,borderColor: 'grey',padding: 10,marginBottom: 20,borderRadius: 5,backgroundColor:"pink"}}
                   >CREATE ACCOUNT</Text>
                    </TouchableOpacity> 

                    
                </View>
        </View>
    );
}

