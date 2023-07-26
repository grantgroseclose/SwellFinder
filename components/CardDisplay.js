import React from "react";
import { Dimensions, View, StyleSheet, ScrollView } from "react-native";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;




const CardDisplay = ({ header, subHeader, isHorizontal, cards }) => {
  return (
    <View style={{marginVertical: '2.5%'}}>
        <View style={styles.headerTextContainer}>
            {header}
        </View>

        <View style={styles.datesContainer}>
            {subHeader}
        </View>

        <View>
            <ScrollView horizontal={isHorizontal} contentContainerStyle={{alignItems: 'center'}}>
                {cards}
            </ScrollView>
        </View>
    </View>
  );
}




const styles = StyleSheet.create({
    headerTextContainer: {
        padding: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start'
    },
    datesContainer: {
        width: '100%',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        paddingHorizontal: '5%'
    },
});


export default CardDisplay;
