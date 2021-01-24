import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ProgressBar from 'react-native-progress/Bar'

const PokemonStatus = ({ title, value, ratio, color }) => {
    return (
        <View style={styles.statusContainer}>
            <Text style={{flex: 1/7, color: color, fontWeight: '700'}}>{title}</Text>
            <Text style={{flex: 1/7, color: color, fontWeight: '700'}}>{value}</Text>
            <ProgressBar
                style={{flex: 5/7}}
                width={null}
                progress={ratio}
                animated={true}
                color={color}
                unfilledColor="#F0F0F0"
                borderWidth={0}
                height={8}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    statusContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        marginVertical: 8
    }
})

export default PokemonStatus