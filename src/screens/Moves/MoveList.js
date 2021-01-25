import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { api } from '../../common/axios'
import {MovesAPI} from '../../common/constants'

const MoveList = ()=> {

    useEffect(()=> {
        api("GET", MovesAPI, null)
        .then(res => console.log(res.data[0]))
        .catch(err => console.log(err))
    }, [])

    return(
        <View>
            <Text>This is move list</Text>
        </View>
    )
}

export default MoveList