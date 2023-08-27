import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";

import colors from "../config/colors";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;




const TideCard = ({ width, height, children }) => {
    return (
        <View style={styles.card}>
            {children}
        </View>
    );
}




const styles = StyleSheet.create({
    card: {
        flex: 1,
        width: screenWidth,
        height: screenHeight * 0.25,
        borderRadius: 15,
        backgroundColor: colors.dark,
        marginVertical: screenHeight * .0125,
        paddingVertical: '2.5%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
});


export default TideCard;
