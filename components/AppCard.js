import React, { useState } from "react";
import { Dimensions, View, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";
import AppIcon from "./AppIcon";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;




const AppCard = ({ title, subTitle, image, onPress, onDelete }) => {
  const [deleteButtonVisible, setDeleteButtonVisible] = useState(false);

  const toggleDeleteButton = () => {
      setDeleteButtonVisible(!deleteButtonVisible);
  };

  const handlePress = () => {
      Alert.alert('Delete', 'Are you sure you want to delete this spot?', [
        { text: "Yes", onPress: () => handleDelete() },
        { text: "No" },
    ]);
  };

  const handleDelete = async () => {
      try {
          await onDelete();
      } catch (error) {
          Alert.alert('Error', 'An unexpected error occured while attempting to delete spot.');
      }
  };


  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      onLongPress={() => {
        toggleDeleteButton();
      }}
    >
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

      { deleteButtonVisible &&
        <TouchableOpacity onPress={handlePress} style={styles.deleteButton}>
            <AppIcon name='window-close' iconColor={colors.black} />
        </TouchableOpacity>
      }
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
  deleteButton: {
    // position: 'absolute',
    // left: screenWidth * 0.85,
    // top: 0,
    width: 40,
    height: 40,
    position: 'absolute',
    right: -10,
    top: -10,
  }
});


export default AppCard;
