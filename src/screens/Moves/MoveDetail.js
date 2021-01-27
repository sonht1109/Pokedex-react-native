import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import CustomHeader from '../../components/Header';
import { BackgroundColor, PokemonTypeIconColor } from '../../common/constants'
import { useNavigation, useRoute } from '@react-navigation/native';
import PokemonMove from '../../components/PokemonMove';

const MoveDetail = () => {

    const { move } = useRoute().params
    const navigation = useNavigation()
    const color = PokemonTypeIconColor[move.move_type.toLowerCase()]

    useLayoutEffect(() => {
        const parent = navigation.dangerouslyGetParent()
        parent.setOptions({
          tabBarVisible: false
        })
        return ()=>{
          parent.setOptions({
            tabBarVisible: true
          })
        }
      }, [navigation])

    return (
        <View style={{ flex: 1, backgroundColor: color }}>
            <CustomHeader isMain={false} color={color} />
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.detailContainer}>
                    <Text style={{ fontWeight: '700', fontSize: 30 }}>
                        {move.title}
                    </Text>
                    <View style={{margin: 20}}>
                        <PokemonMove move={move.move_type} />
                        <Text style={{color: PokemonTypeIconColor[move.move_type.toLowerCase()], textAlign: "center"}}>
                            {move.move_type}
                        </Text>
                    </View>
                    
                    <Text>Category : {move.move_category}</Text>
                    <Text>Damage window : {move.damage_window}</Text>
                    <Text>Dodge window : {move.dodge_window}</Text>

                    <View style={{marginTop: 20, flexDirection: "row"}}>
                        <View style={styles.movePart}>
                            <Text style={[styles.movePartTitle, {color: "#5cbc59"}]}>
                                Cooldown
                            </Text>
                            <Text style={{color: "#5cbc59"}}>{move.cooldown}</Text>
                        </View>
                        <View style={styles.movePart}>
                            <Text style={styles.movePartTitle}>
                                Energy
                            </Text>
                            <Text style={{color: BackgroundColor}}>{move.energy_gain}</Text>
                        </View>
                        <View style={[styles.movePart, {borderRightWidth: 0}]}>
                            <Text style={[styles.movePartTitle, {color: "#d84458"}]}>
                                Power
                            </Text>
                            <Text style={{color: "#d84458"}}>{move.power}</Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    detailContainer: {
        flex: 1,
        backgroundColor: "white",
        marginVertical: 100,
        marginHorizontal: 20,
        // borderTopLeftRadius: 50,
        // borderTopRightRadius: 50,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 50,
        paddingHorizontal: 20
    },
    movePart: {
        flex: 1/3,
        justifyContent: 'center',
        alignItems: "center",
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderColor: "#e9e9e9",
        padding: 10
    },
    movePartTitle: {
        color: BackgroundColor,
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 10
    },
})

export default MoveDetail