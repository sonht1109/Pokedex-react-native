import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Image } from 'react-native-elements'
import {PokemonTypeIcon} from '../common/constants'

const PokemonMove = ({move}) => {
    return(
        <Image
            source={PokemonTypeIcon[move.toLowerCase()] || PokemonTypeIcon['default']}
            style={{width: 45, height: 45}}
            PlaceholderContent={<ActivityIndicator />}
            placeholderStyle={{ backgroundColor: "transparent" }}
        />
    )
}

export default PokemonMove