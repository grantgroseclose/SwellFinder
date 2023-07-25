import React from "react";
import { Dimensions, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Cell } from 'react-native-tableview-simple';

import AppText from "./AppText";
import colors from "../config/colors";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;




const AppCard = ({ title, subTitle, image }) => {
  return (
    <TouchableOpacity style={styles.card}>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={image} />
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
    backgroundColor: colors.light,
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
  image: {
    width: '100%',
    maxHeight: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  subTitle: {
    fontFamily: 'Inter-Light',
    color: colors.dark
  },
  title: {
    fontFamily: 'Inter-Bold',
    color: colors.dark,
  },
});


export default AppCard;
