import React, { useState } from 'react';
import { Dimensions, StyleSheet, View, Text, Alert } from 'react-native';
import * as Yup from 'yup';

import colors from '../config/colors';
import Screen from '../components/Screen';
import { AppForm, AppFormField, AppSubmitButton } from '../components/forms';

import usersApi from "../api/users";
import useApi from "../hooks/useApi";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    username: Yup.string().required().min(6).label('Username'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(6).label('Password')
})




const RegisterScreen = (props) => {
    const registerApi = useApi(usersApi.register);
    const [error, setError] = useState();

    const handleSubmit = async (userInfo) => {
        const result = await registerApi.request(userInfo);
    
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
    
        Alert.alert('Success!', 'Registration successful.');
    };

    return (
        <Screen passedStyle={{justifyContent: 'flex-start'}}>
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>New Account</Text>
            </View>

            
            <AppForm 
            style={styles.formContainer}
            initialValues={{name: '', username: '', email: '', password: ''}}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            >
                <View>
                    <AppFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='contacts'
                    name='name'
                    placeholder='Name'
                    />

                    <AppFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='account'
                    name='username'
                    placeholder='Username'
                    />

                    <AppFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='email'
                    keyboardType='email-address'
                    name='email'
                    placeholder='Email'
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
                </View>

                <AppSubmitButton title='Register' />
            </AppForm>
        </Screen>
    );
}




const styles = StyleSheet.create({
    logoContainer: {
        flex: 1,
        padding: 10,
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    logoText: {
        fontFamily: 'Inter-Black',
        fontSize: screenHeight * .05,
        fontWeight: 'bold',
        color: colors.white
    },
    formContainer: {
        padding: 10,
        flex: 4,
        width: '100%',
        justifyContent: 'space-between'
    }
});

export default RegisterScreen;
