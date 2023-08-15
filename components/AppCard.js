import React from "react";
import { Dimensions, View, StyleSheet, TouchableOpacity, Image } from "react-native";
// import { Image } from "react-native-expo-image-cache";
import { create } from 'apisauce';

import AppText from "./AppText";
import colors from "../config/colors";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;




const AppCard = ({ title, subTitle, image, onPress }) => {
  

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
        <View style={styles.imageContainer}>
            <Image style={{
                    width: '100%',
                    height: '100%',
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                  }} 
                  source={{ uri: image }} 
            />
        </View>
        <View style={styles.detailsContainer}>
            <AppText passedStyle={styles.title}>{title}</AppText>
            <AppText passedStyle={styles.subTitle}>{subTitle}</AppText>
        </View>
    </TouchableOpacity>
  );
}




const styles = StyleSheet.create({
  card: {
    width: screenWidth * 0.85,
    height: screenHeight * 0.35,
    borderRadius: 15,
    backgroundColor: colors.dark,
    marginLeft: screenWidth * .025,
    marginRight: screenWidth * .025
  },
  detailsContainer: {
    flex: 3,
    paddingHorizontal: '5%',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 7
  },
  subTitle: {
    fontFamily: 'Inter-Light',
    color: colors.light
  },
  title: {
    fontFamily: 'Inter-Bold',
    color: colors.blue,
  },
});


export default AppCard;
