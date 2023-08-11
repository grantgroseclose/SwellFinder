import React, { useState } from 'react';
import { Dimensions, StyleSheet, View, Text, Alert } from 'react-native';
import * as Yup from 'yup';

import colors from '../config/colors';
import Screen from '../components/Screen';
import { AppForm, AppFormField, AppSubmitButton } from '../components/forms';
import AppButton from '../components/AppButton';
import authApi from "../api/auth";
import useAuth from '../auth/useAuth';
import useApi from '../hooks/useApi';
import usersApi from '../api/users';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    username: Yup.string().required().min(6).label('Username'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(6).label('Password')
})




const AccountScreen = (props) => {
    const { user, logOut } = useAuth();
    
    const updatePasswordApi = useApi(usersApi.update);
    const [error, setError] = useState();

    const handleSubmit = async (userInfo) => {
        const result = await updatePasswordApi.request(userInfo);
    
        if (!result.ok) {
          if (result.data) setError(result.data.error);
          else {
            setError("An unexpected error occurred.");
            Alert.alert('Error', 'An unexpected error occurred.');
            return;
          }
          Alert.alert('Error', result.data.error);
          return;
        }
        
        Alert.alert('Success!', 'Your password has now been updated.');
    };
    

    return (
        <Screen passedStyle={{justifyContent: 'flex-start'}}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Account</Text>
            </View>

            
            <AppForm 
            style={styles.formContainer}
            initialValues={{name: user.name, username: user.username, email: user.email, password: ''}}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            >
                <View>
                    <AppFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='contacts'
                    name='name'
                    placeholder={user.name}
                    placeholderTextColor={colors.black}
                    editable={false}
                    />

                    <AppFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='account'
                    name='username'
                    placeholder={user.username}
                    placeholderTextColor={colors.black}
                    editable={false}
                    />

                    <AppFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='email'
                    keyboardType='email-address'
                    name='email'
                    placeholder={user.email}
                    placeholderTextColor={colors.black}
                    editable={false}
                    textContentType='emailAddress'
                    />

                    <AppFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='lock'
                    name='password'
                    placeholder='Password'
                    secureTextEntry
                    textContentType='password'
                    />

                    <AppSubmitButton title='Update' />
                </View>
            </AppForm>

            <AppButton title='Logout' onPress={() => logOut()}/>
        </Screen>
    );
}




const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        padding: 10,
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    headerText: {
        fontFamily: 'Inter-Black',
        fontSize: screenHeight * .05,
        fontWeight: 'bold',
        color: colors.white
    },
    formContainer: {
        flex: 2,
        padding: 10,
        flex: 4,
        width: '100%',
        // justifyContent: 'space-between'
    }
});

export default AccountScreen;
