import React from 'react'
import { Header, Icon } from 'react-native-elements'
import {BackgroundColor} from '../common/constants'

const CustomHeader = ({isMain, title, navigation})=> {
    if(isMain) {
        return(
            <Header
            centerComponent={{ text: title, style: { color: "#fff", fontWeight: "700",
            fontSize: 16 } }}
            containerStyle={{backgroundColor: BackgroundColor, ...headerStyle}}
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
            containerStyle={{backgroundColor: BackgroundColor}}
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