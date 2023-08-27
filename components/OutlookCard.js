import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;




const OutlookCard = ({ title, cardDetails }) => {
    return (
        <View style={styles.card}>
            <View style={styles.titleContainer}>
                <AppText passedStyle={styles.title}>{title}</AppText>
            </View>
            <View style={styles.detailsContainer}>{cardDetails}</View>
        </View>
    );
}




const styles = StyleSheet.create({
    card: {
        width: screenWidth * 0.9,
        height: screenHeight * 0.1,
        borderRadius: 15,
        backgroundColor: colors.dark,
        marginVertical: screenHeight * .0125,
        padding: '2.5%'
    },
    detailsContainer: {
        flex: 6,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    titleContainer: {
        flex: 4,
    },
    title: {
        fontFamily: 'Inter-Bold',
        fontSize: 14,
        color: colors.medium,
    }
});


export default OutlookCard;
