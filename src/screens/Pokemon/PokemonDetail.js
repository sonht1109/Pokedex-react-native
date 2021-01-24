import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { BackgroundColor, PokemonTypeIconColor } from '../../common/constants'
import CustomHeader from '../../components/Header'
import PokemonMove from '../../components/PokemonMove';

const PokemonDetail = () => {
    const { pokemon } = useRoute().params
    const navigation = useNavigation()
    console.log(pokemon)

    const renderMoves = (moves) => {
        return moves.map((move, index)=> {
            return(
                <View style={{margin: 10, alignItems: "center"}}>
                    <PokemonMove move={move} key={index} />
                    <Text style={{fontSize: 12, fontWeight: "500", color: PokemonTypeIconColor[move.toLowerCase()]}}>{move}</Text>
                </View>
            )
        })
    }

    return (
        <View style={{ flex: 1, backgroundColor: BackgroundColor }}>
            <CustomHeader isMain={false} navigation={navigation} />
            <ScrollView style={{flex: 1}}>
                <View style={styles.detail}>
                    <Image
                        source={{ uri: pokemon.uri }}
                        style={styles.avatar}
                    />
                    <Text style={{fontWeight: "700", fontSize: 30}}>
                        {pokemon.title_1}
                    </Text>
                    <Text style={{color: "#a4acac"}}>A {pokemon.field_pokemon_generation} pokemon</Text>
                    <View  style={{flexDirection: "row"}}>
                        {renderMoves(pokemon.field_pokemon_type.split(", "))}
                    </View>
                    {/* <Text>
                        <Text>Catch rate: {pokemon.catch_rate}, </Text>
                        <Text>Flee rate: {pokemon.field_flee_rate}</Text>
                    </Text> */}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    detail: {
        backgroundColor: "white",
        flex: 1,
        marginTop: 150,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        marginHorizontal: 20,
        paddingTop: 80,
        paddingBottom: 40,
        paddingHorizontal: 20
    },
    avatar: {
        width: 200,
        height: 200,
        position: "absolute",
        top: -140,
        alignSelf: "center"
    }
})

export default PokemonDetail