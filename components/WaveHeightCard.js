import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";

import colors from "../config/colors";

const screenHeight = Dimensions.get('window').height;




const WaveHeightCard = ({ cardDetails }) => {
    return (
        <View style={styles.card}>
            {cardDetails}
        </View>
    );
}




const styles = StyleSheet.create({
    card: {
        flex: 1,
        width: '100%',
        height: screenHeight * 0.15,
        borderRadius: 15,
        backgroundColor: colors.medium,
        marginVertical: screenHeight * .0125,
        paddingVertical: '5%',
        paddingHorizontal: '0.5%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: '5%'
    }
});


export default WaveHeightCard;
