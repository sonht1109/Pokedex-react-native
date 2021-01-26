import React from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import CustomHeader from '../../components/Header';
import {PokemonTypeIcon} from '../../common/constants'

const MoveDetail = ()=> {
    return(
        <ScrollView>
            <CustomHeader isMain={false} />
        </ScrollView>
    )
}

export default MoveDetail