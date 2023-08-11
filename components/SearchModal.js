import React, { useState, useEffect } from "react";
import { Dimensions, View, StyleSheet, Modal, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AppText from "./AppText";
import colors from "../config/colors";
import AppTextInput from "./AppTextInput";
import AppIcon from "./AppIcon";
import ModalListItem from "./ModalListItem";
import filter from 'lodash.filter';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;





const SearchModal = ({toggleModal, spots}) => {
    const [isOpen, setIsOpen] = useState(true);
    const [modalList, setModalList] = useState(spots);
    const [searchQuery, setSearchQuery] = useState("");

    const contains = ({name}, query) => name.toLowerCase().includes(query.toLowerCase());

    const toggleIt = () => {
        setIsOpen(false);
        toggleModal();
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        const filteredList = filter(spots, (spot) => {
            return contains(spot, query);
        });
       setModalList(filteredList);
    };

    return (
        <Modal
          animationType='slide'
          transparent
          onDismiss={() => setIsOpen(false)}
          onShow={() => setIsOpen(true)}
          visible={isOpen}>
            <View style={styles.centeredView}>            
                <View style={styles.modalView}>
                    <TouchableOpacity onPress={toggleIt} style={styles.closeIcon}>
                        <AppIcon name='window-close' iconColor={colors.black} />
                    </TouchableOpacity>
                    
                    <AppTextInput icon='magnify' containerStyle={styles.modalSearchBar} placeholder='Search' onChangeText={handleSearch} />

                    <ScrollView showsVerticalScrollIndicator={false} style={{width: '100%'}}>
                        {modalList &&
                        modalList.map((spot, index) => 
                            <ModalListItem key={index} spot={spot} onPress={toggleIt} />
                        )}
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};






const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
        width: '95%',
        height: '80%',
        backgroundColor: colors.light,
        borderRadius: 20,
        padding: '5%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: '100%',
        elevation: 5,
    },
    closeIcon: {
        alignSelf: 'flex-end'
    },
    button: {
        backgroundColor: colors.primary,
        width: '100%',
        height: screenHeight * .05,
        borderRadius: 10,
        padding: 10,
        marginVertical: screenHeight * .005,
        elevation: 2,
        alignItems: 'flex-start'
    },
    textStyle: {
      color: colors.white,
      fontFamily: 'Inter-Bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    modalSearchBar: {
        borderColor: colors.blue,
        borderWidth: 1,
        backgroundColor: colors.white,
        borderRadius: 10
    }
});











export default SearchModal;

