import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;




const CardDisplay = ({ header, subHeader, cards }) => {
  return (
    <View style={{marginVertical: '2.5%'}}>
        <View style={styles.headerTextContainer}>
            {header}
        </View>

        <View style={styles.datesContainer}>
            {subHeader}
        </View>

        <View style={{alignItems: 'center'}}>
            {cards}
        </View>
    </View>
  );
}




const styles = StyleSheet.create({
    headerTextContainer: {
        padding: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    datesContainer: {
        width: '100%',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        paddingHorizontal: '5%'
    },
});


export default CardDisplay;
