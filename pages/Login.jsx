import React,{useState} from "react";
import { View,Text,TextInput,TouchableOpacity, Button } from "react-native";

export default function Login(params){
    const navigation = params.navigation;
    const[name,setName] = useState('val');
    return(
        <View
            style={{
                backgroundColor:"black",
                flex:1,
                color:"white"
            }}
            
            >
                <View style={{flex:1,padding:40,marginTop:50}}><Text style={{padding:20,textAlign:"center",color:"white",fontWeight:600,fontSize:30}}>WELCOME BACK</Text></View>
                <View style={{flex:3, alignItems:"center"}}>
                    <Text style={{padding:20,textAlign:"center",color:"pink"}}>LOGIN</Text>
                  
                   <TextInput style={{borderWidth: 1,borderColor: 'grey',padding: 10,marginBottom: 20,borderRadius: 5,color:"white"}}
                   placeholder='USER NAME' onChangeText={name=>setName(name)} />
                  
                    
                   <TextInput style={{borderWidth: 1,borderColor: 'grey',padding: 10,marginTop:20,marginBottom: 20,borderRadius: 5,color:"white"}}
                   placeholder="PASSWORD"></TextInput>
                   
                    
                   <Text style={{textAlign:"center",borderWidth: 1,borderColor: 'grey',padding: 10,marginBottom: 20,borderRadius: 5,backgroundColor:"pink"}}
                   >LOGIN</Text>
                    

                 </View>   
                </View>
        
    );
}

