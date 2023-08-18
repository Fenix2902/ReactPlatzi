import React from "react";
import{TextInput, Button, Text,View}from "react-native"

export function LoginForm(){
    return(
        <>
        <View>
        <TextInput placeholder="Email"/>
        <TextInput placeholder="Contraseña"/>
        <Button title='Iniciar Sesión' onPress={()=> console.log("Enviado")}/>
        </View>
        </>
        
    )
}