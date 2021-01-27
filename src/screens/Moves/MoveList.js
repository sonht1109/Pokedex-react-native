import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
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
    const params = useRoute()

    useEffect(()=> {
        api("GET", MovesAPI, null)
        // remove duplicate moves
        .then(res => setMoves(uniqBy(res.data, 'nid')))
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        if(params.params){
            if(params.params.move){
                console.log(params.params);
                setMoveKeyword(params.params.move)
            }
        }
    }, [params.params])

    const filterMoves = ()=> {
        return moves.filter(move => {
            return move.title.toLowerCase().includes(moveKeyword.toLowerCase())
        })
    }

    const renderItem = ({item, index})=> {
        return(
            <ListItem
            bottomDivider
            onPress={()=>navigation.navigate("MoveDetail", {
                move: filterMoves()[index]
            })}
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