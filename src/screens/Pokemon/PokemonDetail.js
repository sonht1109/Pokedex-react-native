import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { PokemonTypeIconColor } from '../../common/constants'
import CustomHeader from '../../components/Header'
import PokemonMove from '../../components/PokemonMove';
import PokemonStatus from '../../components/PokemonStatus'

const PokemonDetail = () => {
  const { pokemon } = useRoute().params
  const navigation = useNavigation()

  const maxSTA = 500
  const maxATK = 500
  const maxDEF = 500
  const maxCP = 6000

  const [values, setValues] = useState({
    sta: 0,
    atk: 0,
    def: 0,
    cp: 0
  })

  const moves = pokemon.field_pokemon_type.split(", ")
  const mainColor = PokemonTypeIconColor[moves[0].toLowerCase()]
  const evolutions = pokemon.field_evolutions.split(", ")

  useEffect(() => {
    setValues((prev) => {
      return {
        ...prev,
        sta: pokemon.sta,
        atk: pokemon.atk,
        def: pokemon.def,
        cp: pokemon.cp
      }
    })
  }, [pokemon])

  const renderMoves = (moves) => {
    return moves.map((move, index) => {
      return (
        <View style={{ margin: 10, alignItems: "center" }} key={move + index} >
          <PokemonMove move={move} />
          <Text style={{ fontSize: 12, fontWeight: "500", color: PokemonTypeIconColor[move.toLowerCase()] }}>{move}</Text>
        </View>
      )
    })
  }

  return (
    <View style={{ flex: 1, backgroundColor: mainColor }}>
      <CustomHeader isMain={false} navigation={navigation} color={mainColor} />
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.detail}>
          {/* avt */}
          <Image
            source={{ uri: pokemon.uri }}
            style={styles.avatar}
          />
          {/* name */}
          <Text style={{ fontWeight: "700", fontSize: 30, textAlign: "center" }}>
            {pokemon.title_1}
          </Text>

          <Text style={{ color: "#a4acac" }}>A {pokemon.field_pokemon_generation} pokemon</Text>
          <View style={{ flexDirection: "row" }}>
            {renderMoves(moves)}
          </View>
          {/* rate of catch and flee */}
          <Text>
            <Text>Catch rate: {pokemon.catch_rate} , </Text>
            <Text>Flee rate: {pokemon.field_flee_rate}</Text>
          </Text>
          {/* status */}
          <View style={{ marginVertical: 20 }}>
            <PokemonStatus
              title="STA"
              value={values.sta}
              ratio={values.sta / maxSTA}
              color="#5cbc59"
            />
            <PokemonStatus
              title="ATK"
              value={values.atk}
              ratio={values.atk / maxATK}
              color="#fca44c"
            />
            <PokemonStatus
              title="DEF"
              value={values.def}
              ratio={values.def / maxDEF}
              color="#626472"
            />
            <PokemonStatus
              title="CP"
              value={values.cp}
              ratio={values.cp / maxCP}
              color="#559EDF"
            />
          </View>

          {/* skills */}
          <View style={styles.skill}>
            <Text>Primary skills : </Text>
            <Text style={{ color: mainColor, flexWrap: 'wrap' }}>
              {pokemon.field_primary_moves}
            </Text>
          </View>

          <View style={styles.skill}>
            <Text>Secondary skills : </Text>
            <Text style={{ color: mainColor, flexWrap: 'wrap' }}>
              {pokemon.field_secondary_moves}
            </Text>
          </View>

          {/* evolutions */}
          <View style={styles.skill}>
            <Text>Evolutions : </Text>
            <Text>
              {evolutions.map((e, index) => {
                return (
                  <Text
                  key={e + index}
                  style={{ fontWeight: "700" }}
                  onPress={() => navigation.navigate("PokemonList", {
                    pokemonName: e
                  })}
                  >
                    {e}{index !== evolutions.length - 1 ? ', ' : ''}</Text>
                )
              })}
            </Text>
          </View>
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
    paddingHorizontal: 30
  },
  avatar: {
    width: 200,
    height: 200,
    position: "absolute",
    top: -140,
    alignSelf: "center"
  },
  skill: {
    flexDirection: "row",
    alignSelf: "flex-start",
    marginVertical: 5,
    flexWrap: 'wrap',
  }
})

export default PokemonDetail