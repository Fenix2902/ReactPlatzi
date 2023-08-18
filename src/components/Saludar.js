import React from "react";
import { Text, View } from "react-native";

export function Saludar(props){
    // const {firstname ="Miguel", lastname="Calle"} = props;
    const {firstname, lastname} = props;
    return (
        <>
        <View>
            <Text>Hola {firstname}{lastname}</Text>
        </View>
        </>
    )
}

Saludar.defaultProps = {
    firstname: 'Juan',
    lastname:'Perez',
}