import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import CustomHeader from '../../components/Header'

const PokemonDetail = ()=> {
    const {pokemon} = useRoute().params
    const navigation = useNavigation()
    return(
        <View>
            <CustomHeader isMain={false} navigation={navigation} />
            <Text>{pokemon.title_1}</Text>
        </View>
    )
}

export default PokemonDetail