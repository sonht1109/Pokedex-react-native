import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { Avatar, ListItem, SearchBar } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { api } from '../../common/axios';
import { BackgroundColor, PokemonsAPI } from '../../common/constants'
import pokeballIcon from '../../../assets/images/pokeball.png'
import { useNavigation, useRoute } from '@react-navigation/native';
import PokemonMove from '../../components/PokemonMove';
import CustomHeader from '../../components/Header';

const PokemonList = () => {

    const [pokemons, setPokemons] = useState([])
    const [keyword, setKeyword] = useState("")
    const [displayPokemons, setDisplayPokemons] = useState([])
    const navigation = useNavigation()
    const {params} = useRoute()

    useEffect(() => {
        api("GET", PokemonsAPI, null)
            .then(res => {
                setPokemons(res.data)
                setDisplayPokemons(res.data.slice(0, 10))
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        if(params){
            setKeyword(params.pokemonName)
        }
    }, [params])

    const renderMoves = (moves) => {
        return moves.map((move, index) => {
            return <PokemonMove key={Date.now.toString() + index} move={move} />
        })
    }

    const renderItem = ({ item, index }) => {
        return (
            <ListItem
                bottomDivider={true}
                onPress={() => navigation.navigate("PokemonDetail", {
                    pokemon: flatlistData()[index]
                })}
            >
                <Avatar
                    source={item.uri ? { uri: item.uri } : pokeballIcon}
                    size="medium"
                />
                <ListItem.Content>
                    <ListItem.Title>{item.title_1}</ListItem.Title>
                    <ListItem.Subtitle>#{item.number}</ListItem.Subtitle>
                </ListItem.Content>
                <View style={{ flexDirection: "row" }}>
                    {renderMoves(item.field_pokemon_type.split(", "))}
                </View>
            </ListItem>
        )
    }

    const onGetData = () => {
        setDisplayPokemons((prev) => {
            let paging = prev.length
            return prev.concat(pokemons.slice(paging, paging + 10))
        })
    }

    const flatlistData = ()=> {
        return keyword === "" ? displayPokemons : pokemons.filter((pokemon)=>{
            return pokemon.title_1.toLowerCase().includes(keyword.toLowerCase())
        })
    }

    return (
        <View contentContainerStyle={styles.container}>
            <CustomHeader isMain={true} title="Pokemons" />
            <SearchBar
                placeholder="Pokemon name..."
                onChangeText={(text) => setKeyword(text)}
                inputContainerStyle={{ backgroundColor: "#e9e9e9", height: 40 }}
                containerStyle={{ backgroundColor: "white" }}
                lightTheme={true}
                round={true}
                showLoading={true}
                value={keyword}
                style={{ fontSize: 14 }}
            />
            <FlatList
                data={flatlistData()}
                keyExtractor={item => item.nid}
                renderItem={renderItem}
                initialNumToRender={10}
                ListFooterComponent={displayPokemons.length === pokemons.length || keyword !== "" ? <View /> : <ActivityIndicator animating size="large" color={BackgroundColor} />}
                ListFooterComponentStyle={{ height: 180 }}
                onEndReached={onGetData}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default PokemonList