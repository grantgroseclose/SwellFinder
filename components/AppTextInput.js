import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";




const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={[styles.container, otherProps['containerStyle']]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        onChangeText={otherProps['onChangeText']}
        placeholder={otherProps['placeholder']}
        editable={otherProps['editable']}
        placeholderTextColor={otherProps['placeholderTextColor'] ? otherProps['placeholderTextColor'] : colors.medium}
        clearButtonMode='while-editing'
        style={styles.text}
        {...otherProps}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    width: '90%',
    fontSize: 18,
    fontFamily: 'Avenir',
    color: colors.dark
  }
});

export default AppTextInput;
