import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Image } from 'react-native-elements'
import {BackgroundColor, PokemonTypeIcon} from '../common/constants'

const PokemonMove = ({move}) => {
    return(
        <Image
            source={PokemonTypeIcon[move.toLowerCase()] || PokemonTypeIcon['default']}
            style={{width: 45, height: 45}}
            placeholderStyle={{ backgroundColor: "transparent" }}
            PlaceholderContent={<ActivityIndicator color={BackgroundColor} size="large" />}
        />
    )
}

export default PokemonMove