import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { Avatar, ListItem, SearchBar } from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler'
import { api } from '../../common/axios'
import {MovesAPI} from '../../common/constants'
import CustomHeader from '../../components/Header'
import {PokemonTypeIcon} from '../../common/constants'
import { uniqBy } from "lodash";

const MoveList = ()=> {

    const [moveKeyword, setMoveKeyword] = useState("")
    const [moves, setMoves] = useState([])
    const navigation = useNavigation()

    useEffect(()=> {
        api("GET", MovesAPI, null)
        // remove duplicate moves
        .then(res => setMoves(uniqBy(res.data, 'nid')))
        .catch(err => console.log(err))
    }, [])

    const filterMoves = ()=> {
        return moves.filter(move => {
            return move.title.toLowerCase().includes(moveKeyword.toLowerCase())
        })
    }
    console.log(moves)
    const renderItem = ({item, index})=> {
        return(
            <ListItem
            bottomDivider
            onPress={()=>navigation.navigate("MoveDetail")}
            >
                <Avatar source={PokemonTypeIcon[item.move_type.toLowerCase()]} size="medium" />
                <ListItem.Content>
                    <ListItem.Title>{item.title}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        )
    }

    return(
        <View>
            <CustomHeader title="Moves" isMain={true} />
            <SearchBar
                placeholder="Move ..."
                onChangeText={(text) => setMoveKeyword(text)}
                inputContainerStyle={{ backgroundColor: "#e9e9e9", height: 40 }}
                containerStyle={{ backgroundColor: "white" }}
                lightTheme={true}
                round={true}
                showLoading={true}
                value={moveKeyword}
                style={{ fontSize: 14 }}
            />
            <FlatList
            data={filterMoves()}
            renderItem={renderItem}
            ListFooterComponent={<View></View>}
            ListFooterComponentStyle={{height: 180}}
            keyExtractor={item => "move" + item.nid}
            />
        </View>
    )
}

export default MoveList