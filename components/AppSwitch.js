import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;




const AppSwitch = ({
    containerStyle,
    navigation,
    selectionMode,
    option1,
    option2,
    onSelectSwitch,
    selectionColor
}) => {
    const [getSelectionMode, setSelectionMode] = useState(selectionMode);
    const updatedSwitchData = val => {
        setSelectionMode(val);
        onSelectSwitch(val);
    };

    return (
        <View style={containerStyle}>
            <View style={styles.switchContainer}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => updatedSwitchData(1)}
                    style={{
                        flex: 1,
                        backgroundColor: getSelectionMode == 1 ? selectionColor : 'transparent',
                        borderRadius: 25,
                        justifyContent: 'center',
                        alignItems: 'center',
                }}>
                    <AppText passedStyle={styles.toggleText}>{option1}</AppText>
                </TouchableOpacity>
                <TouchableOpacity
                    TouchableOpacity
                    activeOpacity={1}
                    onPress={() => updatedSwitchData(2)}
                    style={{
                        flex: 1,
                        backgroundColor: getSelectionMode == 2 ? selectionColor : 'transparent',
                        borderRadius: 25,
                        justifyContent: 'center',
                        alignItems: 'center',
                }}>
                    <AppText passedStyle={styles.toggleText}>{option2}</AppText>
                </TouchableOpacity>
            </View>
        </View>
    );
}




const styles = StyleSheet.create({
    switchContainer: {
        // height: screenHeight * .06,
        width: screenWidth * .45,
        height: 44,
        // width: 215,
        backgroundColor: colors.blue,
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 2
    },
    toggleText: {
        fontFamily: 'Inter-Bold',
        color: colors.dark,
        fontSize: 16,
    },
});


export default AppSwitch;
