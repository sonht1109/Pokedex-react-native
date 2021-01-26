import React from 'react'
import { Header, Icon } from 'react-native-elements'
import {BackgroundColor} from '../common/constants'
import { useNavigation } from '@react-navigation/native';

const CustomHeader = ({isMain, title, color = BackgroundColor})=> {
    const navigation = useNavigation()
    if(isMain) {
        return(
            <Header
            centerComponent={{ text: title, style: { color: "#fff", fontWeight: "700",
            fontSize: 16 } }}
            containerStyle={{backgroundColor: color, ...headerStyle}}
            />
        )
    }
    else{
        return(
            <Header
            leftComponent={
                <Icon
                name="keyboard-arrow-left"
                color="white"
                size={40}
                onPress={()=> navigation.goBack()}
                />
            }
            containerStyle={{backgroundColor: color, ...headerStyle}}
            />
        )
    }
}

const headerStyle = {
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 0,
}

export default CustomHeader